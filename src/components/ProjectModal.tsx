import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquireProject }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 lg:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl bg-brand-dark border border-brand-gold/50 rounded-sm shadow-2xl overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            data-cursor="pointer"
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-brand-dark/85 hover:bg-brand-gold text-brand-cream hover:text-brand-dark border border-brand-border/60 transition-all duration-300 shadow-lg"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
            {/* Left: Interactive Media Lightbox */}
            <div className="lg:col-span-7 bg-black flex flex-col justify-between relative min-h-[350px] lg:min-h-[600px]">
              {/* Active High-Res Image with AnimatePresence Crossfade */}
              <div className="relative flex-1 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={project.gallery[activeImageIndex] || project.coverImage}
                    alt={`${project.title} - View ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover max-h-[600px]"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* Navigation Arrows */}
                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      data-cursor="pointer"
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-brand-gold text-brand-cream hover:text-brand-dark border border-brand-border/40 transition-colors shadow-lg"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      data-cursor="pointer"
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-brand-gold text-brand-cream hover:text-brand-dark border border-brand-border/40 transition-colors shadow-lg"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Row */}
              {project.gallery.length > 1 && (
                <div className="p-3 bg-brand-card/90 border-t border-brand-border/30 flex items-center gap-2 overflow-x-auto">
                  {project.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      data-cursor="pointer"
                      className={`w-16 h-12 rounded-sm overflow-hidden shrink-0 border-2 transition-all ${
                        idx === activeImageIndex
                          ? 'border-brand-gold scale-105 shadow-gold-glow'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Specifications & Case Study Narrative */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[600px] border-t lg:border-t-0 lg:border-l border-brand-border/40 bg-brand-card/70">
              <div className="space-y-6">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-sm bg-brand-gold/15 border border-brand-gold/40 text-[11px] font-semibold uppercase tracking-widest text-brand-gold">
                    {project.category}
                  </span>
                  <span className="text-xs text-brand-gray tracking-wider">
                    Est. Completion: {project.year}
                  </span>
                </div>

                {/* Title & Location */}
                <div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-brand-cream leading-tight">
                    {project.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-brand-gold mt-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location} ({project.state})</span>
                  </p>
                </div>

                {/* Project Quick Specs Grid */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-brand-border/30">
                  <div className="p-2.5 rounded-sm bg-brand-surface/60 border border-brand-border/20">
                    <p className="text-[10px] uppercase text-brand-gray tracking-widest">Built-Up Area</p>
                    <p className="font-serif-luxury text-sm font-semibold text-brand-cream">{project.area}</p>
                  </div>
                  <div className="p-2.5 rounded-sm bg-brand-surface/60 border border-brand-border/20">
                    <p className="text-[10px] uppercase text-brand-gray tracking-widest">Client Profile</p>
                    <p className="font-serif-luxury text-sm font-semibold text-brand-cream">{project.client}</p>
                  </div>
                </div>

                {/* Narrative */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
                    Architectural Narrative
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-cream/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Materials & Stones */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Curated Materials & Finishes
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-sm bg-brand-surface border border-brand-border/40 text-[11px] text-brand-cream/90"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
                    Key Spatial Features
                  </h4>
                  <div className="space-y-1.5">
                    {project.highlights.map((high, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-cream/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>{high}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-6 mt-6 border-t border-brand-border/30">
                <button
                  onClick={() => {
                    onClose();
                    onInquireProject(project.title);
                  }}
                  data-cursor="pointer"
                  className="w-full py-3.5 text-xs font-bold tracking-widest uppercase text-brand-dark bg-gold-gradient rounded-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Inquire About Similar Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
