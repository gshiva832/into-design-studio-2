import React from 'react';
import { Award, ShieldCheck, Sparkles, Building2, Star, CheckCircle2 } from 'lucide-react';

export const AwardsMarquee: React.FC = () => {
  const accolades = [
    { title: 'Architectural Digest Featured Studio', year: '2024', icon: Award },
    { title: 'IIID Regional Chapter Member', year: 'Hyderabad', icon: Building2 },
    { title: 'Telangana Architectural Forum', year: 'Accredited', icon: ShieldCheck },
    { title: '100% On-Time Precision Turnkey Warranty', year: 'Certified', icon: CheckCircle2 },
    { title: 'Luxury Villa of the Year - Jubilee Hills', year: '2023', icon: Star },
    { title: 'Bespoke Italian Stone Craftsmanship Award', year: '2024', icon: Sparkles },
  ];

  return (
    <div className="py-8 bg-gradient-to-r from-[#0D0D0D] via-[#14120E] to-[#0D0D0D] border-y border-brand-border/40 overflow-hidden relative">
      {/* Subtle Ambient Vignettes on Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee gap-8">
        {[...accolades, ...accolades].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-2.5 rounded-sm bg-brand-surface/60 border border-brand-border/40 hover:border-brand-gold/60 backdrop-blur-md transition-colors group shrink-0"
            >
              <div className="w-8 h-8 rounded-sm bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-serif-luxury text-xs font-bold text-brand-cream group-hover:text-brand-gold transition-colors">
                  {item.title}
                </p>
                <p className="text-[10px] text-brand-gray tracking-wider uppercase">
                  {item.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
