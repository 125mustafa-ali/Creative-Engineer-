import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroStatement } from './components/HeroStatement';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { ContactMadLibs } from './components/ContactMadLibs';
import { Footer } from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-[#E8E6E1] text-black font-ui-sans selection:bg-black selection:text-white antialiased">
      {/* Minimalist Top Nav */}
      <Navbar />

      {/* Main Content Sections (Vertical Scroll) */}
      <main>
        {/* Hero / Mission Statement */}
        <HeroStatement />

        {/* Capabilities Section */}
        <CapabilitiesSection />

        {/* Selected Work (The Asymmetrical Grid) */}
        <SelectedWorkSection />

        {/* Contact (Mad-Libs Form) */}
        <ContactMadLibs />
      </main>

      {/* Editorial Brutalist Footer */}
      <Footer />

      {/* Studio Assistant Chat */}
      <ChatAssistant />
    </div>
  );
}
