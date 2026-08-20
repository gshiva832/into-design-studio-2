import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Compass, Users, ShieldCheck, MapPin, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { VALUE_PILLARS } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gem':
        return <Gem className="w-6 h-6 text-brand-gold" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-brand-gold" />;
      case 'Users':
        return <Users className="w-6 h-6 text-brand-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-gold" />;
      default:
        return <Award className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden border-t border-brand-border/20">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

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
              About Into Design Studio
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Sixteen Years of Curating <br />
              <span className="text-gold-gradient italic font-serif">Architectural Distinction</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            Established in 2008 in Hyderabad, Into Design Studio redefines contemporary luxury living through contextual architecture, rare material curation, and flawless turnkey execution.
          </p>
        </motion.div>

        {/* Founder & Legacy Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          {/* Founder Imagery Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group"
          >
            <div className="relative rounded-sm overflow-hidden border border-brand-gold/40 bg-brand-card shadow-2xl">
              <div className="aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                  alt="Vamsi Atluri - Managing Director, Into Design Studio"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-brand-dark/95 backdrop-blur-md border border-brand-gold/50 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif-luxury text-lg font-bold text-brand-cream">Vamsi Atluri</p>
                      <p className="text-xs uppercase tracking-wider text-brand-gold font-medium">
                        Managing Director & Principal Architect
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase text-brand-gray tracking-widest">Leadership</p>
                      <p className="font-serif-luxury text-sm text-brand-cream font-bold">Since 2008</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Grid Corner Accents */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-brand-gold/70 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-brand-gold/70 pointer-events-none" />
          </motion.div>

          {/* Philosophy & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-sm bg-brand-card/70 border border-brand-border/40 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 font-serif text-8xl text-brand-gold select-none pointer-events-none">
                “
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-2">
                The Founder's Vision
              </span>
              <blockquote className="font-serif text-lg sm:text-xl text-brand-cream/95 italic leading-relaxed mb-6 relative z-10">
                "True architectural luxury is not merely about expensive finishes—it is the harmonious interplay of natural light, spatial proportions, acoustic stillness, and masterfully tailored materials that elevate every everyday moment into an enduring ritual."
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-brand-border/30 text-xs text-brand-gray">
                <span className="font-serif text-sm tracking-wide text-brand-cream font-semibold">— Vamsi Atluri</span>
                <span className="tracking-widest uppercase text-brand-gold flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Hyderabad, Telangana
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-brand-cream/85 leading-relaxed">
              Over the last 16 years, Into Design Studio has executed more than 150 elite residences, bespoke duplexes, double-height villas, and commercial headquarters across <strong>Hyderabad, Secunderabad, Vijayawada, Visakhapatnam, and Amaravati</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-brand-cream/90">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Single-point responsibility from initial blueprint to white-glove styling</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-cream/90">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Direct sourcing of imported Italian marble (Statuario, Botticino, Onyx)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-cream/90">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Climate-responsive tropical architectural planning for Telangana & AP</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-brand-cream/90">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>100% On-time delivery track record backed by milestone schedules</span>
              </div>
            </div>

            {/* Regional Presence Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2">
              <span className="text-[11px] uppercase tracking-widest text-brand-gray mr-2 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" /> Key Regions:
              </span>
              {['Jubilee Hills', 'Banjara Hills', 'Gachibowli & Kokapet', 'Vijayawada', 'Visakhapatnam', 'Amaravati'].map((city) => (
                <span
                  key={city}
                  className="px-2.5 py-1 rounded-sm bg-brand-surface/70 border border-brand-border/40 text-[11px] text-brand-cream tracking-wider"
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Four Value Pillars Grid with Staggered Scroll Entry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-6 rounded-sm bg-brand-card/60 border border-brand-border/30 hover:border-brand-gold/80 transition-all duration-300 group relative shadow-lg"
            >
              <div className="w-12 h-12 rounded-sm bg-brand-surface border border-brand-gold/40 flex items-center justify-center mb-5 group-hover:border-brand-gold group-hover:bg-brand-gold/15 transition-all">
                {getIcon(pillar.icon)}
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-1">
                Pillar 0{idx + 1}
              </div>
              <h3 className="font-serif-luxury text-lg font-bold text-brand-cream mb-2 group-hover:text-brand-gold transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-brand-gray leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
