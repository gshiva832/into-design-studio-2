import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Building } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border/30">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              Patron Experiences
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Trusted by Discerning <br />
              <span className="text-gold-gradient italic font-serif">Homeowners & Leaders</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            Over 150 elite families and corporate executives across Telangana and Andhra Pradesh have entrusted their spaces to Into Design Studio.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-brand-card/80 border border-brand-border/40 rounded-sm p-6 sm:p-10 lg:p-12 backdrop-blur-md shadow-2xl relative">
          <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 text-brand-gold/10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Project Image & Client Photo */}
            <div className="lg:col-span-4 space-y-4">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-brand-gold/30 relative">
                <img
                  src={current.projectImage}
                  alt={current.projectType}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-brand-cream font-medium">
                  <span className="text-[10px] text-brand-gold uppercase tracking-wider block">Commissioned Project</span>
                  {current.projectType}
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-sm bg-brand-surface/70 border border-brand-border/30">
                <img
                  src={current.image}
                  alt={current.clientName}
                  className="w-12 h-12 rounded-full object-cover border border-brand-gold"
                />
                <div>
                  <p className="font-serif-luxury text-sm font-bold text-brand-cream">{current.clientName}</p>
                  <p className="text-xs text-brand-gold font-medium">{current.designation}</p>
                  <p className="text-[11px] text-brand-gray flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-gold" />
                    {current.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Quote Content & Navigation */}
            <div className="lg:col-span-8 space-y-6 lg:pl-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1.5">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
                <span className="text-xs font-semibold text-brand-gold ml-2 uppercase tracking-widest">
                  Verified Client Review
                </span>
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg sm:text-2xl text-brand-cream/95 italic leading-relaxed">
                "{current.quote}"
              </blockquote>

              {/* Project Badge */}
              <div className="pt-4 border-t border-brand-border/30 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-brand-gray">
                  Managing Director in Charge: <span className="text-brand-cream font-medium">Vamsi Atluri</span>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-brand-surface hover:bg-brand-gold hover:text-brand-dark text-brand-cream border border-brand-border/40 transition-colors"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-brand-gold font-serif px-2">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-brand-surface hover:bg-brand-gold hover:text-brand-dark text-brand-cream border border-brand-border/40 transition-colors"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
