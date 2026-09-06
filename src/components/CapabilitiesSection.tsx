import React from 'react';
import { capabilities } from '../data';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="w-full border-b border-black">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black">
        <div>
          <span className="block font-mono text-xs uppercase tracking-[0.2em] mb-2 text-black/70">
            [02 // CORE DISCIPLINES]
          </span>
          <h2 className="font-sans-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            Capabilities
          </h2>
        </div>
        <p className="font-ui-sans text-xs uppercase tracking-wider text-black/60 max-w-xs md:text-right">
          End-to-end craft across physical & digital artifacts
        </p>
      </div>

      {/* Capabilities Vertical List */}
      <div className="w-full">
        {capabilities.map((item, index) => (
          <div
            key={item.category}
            id={`capability-row-${item.category.toLowerCase()}`}
            className="w-full border-b border-black hover:bg-black/[0.02] transition-colors duration-200"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Category & Title */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-black/50">
                    0{index + 1}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-black/75">
                    // {item.category}
                  </span>
                </div>
                <h3 className="font-sans-editorial text-2xl sm:text-3xl font-bold tracking-tight text-black uppercase leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Middle Column: Serif Description */}
              <div className="lg:col-span-4">
                <p className="font-serif-editorial text-lg sm:text-xl text-black leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Right Column: Flex-wrap layout of pill-shaped tags */}
              <div className="lg:col-span-4 flex flex-wrap gap-2.5 items-start lg:justify-end">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-black text-black text-xs font-semibold tracking-tight shadow-none hover:bg-black hover:text-white transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
