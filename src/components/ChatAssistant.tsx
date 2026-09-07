import React, { useState, useEffect, useRef } from 'react';
import Markdown from 'react-markdown';
import { capabilities, portfolioWork } from '../data';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-chat-assistant', handleOpen);
    return () => window.removeEventListener('open-chat-assistant', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("VITE_GEMINI_API_KEY is missing in your .env file.");
      }

      // Format chat history for Gemini API
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));
      chatHistory.push({ role: 'user', parts: [{ text: userText }] });

      // Format dynamic knowledge base with rich markdownContext from portfolio projects and sub-videos
      const projectsContext = portfolioWork.map((item) => {
        let entry = `### Project: ${item.title}\nClient: ${item.client} | Year: ${item.year || '2026'} | Discipline: ${item.discipline || 'N/A'}\n`;
        if (item.markdownContext) {
          entry += `Project Overview & Context:\n${item.markdownContext}\n`;
        }
        const spots = item.anthologySpots || item.gallery;
        if (spots && spots.length > 0) {
          entry += `Sub-Videos & Campaign Spots:\n`;
          spots.forEach((spot, idx) => {
            entry += `--- Spot ${idx + 1}: ${spot.title} (${spot.badge || spot.tag || 'Campaign Spot'}) [Ratio: ${spot.aspectRatio || '16:9'}] ---\n`;
            if (spot.markdownContext) {
              entry += `Detailed Accomplishments & Brief:\n${spot.markdownContext}\n`;
            }
            if (spot.prompts && spot.prompts.length > 0) {
              entry += `Key Directives & Prompts: ${spot.prompts.join(', ')}\n`;
            }
          });
        }
        return entry;
      }).join('\n\n====================\n\n');

      const capabilitiesContext = capabilities.map(c => `- ${c.title} (${c.category}): ${c.description} [Skills: ${c.tags.join(', ')}]`).join('\n');

      const systemPrompt = `You are a knowledgeable, minimalist portfolio assistant for this creative technology studio operating between Dubai and Hyderabad.
Base your answers firmly on this verified studio documentation, especially the detailed sub-video campaign briefs and accomplishments:

STUDIO CAPABILITIES:
${capabilitiesContext}

PORTFOLIO PROJECTS, SUB-VIDEOS & SPECIFIC CAMPAIGN ACCOMPLISHMENTS:
${projectsContext}

INSTRUCTIONS:
1. When asked about specific projects or sub-video spots (e.g. Kinetic Energy, Atelier Studio Promo, Editorial Motion & Form, Computational Narrative & Flow, Security Automation, or Interactive React Portfolio), reference the exact creative directions, technical accomplishments, tools (e.g., Google Flow, n8n, NotebookLM), and metrics from their markdown context.
2. Keep responses concise, direct, and professional (typically 2-4 sentences or clear bullet points).
3. Do not fabricate or speculate on facts outside this record.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: chatHistory
        })
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "API request failed");
      }

      const data = await response.json();
      const botReply = data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { role: 'model', text: botReply }]);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-white text-black border-2 border-black rounded-full px-6 py-3 font-bold uppercase tracking-widest hover:bg-black hover:text-[#E8E6E1] transition-colors"
        >
          Ask AI
        </button>
      ) : (
        <div className="w-80 sm:w-96 h-[26rem] sm:h-[28rem] bg-[#E8E6E1] border-2 border-black flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="border-b-2 border-black p-3 flex justify-between items-center bg-white">
            <span className="font-bold uppercase tracking-widest text-xs">Studio Assistant</span>
            <button onClick={() => setIsOpen(false)} className="font-bold text-xl leading-none hover:text-red-600">&times;</button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="bg-white border-2 border-black rounded-2xl rounded-tl-none p-3 text-sm">
              Hello. I am an AI assistant trained on this portfolio&apos;s context. Feel free to ask me about the background of any specific campaign or workflow.
            </div>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 text-sm border-2 border-black max-w-[88%] ${
                  msg.role === 'user'
                    ? 'bg-black text-white rounded-2xl rounded-tr-none self-end ml-auto'
                    : 'bg-white text-black rounded-2xl rounded-tl-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                }`}
              >
                {msg.role === 'model' ? (
                  <div className="markdown-chat font-sans leading-relaxed text-black text-xs sm:text-sm">
                    <Markdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="space-y-1.5 my-2 list-none pl-0">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="space-y-1.5 my-2 list-decimal pl-4">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="flex items-start gap-2">
                            <span className="text-black font-bold select-none text-[10px] mt-1">▪</span>
                            <span className="flex-1 leading-relaxed">{children}</span>
                          </li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-black">{children}</strong>
                        ),
                        code: ({ children }) => (
                          <code className="font-mono text-[11px] bg-black/10 px-1 py-0.5 rounded border border-black/15">{children}</code>
                        ),
                        h1: ({ children }) => (
                          <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-black mt-2.5 mb-1.5 border-b border-black/15 pb-1">
                            {children}
                          </h4>
                        ),
                        h2: ({ children }) => (
                          <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-black mt-2.5 mb-1.5 border-b border-black/15 pb-1">
                            {children}
                          </h4>
                        ),
                        h3: ({ children }) => (
                          <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-black mt-2 mb-1">
                            // {children}
                          </h4>
                        ),
                        h4: ({ children }) => (
                          <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-black mt-2 mb-1">
                            // {children}
                          </h4>
                        ),
                      }}
                    >
                      {msg.text}
                    </Markdown>
                  </div>
                ) : (
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                )}
              </div>
            ))}
            {isLoading && <div className="text-xs font-bold uppercase tracking-widest font-mono text-black/70">Generating...</div>}
            {error && <div className="text-red-600 text-xs font-bold border-2 border-red-600 bg-white p-2">{error}</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t-2 border-black flex bg-white">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Inquire about work..." 
              className="flex-1 p-3 outline-none text-sm bg-transparent"
            />
            <button type="submit" disabled={isLoading} className="border-l-2 border-black px-4 font-bold hover:bg-[#E8E6E1] transition-colors">→</button>
          </form>
        </div>
      )}
    </div>
  );
}