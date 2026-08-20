import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_DATA } from '../data/portfolioData';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let positionPercent = (x / rect.width) * 100;
    if (positionPercent < 0) positionPercent = 0;
    if (positionPercent > 100) positionPercent = 100;
    setSliderPosition(positionPercent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="mt-16 bg-brand-card/80 border border-brand-border/40 rounded-sm p-6 sm:p-8 backdrop-blur-md">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Turnkey Transformation Spotlight
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-brand-cream">
            {BEFORE_AFTER_DATA.title}
          </h3>
          <p className="text-xs sm:text-sm text-brand-gray mt-1">
            {BEFORE_AFTER_DATA.location} • {BEFORE_AFTER_DATA.area}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-brand-gold bg-brand-surface/80 border border-brand-border px-3 py-1.5 rounded-sm">
          <MoveHorizontal className="w-4 h-4 animate-pulse" />
          <span>Drag slider horizontally to compare</span>
        </div>
      </div>

      {/* Interactive Drag Container with data-cursor="drag" */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        data-cursor="drag"
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden select-none cursor-ew-resize border border-brand-gold/40 shadow-2xl"
      >
        {/* After Image (Background full width) */}
        <img
          src={BEFORE_AFTER_DATA.afterImage}
          alt={BEFORE_AFTER_DATA.afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* After Label Badge */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-sm bg-black/80 backdrop-blur-md border border-brand-gold/60 text-[11px] font-semibold uppercase tracking-wider text-brand-gold shadow-lg">
          {BEFORE_AFTER_DATA.afterLabel}
        </div>

        {/* Before Image (Clipped by slider position) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={BEFORE_AFTER_DATA.beforeImage}
            alt={BEFORE_AFTER_DATA.beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
            draggable={false}
          />
          {/* Before Label Badge */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-sm bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-semibold uppercase tracking-wider text-brand-cream shadow-lg">
            {BEFORE_AFTER_DATA.beforeLabel}
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute inset-y-0 z-20 w-[2px] bg-brand-gold shadow-[0_0_20px_rgba(197,168,128,1)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-dark border-2 border-brand-gold flex items-center justify-center shadow-gold-glow cursor-ew-resize">
            <MoveHorizontal className="w-4 h-4 text-brand-gold" />
          </div>
        </div>
      </div>

      {/* Transformation Highlights */}
      <div className="mt-8 pt-6 border-t border-brand-border/30">
        <h4 className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold mb-4">
          Architectural Scope & Craftsmanship Highlights:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BEFORE_AFTER_DATA.details.map((detail, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-brand-cream/85 bg-brand-surface/50 p-3 rounded-sm border border-brand-border/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
