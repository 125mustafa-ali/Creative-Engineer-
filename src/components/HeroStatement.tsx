import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../data';
import { ArrowDown, Sparkles } from 'lucide-react';

export const HeroStatement: React.FC = () => {
  const heroVideos = ['/reel1.mp4', '/reel2.mp4', '/reel3.mp4', '/reel4.mp4'];
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === currentVideo) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policies handled gracefully
          });
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentVideo]);

  return (
    <section id="studio" className="w-full border-b border-black bg-[#E8E6E1] text-black">
      {/* Studio Meta Ticker / Sub-bar */}
      <div className="border-b border-black text-xs font-mono py-2.5 px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 uppercase tracking-widest text-black">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span>{siteConfig.studioNotice.status}</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>{siteConfig.studioNotice.location}</span>
          <span>{siteConfig.studioNotice.coordinates}</span>
          <span>{siteConfig.studioNotice.year}</span>
        </div>
      </div>

      {/* Main Split-Screen Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 lg:gap-14">
          {/* Left Column: Studio Manifesto */}
          <div className="w-full md:w-[58%] lg:w-[56%]">
            <span className="block font-mono text-xs uppercase tracking-[0.2em] mb-6 text-black/70">
              [01 // STUDIO MANIFESTO]
            </span>

            <h1
              id="hero-mission-statement"
              className="font-serif-editorial text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.06] tracking-tight text-black text-left"
            >
              {siteConfig.heroStatement}
            </h1>

            <p className="mt-6 sm:mt-8 font-serif-editorial italic text-lg sm:text-xl lg:text-2xl text-black leading-relaxed">
              "{siteConfig.heroSubtext}"
            </p>

            {/* Anchored Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                id="hero-explore-archive-btn"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-black text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span>Explore Archive</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <button
                type="button"
                id="hero-ask-ai-btn"
                onClick={() => window.dispatchEvent(new CustomEvent('open-chat-assistant'))}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black border-2 border-black text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#E8E6E1] hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <span>Ask AI</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: The Video Player (Preloaded Crossfade 9:16 Aspect Ratio) */}
          <div
            className="relative overflow-hidden w-full max-w-md md:max-w-none md:w-[38%] lg:w-[38%] xl:w-[36%] aspect-[9/16] rounded-2xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-black flex-shrink-0 transform-gpu"
            style={{ WebkitTransform: 'translateZ(0)' }}
          >
            {heroVideos.map((videoSrc, index) => (
              <video
                key={videoSrc}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={videoSrc}
                onEnded={handleVideoEnd}
                muted
                playsInline
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                  index === currentVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
