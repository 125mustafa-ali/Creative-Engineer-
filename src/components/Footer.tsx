import React from 'react';
import { siteConfig } from '../data';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#E8E6E1] text-black">
      {/* Massive Editorial Studio Wordmark Banner */}
      <div className="w-full border-b border-black overflow-hidden py-6 md:py-10 px-6 md:px-10">
        <div className="flex items-center justify-between">
          <p className="font-sans-editorial font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase select-none opacity-90">
            {siteConfig.siteTitle}
          </p>
          <button
            type="button"
            id="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3.5 sm:p-4 rounded-full border border-black bg-white hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer Details Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs uppercase tracking-wider">
        <div>
          <span className="block text-black/50 mb-2">// DIRECT ACCESS</span>
          <p className="text-black font-semibold">{siteConfig.contactDetails.email}</p>
          <p className="text-black/70 mt-1">{siteConfig.contactDetails.phone}</p>
        </div>

        <div>
          <span className="block text-black/50 mb-2">// LATITUDE & LONGITUDE</span>
          <p className="text-black font-semibold">{siteConfig.studioNotice.location}</p>
          <p className="text-black/70 mt-1">{siteConfig.studioNotice.coordinates}</p>
        </div>

        <div>
          <span className="block text-black/50 mb-2">// NAVIGATION</span>
          <ul className="space-y-1">
            {siteConfig.navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:underline text-black">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="block text-black/50 mb-2">// EDITIONS</span>
          <p className="text-black font-semibold">{siteConfig.studioNotice.year}</p>
          <p className="text-black/70 mt-1">BRUTALIST EDITORIAL SPEC</p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-black py-4 px-6 md:px-10 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-black/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <span>{siteConfig.footerNote}</span>
        <span>ENGINEERED WITH VITE & TAILWIND</span>
      </div>
    </footer>
  );
};
