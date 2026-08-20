import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  onOpenConsultationWithProject?: (projectName: string) => void;
}

type FilterCategory = 'All' | 'Luxury Living' | 'Master Suites' | 'Double-Height Units' | 'Commercial' | 'Landscaping';

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultationWithProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: FilterCategory[] = [
    'All',
    'Luxury Living',
    'Master Suites',
    'Double-Height Units',
    'Commercial',
    'Landscaping'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleInquireFromModal = (projectTitle: string) => {
    if (onOpenConsultationWithProject) {
      onOpenConsultationWithProject(projectTitle);
    }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-brand-border/30"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              Selected Portfolio
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Curated Works <br />
              <span className="text-gold-gradient italic font-serif">Across Telangana & AP</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            Explore our signature double-height villas, palatial penthouses, bespoke master wings, and executive commercial sanctuaries.
          </p>
        </motion.div>

        {/* Category Filters with Framer Motion layoutId */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const count = cat === 'All'
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="pointer"
                className={`relative px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors duration-300 flex items-center gap-2 z-10 ${
                  isActive
                    ? 'text-brand-dark font-bold'
                    : 'bg-brand-card/80 text-brand-cream/80 hover:text-brand-gold hover:bg-brand-surface border border-brand-border/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioFilterPill"
                    className="absolute inset-0 bg-gold-gradient rounded-sm shadow-gold-glow -z-10"
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  />
                )}
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                    isActive ? 'bg-brand-dark/20 text-brand-dark font-bold' : 'bg-brand-surface text-brand-gold'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Masonry/Grid with Layout Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45 }}
                onClick={() => setActiveProject(project)}
                data-cursor="view"
                className="group cursor-pointer rounded-sm overflow-hidden bg-brand-card/70 border border-brand-border/30 hover:border-brand-gold/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
              >
                {/* Image Container with Dark Vignette on Hover */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge & State */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-sm bg-black/70 backdrop-blur-md border border-brand-gold/40 text-[10px] uppercase tracking-wider text-brand-gold font-semibold">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-sm bg-black/60 backdrop-blur-md text-[10px] text-brand-cream/80 tracking-widest uppercase">
                      {project.state}
                    </span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="px-4 py-2 rounded-sm bg-brand-dark/95 backdrop-blur-md border border-brand-gold text-xs uppercase tracking-widest text-brand-gold font-semibold flex items-center gap-2 shadow-gold-glow">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Case Study</span>
                    </div>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between border-t border-brand-border/20">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-brand-gold mb-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-brand-cream group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-brand-gray mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-brand-border/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-brand-cream/90">
                      <Layers className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{project.area}</span>
                    </div>

                    <div className="text-brand-gold group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1 font-semibold text-[11px] uppercase tracking-wider">
                      <span>Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquireProject={handleInquireFromModal}
      />
    </section>
  );
};
