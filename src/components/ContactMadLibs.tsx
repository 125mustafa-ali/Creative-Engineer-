import React, { useState } from 'react';
import { siteConfig } from '../data';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ContactMadLibs: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(siteConfig.contactTopics[0] || 'Strategy & Positioning');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const payload = {
      access_key: "24ae8b7b-f23a-41b1-920f-9a312415bc40",
      name,
      company,
      service,
      message,
      email,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus("Success! Message sent.");
        setName('');
        setCompany('');
        setService(siteConfig.contactTopics[0] || 'Strategy & Positioning');
        setMessage('');
        setEmail('');
      } else {
        setSubmitStatus("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('');
      }, 6000);
    }
  };

  return (
    <section id="contact" className="w-full border-b border-black bg-[#E8E6E1]">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8 border-b border-black flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="block font-mono text-xs uppercase tracking-[0.2em] mb-2 text-black/70">
            [04 // DIRECT TRANSMISSION]
          </span>
          <h2 className="font-sans-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            Let's Talk
          </h2>
        </div>
        <div className="font-mono text-xs uppercase tracking-wider text-black/60">
          STATUS: ACCEPTING COMMISSIONS
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <form
          id="mad-libs-contact-form"
          onSubmit={onSubmit}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-serif-editorial leading-[1.6] md:leading-[1.8] text-black"
        >
          {/* Mad-Libs Conversational Flow */}
          <div className="space-y-8 md:space-y-10">
            {/* Line 1: My name is [Input] from [Input company]. */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-4">
              <span>My name is</span>
              <input
                type="text"
                id="contact-input-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="your name"
                required
                className="inline-block min-w-[220px] max-w-full flex-grow bg-transparent border-b-2 border-black px-2 py-0.5 font-serif-editorial italic text-black placeholder:text-black/40 focus:outline-none focus:bg-black/5 transition-colors"
              />
              <span>from</span>
              <input
                type="text"
                id="contact-input-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="company / studio"
                className="inline-block min-w-[220px] max-w-full flex-grow bg-transparent border-b-2 border-black px-2 py-0.5 font-serif-editorial italic text-black placeholder:text-black/40 focus:outline-none focus:bg-black/5 transition-colors"
              />
              <span>.</span>
            </div>

            {/* Line 2: Let's talk about [Pill Selectors for Strategy, Design, etc]. */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 pt-2">
              <span>Let's talk about</span>
              <div className="inline-flex flex-wrap gap-2.5 my-1">
                {siteConfig.contactTopics.map((topic) => {
                  const isSelected = service === topic;
                  return (
                    <button
                      key={topic}
                      type="button"
                      id={`topic-pill-${topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      onClick={() => setService(topic)}
                      className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-ui-sans font-semibold tracking-tight border border-black transition-all ${
                        isSelected
                          ? 'bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]'
                          : 'bg-white text-black hover:bg-black/10'
                      }`}
                    >
                      {topic}
                    </button>
                  );
                })}
              </div>
              <span>.</span>
            </div>

            {/* Line 3: Here is my message: [Textarea]. */}
            <div className="pt-2">
              <label
                htmlFor="contact-input-message"
                className="block text-2xl sm:text-3xl md:text-4xl font-serif-editorial mb-3"
              >
                Here is my message:
              </label>
              <textarea
                id="contact-input-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="briefly describe your ambition, scope, or timeline..."
                className="w-full bg-transparent border-b-2 border-black px-2 py-2 font-serif-editorial italic text-xl sm:text-2xl md:text-3xl text-black placeholder:text-black/40 focus:outline-none focus:bg-black/5 transition-colors resize-none"
              />
            </div>

            {/* Line 4: My contact details: [Input email]. */}
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-4 pt-2">
              <span>My contact details:</span>
              <input
                type="email"
                id="contact-input-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@domain.com"
                required
                className="inline-block min-w-[280px] max-w-full flex-grow bg-transparent border-b-2 border-black px-2 py-0.5 font-serif-editorial italic text-black placeholder:text-black/40 focus:outline-none focus:bg-black/5 transition-colors"
              />
              <span>.</span>
            </div>
          </div>

          {/* Action Bar with Pill Submit Button */}
          <div className="mt-12 pt-8 border-t border-black/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <span className="font-mono text-xs uppercase tracking-widest text-black/60">
              NO SOLICITATIONS // DIRECT CLIENT INQUIRIES ONLY
            </span>

            <button
              type="submit"
              id="contact-submit-button"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-black text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-60 disabled:pointer-events-none"
            >
              <span>{isSubmitting ? 'Sending...' : 'Transmit Inquiry'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Submit Status Notification */}
        {submitStatus && (
          <div
            id="contact-submit-status"
            className={`mt-8 p-4 border-2 border-black flex items-center gap-3 font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all ${
              submitStatus.includes('Success')
                ? 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-red-50 text-red-700 border-red-700'
            }`}
          >
            {submitStatus.includes('Success') && (
              <CheckCircle2 className="w-5 h-5 text-black stroke-[2.5] flex-shrink-0" />
            )}
            <span>{submitStatus}</span>
          </div>
        )}
      </div>
    </section>
  );
};
