import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import { portfolioWork } from '../data';
import { PortfolioItem } from '../types';
import { Play, Maximize2, X, Eye } from 'lucide-react';

const formatDuration = (seconds: number): string => {
  if (!seconds || isNaN(seconds) || !isFinite(seconds)) return '--:--';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const SelectedWorkSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string>('');
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>('');
  const [activeMarkdown, setActiveMarkdown] = useState<string>('');
  const [activeTag, setActiveTag] = useState<string | undefined>(undefined);
  const [activeAspectRatio, setActiveAspectRatio] = useState<'16:9' | '9:16'>('16:9');
  const [filter, setFilter] = useState<'all' | 'video'>('all');
  const [durations, setDurations] = useState<Record<number, string>>({});

  const openModal = (item: PortfolioItem) => {
    setActiveItem(item);
    setDurations({});
    const spots = item.anthologySpots || item.gallery;
    if (spots && spots.length > 0) {
      const defaultSpot = spots[0];
      const defaultVideoSrc = defaultSpot.fullVideoUrl || defaultSpot.heroReelUrl || defaultSpot.videoUrl || item.videoUrl;
      setActiveVideoUrl(defaultVideoSrc);
      setActiveVideoTitle(defaultSpot.title);
      setActiveMarkdown(defaultSpot.markdownContext || '');
      setActiveTag(defaultSpot.badge || defaultSpot.tag || item.discipline);
      setActiveAspectRatio(defaultSpot.aspectRatio || item.aspectRatio || '16:9');
    } else {
      setActiveVideoUrl(item.videoUrl);
      setActiveVideoTitle(item.title);
      setActiveMarkdown(item.markdownContext || '');
      setActiveTag(item.discipline);
      setActiveAspectRatio(item.aspectRatio || '16:9');
    }
  };

  const closeModal = () => {
    setActiveItem(null);
    setActiveVideoUrl('');
    setActiveVideoTitle('');
    setActiveMarkdown('');
    setActiveTag(undefined);
    setActiveAspectRatio('16:9');
  };

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (activeItem) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeItem]);

  const filteredWork = portfolioWork.filter((item) => {
    if (filter === 'video') return Boolean(item.videoUrl);
    return true;
  });

  return (
    <section id="work" className="w-full border-b border-black">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black">
        <div>
          <span className="block font-mono text-xs uppercase tracking-[0.2em] mb-2 text-black/70">
            [03 // ARCHIVE & COMMISSIONS]
          </span>
          <h2 className="font-sans-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase">
            Selected Work
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {(['all', 'video'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              id={`filter-work-${tab}`}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-black transition-all ${
                filter === tab
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-black/10'
              }`}
            >
              {tab === 'all' ? 'All Artifacts' : 'Kinetic / Video'}
            </button>
          ))}
        </div>
      </div>

      {/* Asymmetrical Staggered Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {filteredWork.map((item, index) => {
            // Asymmetrical grid column spans based on item.size and index rhythm
            const isLarge = item.size === 'large';
            const isMedium = item.size === 'medium';
            
            // Stagger layout: alternating left/right heavy
            let colSpan = 'md:col-span-6';
            let heightClass = 'h-[360px] sm:h-[440px] md:h-[480px]';
            
            if (isLarge) {
              if (index % 3 === 0) {
                colSpan = 'md:col-span-8';
                heightClass = 'h-[400px] sm:h-[500px] md:h-[580px]';
              } else {
                colSpan = 'md:col-span-7';
                heightClass = 'h-[380px] sm:h-[480px] md:h-[520px]';
              }
            } else if (isMedium) {
              colSpan = 'md:col-span-6';
              heightClass = 'h-[360px] sm:h-[440px] md:h-[460px]';
            } else {
              // small
              colSpan = index % 2 === 1 ? 'md:col-span-4' : 'md:col-span-5';
              heightClass = 'h-[340px] sm:h-[400px] md:h-[440px]';
            }

            return (
              <article
                key={item.id}
                id={`work-item-${item.id}`}
                className={`${colSpan} group flex flex-col justify-between border border-black bg-white p-3 sm:p-4 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}
              >
                {/* Item Meta Header */}
                <div className="flex items-center justify-between border-b border-black pb-3 mb-3 text-xs font-mono uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">[0{item.id}]</span>
                    <span className="text-black/80">{item.client}</span>
                  </div>
                  <div className="flex items-center gap-3 text-black/60">
                    <span className="flex items-center gap-1 font-bold text-black">
                      <Play className="w-3 h-3 fill-black" />
                      <span>VIDEO</span>
                    </span>
                    <span>{item.year || '2026'}</span>
                  </div>
                </div>

                {/* Media Container with STRICT media rules */}
                <div
                  className={`relative w-full ${heightClass} overflow-hidden bg-neutral-900 cursor-pointer transform-gpu`}
                  style={{ WebkitTransform: 'translateZ(0)' }}
                  onClick={() => openModal(item)}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    src={item.videoUrl}
                    className="object-cover w-full h-full"
                  />

                  {/* Subtle Hover Action Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-full bg-white border border-black text-xs font-bold uppercase tracking-wider text-black flex items-center gap-1.5 shadow-md">
                      {item.isAnthology || (item.anthologySpots && item.anthologySpots.length > 0) || (item.gallery && item.gallery.length > 0) ? (
                        <>
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Explore Anthology ({(item.anthologySpots || item.gallery)?.length || 4})</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Inspect Artifact</span>
                        </>
                      )}
                    </span>
                  </div>

                  {(item.isAnthology || (item.anthologySpots && item.anthologySpots.length > 0) || (item.gallery && item.gallery.length > 0)) && (
                    <div className="absolute top-3 left-3 bg-white/95 border border-black px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {(item.anthologySpots || item.gallery)?.length || 4}-Part Anthology
                    </div>
                  )}
                </div>

                {/* Item Caption Footer */}
                <div className="mt-3 pt-3 border-t border-black flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="font-sans-editorial text-lg sm:text-xl font-bold tracking-tight uppercase text-black">
                    {item.title}
                  </h3>
                  <span className="font-serif-editorial italic text-sm text-black/75">
                    {item.discipline || 'Creative Direction'}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Expanded Modal Preview */}
      {activeItem && (
        <div
          id="work-preview-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] overflow-y-auto bg-[#E8E6E1] border-2 border-black p-4 sm:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start sm:items-center justify-between border-b border-black pb-4 mb-4 gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-black/70">
                  ARTIFACT 0{activeItem.id} // {activeItem.client}
                </span>
                <h3 className="font-sans-editorial text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black">
                  {activeVideoTitle || activeItem.title}
                </h3>
                {(activeItem.isAnthology || (activeItem.anthologySpots && activeItem.anthologySpots.length > 0) || (activeItem.gallery && activeItem.gallery.length > 0)) && (
                  <span className="inline-block mt-1 font-mono text-[10px] text-black/80 uppercase tracking-wider bg-black/10 px-2 py-0.5 rounded">
                    Anthology: {activeItem.title}
                  </span>
                )}
              </div>
              <button
                type="button"
                id="close-modal-btn"
                onClick={closeModal}
                aria-label="Close preview (Esc)"
                className="p-2 sm:p-2.5 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Media: Main Video Player */}
            <div className="w-full flex justify-center items-center">
              <div
                className={`relative overflow-hidden bg-black border-2 border-black rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex items-center justify-center max-h-full transform-gpu ${
                  activeAspectRatio === '9:16'
                    ? 'aspect-[9/16] h-[48vh] sm:h-[54vh] max-h-[58vh] w-auto max-w-full mx-auto'
                    : 'aspect-video w-full max-h-[50vh] sm:max-h-[56vh] max-w-full'
                }`}
                style={{ WebkitTransform: 'translateZ(0)' }}
              >
                <video
                  key={activeVideoUrl || activeItem.videoUrl}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  preload="auto"
                  src={activeVideoUrl || activeItem.videoUrl}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* Modal Meta Bar */}
            <div className="mt-3 pt-3 flex flex-wrap items-center justify-between gap-4 font-mono text-xs border-b border-black/20 pb-3">
              <span className="uppercase text-black/80">
                DISCIPLINE: {activeItem.discipline || 'COMMISSION'}
              </span>
              <div className="flex items-center gap-3">
                <span className="uppercase text-black/70 bg-black/5 px-2 py-0.5 rounded border border-black/20 font-bold">
                  RATIO: {activeAspectRatio}
                </span>
                <span className="uppercase text-black/60">
                  YEAR: {activeItem.year || '2026'}
                </span>
              </div>
            </div>

            {/* Video Anthology Grid */}
            {(() => {
              const spots = activeItem.anthologySpots || activeItem.gallery;
              if (!spots || spots.length === 0) return null;
              return (
                <div className="mt-5 pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-black font-bold">
                        // VIDEO ANTHOLOGY
                      </span>
                      <span className="font-mono text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-bold">
                        {spots.length} SPOTS
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-black/60 hidden sm:inline">
                      {spots.length > 4 ? 'Scroll horizontally • Select spot to inspect' : 'Select a spot to inspect video & story debrief'}
                    </span>
                  </div>

                  <div className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex-nowrap pb-2 pt-0.5 px-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {/* Gallery Spot Thumbnail Cards */}
                    {spots.map((spot, idx) => {
                      const spotVideoSrc = spot.fullVideoUrl || spot.heroReelUrl || spot.videoUrl || activeItem.videoUrl;
                      const isSelected = activeVideoTitle === spot.title;
                      const spotRatio = spot.aspectRatio || '16:9';
                      const spotBadge = spot.badge || spot.tag;
                      const posterCandidate = spot.heroReelUrl || spot.fullVideoUrl || spot.videoUrl || spotVideoSrc;
                      const posterSrc = posterCandidate && posterCandidate.includes('.mp4')
                        ? posterCandidate.replace('.mp4', '.jpg')
                        : undefined;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setActiveVideoUrl(spotVideoSrc);
                            setActiveVideoTitle(spot.title);
                            setActiveMarkdown(spot.markdownContext || '');
                            setActiveTag(spotBadge);
                            setActiveAspectRatio(spotRatio);
                          }}
                          className={`group text-left p-2 rounded-lg border-2 transition-all flex flex-col gap-1.5 cursor-pointer flex-shrink-0 snap-start ${
                            spotRatio === '9:16' ? 'w-24 sm:w-28' : 'w-36 sm:w-44'
                          } ${
                            isSelected
                              ? 'border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                              : 'border-black/30 bg-white hover:border-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-black'
                          }`}
                        >
                          <div
                            className={`relative w-full rounded overflow-hidden bg-neutral-900 border border-black/20 transform-gpu ${
                              spotRatio === '9:16' ? 'aspect-[9/16]' : 'aspect-video'
                            }`}
                            style={{ WebkitTransform: 'translateZ(0)' }}
                          >
                            <video
                              muted
                              playsInline
                              preload="metadata"
                              poster={posterSrc}
                              src={`${spotVideoSrc}#t=0.1`}
                              onLoadedMetadata={(e) => {
                                const dur = e.currentTarget.duration;
                                if (dur && isFinite(dur)) {
                                  setDurations((prev) => ({
                                    ...prev,
                                    [idx]: formatDuration(dur),
                                  }));
                                }
                              }}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                            />
                            <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm text-[8px] font-mono text-white tracking-wider uppercase flex items-center gap-1 max-w-[90%] truncate">
                              <span>{durations[idx] || '--:--'}</span>
                              {spotRatio !== '9:16' && spotBadge && <span>• {spotBadge}</span>}
                            </div>
                            {isSelected && (
                              <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                                <span className="px-2 py-0.5 bg-white text-black font-mono text-[8px] font-bold uppercase tracking-wider rounded border border-black shadow">
                                  ACTIVE
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center justify-between text-xs mt-0.5">
                            <span className="font-sans font-bold tracking-tight truncate text-[11px]">
                              {spot.title}
                            </span>
                            <Play className={`w-2.5 h-2.5 flex-shrink-0 ml-1 ${isSelected ? 'fill-white' : 'fill-black'}`} />
                          </div>
                          {spot.prompts && spot.prompts.length > 0 && (
                            <p className={`font-mono text-[9px] truncate line-clamp-1 ${isSelected ? 'text-white/70' : 'text-black/60'}`}>
                              &gt; {spot.prompts[0]}
                            </p>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Editorial Markdown Blog Layout */}
            {activeMarkdown && (
              <div className="mt-6 pt-5 border-t border-black/20">
                <div className="flex items-center justify-between mb-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-black font-bold tracking-wider">
                      // STORY DEBRIEF & CAMPAIGN BRIEF
                    </span>
                    {activeTag && (
                      <span className="font-mono text-[10px] bg-black text-white px-2 py-0.5 rounded uppercase tracking-wider font-bold">
                        {activeTag}
                      </span>
                    )}
                  </div>
                  <span className="text-black/60 hidden sm:inline text-[11px]">
                    Viewing: {activeVideoTitle}
                  </span>
                </div>

                <div className="bg-white border-2 border-black p-5 sm:p-7 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-black text-sm sm:text-base leading-relaxed font-sans">
                    <Markdown
                      components={{
                        h3: ({ children }) => (
                          <h3 className="font-sans-editorial text-xl sm:text-2xl font-bold uppercase tracking-tight text-black mt-0 mb-3 border-b border-black/15 pb-2">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="font-mono text-xs sm:text-sm uppercase tracking-wider font-bold text-black mt-5 mb-2">
                            // {children}
                          </h4>
                        ),
                        p: ({ children }) => (
                          <p className="text-black/85 leading-relaxed text-sm sm:text-base mb-3 font-normal">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="space-y-2 list-none pl-0 my-3 font-mono text-xs sm:text-sm text-black/90">
                            {children}
                          </ul>
                        ),
                        li: ({ children }) => (
                          <li className="flex items-start gap-2.5">
                            <span className="text-black font-bold select-none mt-0.5">▪</span>
                            <span className="flex-1 leading-relaxed">{children}</span>
                          </li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-black font-sans">{children}</strong>
                        ),
                      }}
                    >
                      {activeMarkdown}
                    </Markdown>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
