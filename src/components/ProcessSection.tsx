import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, Clock, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden border-t border-brand-border/20">
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
              The Turnkey Methodology
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Four Steps to <br />
              <span className="text-gold-gradient italic font-serif">Timeless Perfection</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            Our structured 4-stage architectural process guarantees precision budgeting, transparent milestones, and zero on-site delays.
          </p>
        </motion.div>

        {/* Step Navigation Bar with Animated Indicator Line */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="pointer"
                  className={`p-5 text-left rounded-sm transition-all duration-300 border relative overflow-hidden group ${
                    isActive
                      ? 'bg-brand-card border-brand-gold shadow-gold-glow'
                      : 'bg-brand-card/40 border-brand-border/30 hover:border-brand-gold/40 hover:bg-brand-surface/40'
                  }`}
                >
                  {/* Active Indicator Top Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStepTopIndicator"
                      className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient"
                      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-serif-luxury text-2xl font-bold ${isActive ? 'text-brand-gold' : 'text-brand-gray'}`}>
                      {step.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-brand-gray bg-brand-surface px-2 py-0.5 rounded-sm border border-brand-border/20">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className={`font-serif-luxury text-sm font-bold transition-colors ${isActive ? 'text-brand-cream' : 'text-brand-cream/75 group-hover:text-brand-gold'}`}>
                    {step.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-card/70 border border-brand-border/40 rounded-sm p-6 sm:p-10 backdrop-blur-md"
          >
            {/* Left: Narrative & Milestones */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-sm bg-brand-gold/15 border border-brand-gold/40 text-xs font-bold uppercase tracking-widest text-brand-gold">
                  Phase {activeStep.step} of 04
                </span>
                <span className="flex items-center gap-1 text-xs text-brand-gray">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Estimated Duration: {activeStep.duration}</span>
                </span>
              </div>

              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-brand-cream">
                  {activeStep.title}
                </h3>
                <p className="text-sm font-serif italic text-brand-gold mt-1 mb-3">
                  "{activeStep.subtitle}"
                </p>
                <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Milestones Checklist */}
              <div className="space-y-3 pt-4 border-t border-brand-border/30">
                <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                  Phase Deliverables & Milestones:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStep.milestones.map((milestone, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-sm bg-brand-surface/60 border border-brand-border/20 text-xs text-brand-cream/90">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Step Quick Link */}
              <div className="flex items-center justify-between pt-4">
                <div className="text-xs text-brand-gray">
                  Stage {activeStepIndex + 1} of 4 Complete
                </div>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                  data-cursor="pointer"
                  className="text-xs uppercase tracking-wider text-brand-gold hover:text-brand-cream font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Proceed to Phase {PROCESS_STEPS[(activeStepIndex + 1) % PROCESS_STEPS.length].step}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Stage Visual */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-gold/30 shadow-2xl relative">
                <img
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-sm bg-black/80 backdrop-blur-md border border-brand-border text-xs">
                  <span className="text-brand-gold uppercase tracking-widest font-semibold text-[10px] block">
                    On-Site Protocol
                  </span>
                  <span className="text-brand-cream font-serif">{activeStep.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
