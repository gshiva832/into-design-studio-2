import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sparkles, Trees, Check, ArrowUpRight, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<string>('architecture');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'architecture':
        return <Building2 className="w-5 h-5" />;
      case 'interiors':
        return <Sparkles className="w-5 h-5" />;
      case 'landscape':
        return <Trees className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const currentService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border/30"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              Core Disciplines
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Bespoke Services <br />
              <span className="text-gold-gradient italic font-serif">Conceived for Elegance</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            Whether crafting an iconic villa from the ground up or outfitting a private luxury penthouse, we provide end-to-end turnkey architectural mastery.
          </p>
        </motion.div>

        {/* Interactive Tabs Navigation with Framer Motion layoutId */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-sm bg-brand-card/90 border border-brand-border/40 backdrop-blur-md mb-12 max-w-3xl">
          {SERVICES.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                data-cursor="pointer"
                className={`relative flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-sm text-xs uppercase tracking-widest font-semibold transition-colors duration-300 z-10 ${
                  isActive ? 'text-brand-dark font-bold' : 'text-brand-cream/80 hover:text-brand-gold'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceTabPill"
                    className="absolute inset-0 bg-gold-gradient rounded-sm shadow-gold-glow -z-10"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
                {getServiceIcon(service.id)}
                <span>{service.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-brand-card/60 border border-brand-border/40 rounded-sm p-6 sm:p-10 backdrop-blur-md"
          >
            {/* Left: Narrative & Deliverables */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  Domain 0{SERVICES.findIndex((s) => s.id === activeTab) + 1}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-brand-cream mt-1 mb-3">
                  {currentService.title}
                </h3>
                <p className="text-sm font-serif italic text-brand-gold/90 mb-4">
                  "{currentService.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
                  {currentService.description}
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {currentService.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-3.5 rounded-sm bg-brand-surface/70 border border-brand-border/30 hover:border-brand-gold/40 transition-colors">
                    <h4 className="font-serif-luxury text-xs font-bold text-brand-cream mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-brand-gray leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-brand-border/30">
                <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                  Core Deliverables:
                </p>
                <div className="space-y-2">
                  {currentService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-brand-cream/90">
                      <div className="w-4 h-4 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-brand-gold" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={onOpenConsultation}
                  data-cursor="pointer"
                  className="px-6 py-3 text-xs font-bold tracking-widest uppercase text-brand-dark bg-gold-gradient rounded-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <span>Inquire for {currentService.title.split('&')[0]}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: High-Res Visual Display */}
            <div className="lg:col-span-6 relative group">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-gold/30 shadow-2xl relative">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-brand-dark/85 backdrop-blur-md border border-brand-border flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold">Executed Portfolio</p>
                    <p className="font-serif-luxury text-sm text-brand-cream">{currentService.title}</p>
                  </div>
                  <a
                    href="#portfolio"
                    data-cursor="pointer"
                    className="p-2 rounded-full bg-brand-surface hover:bg-brand-gold hover:text-brand-dark text-brand-gold transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Embedded Interactive Before & After Slider */}
        <BeforeAfterSlider />
      </div>
    </section>
  );
};
