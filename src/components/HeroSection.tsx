import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ChevronRight, ChevronLeft, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    title: 'The Alabaster Haven - Jubilee Hills',
    subtitle: 'Bespoke Double-Height Architectural Residence',
    location: 'Jubilee Hills, Hyderabad',
    area: '9,800 Sq. Ft.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    title: 'The Obsidian Grandeur - Banjara Hills',
    subtitle: 'Italian Statuario Marble & Ambient Lighting',
    location: 'Road No. 12, Banjara Hills',
    area: '7,200 Sq. Ft.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
    title: 'The Regal Waterfront Estate - Amaravati',
    subtitle: '12,500 Sq. Ft. Classical Contemporary Manor',
    location: 'Krishna River Enclave, Amaravati',
    area: '12,500 Sq. Ft.'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-brand-dark">
      {/* Background Image Carousel with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO_SLIDES[currentSlide].image})`,
            }}
          />
        </AnimatePresence>

        {/* Ambient Luxury Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Studio Badge with Subtle Shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-card/80 backdrop-blur-md border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-[0.2em] mb-6 shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Telangana & Andhra Pradesh • Since 2008</span>
          </motion.div>

          {/* Staggered Luxury Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-luxury text-3.5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-cream leading-[1.08] mb-6"
          >
            Transforming Spaces into{' '}
            <span className="text-gold-gradient italic font-serif">Timeless Experiences</span>{' '}
            Since 2008.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-brand-cream/85 font-normal leading-relaxed mb-4 max-w-2xl"
          >
            Bespoke Architecture, Interior Design & Landscape Architecture across Telangana & Andhra Pradesh.
          </motion.p>

          {/* Leadership Credit */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs sm:text-sm tracking-widest uppercase text-brand-gold font-medium mb-10 flex items-center gap-2"
          >
            <span className="w-6 h-[1px] bg-brand-gold"></span>
            Led by Managing Director & Principal Architect <strong className="text-brand-cream font-bold">Vamsi Atluri</strong>
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={onOpenConsultation}
              data-cursor="pointer"
              className="px-8 py-4 text-xs sm:text-sm font-bold tracking-widest uppercase text-brand-dark bg-gold-gradient rounded-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Schedule a Walkthrough</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#portfolio"
              data-cursor="pointer"
              className="px-8 py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase text-brand-cream bg-brand-card/70 hover:bg-brand-surface border border-brand-border/60 hover:border-brand-gold rounded-sm backdrop-blur-md transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ChevronRight className="w-4 h-4 text-brand-gold transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Trust Badges & Slide Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full"
      >
        {/* Dynamic Trust Metrics Grid with Animated Counting Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-brand-border/30 backdrop-blur-sm">
          {STUDIO_INFO.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 sm:p-5 rounded-sm bg-brand-card/60 border border-brand-border/30 hover:border-brand-gold/60 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-gradient mb-1">
                <AnimatedCounter value={metric.value} />
              </div>
              <div className="text-xs sm:text-sm font-medium text-brand-cream/90 uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-[11px] text-brand-gray tracking-wide mt-0.5">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicator & Current Highlight with Live Progress Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-xs text-brand-gray">
          <div className="flex items-center gap-3">
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-semibold">Featured Work:</span>
            <span className="text-brand-cream font-medium">{HERO_SLIDES[currentSlide].title}</span>
            <span className="text-brand-gray hidden md:inline flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-gold" /> {HERO_SLIDES[currentSlide].location}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="p-1.5 rounded-full hover:bg-brand-surface text-brand-cream hover:text-brand-gold transition-colors"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 overflow-hidden relative ${
                    i === currentSlide ? 'w-10 bg-brand-surface border border-brand-gold/50' : 'w-3 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                >
                  {i === currentSlide && (
                    <motion.div
                      key={`progress-${currentSlide}`}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 7, ease: 'linear' }}
                      className="h-full bg-gold-gradient"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="p-1.5 rounded-full hover:bg-brand-surface text-brand-cream hover:text-brand-gold transition-colors"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
