import React, { useState } from 'react';
import { siteConfig } from '../data';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#E8E6E1]/95 backdrop-blur-sm border-b border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        {/* Left Side: Site Title */}
        <a
          href="#"
          id="site-title-logo"
          className="font-sans-editorial font-bold text-lg md:text-2xl tracking-tighter hover:opacity-75 transition-opacity flex items-center gap-2"
        >
          <span>{siteConfig.siteTitle}</span>
          <span className="inline-block w-2 h-2 rounded-full bg-black"></span>
        </a>

        {/* Right Side: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
          {siteConfig.navLinks.map((link) => {
            const isContact = link.href === '#contact';
            if (isContact) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white border border-black text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              );
            }
            return (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="text-black hover:opacity-60 transition-opacity uppercase text-xs tracking-wider font-semibold"
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          id="mobile-nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black hover:opacity-75 transition-opacity"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black bg-[#E8E6E1] px-6 py-6 space-y-4">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-sans-editorial font-bold tracking-tight text-black py-2 border-b border-black/20"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 text-xs font-mono uppercase text-black/70">
            {siteConfig.studioNotice.location} — {siteConfig.studioNotice.status}
          </div>
        </div>
      )}
    </header>
  );
};
