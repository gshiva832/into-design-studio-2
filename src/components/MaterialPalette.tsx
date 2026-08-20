import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface Material {
  id: string;
  name: string;
  category: string;
  origin: string;
  image: string;
  texture: string;
  description: string;
  finish: string;
  applications: string[];
  colorHex: string;
}

const MATERIALS: Material[] = [
  {
    id: 'statuario',
    name: 'Statuario Bookmatched Marble',
    category: 'Natural Italian Stone',
    origin: 'Carrara, Italy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    texture: 'Crisp white crystalline ground with dramatic feather-soft charcoal and gold veining.',
    description: 'The definitive pinnacle of classical and contemporary luxury. We hand-select continuous mirror-cut slabs in Italy and execute precision 45-degree mitered joins for monumental double-height living facades in Jubilee Hills and Banjara Hills.',
    finish: 'Honed or High-Gloss Mirror Polish',
    applications: ['Double-Height Feature Walls', 'Floating Fireplace Hearths', 'Master Bath En-suites'],
    colorHex: '#EAE8E3'
  },
  {
    id: 'walnut',
    name: 'Fluted Canaletto Walnut',
    category: 'Artisanal Hardwood',
    origin: 'Trentino, Italy',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    texture: 'Deep chocolate grain with warm amber undertones and precision 12mm acoustic fluting.',
    description: 'Brings profound tactile warmth and acoustic dampening to cavernous modern architectural spaces. Custom milled with concealed pivot doors and shadow-gap baseboards.',
    finish: 'Ultra-Matte Natural Oil Finish',
    applications: ['Concealed Architectural Doors', 'Acoustic Ceiling Slats', 'Bespoke Wardrobe Fronts'],
    colorHex: '#5A3D28'
  },
  {
    id: 'brass',
    name: 'Champagne PVD Brushed Brass',
    category: 'Architectural Metal',
    origin: 'Milan, Italy',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    texture: 'Subtle micro-directional brushed grain with non-oxidizing PVD titanium gold plating.',
    description: 'A discreet brass highlight that captures ambient light without gaudiness. Used for hairline inlays into Italian marble floors, pendant armature suspensions, and slim profile glazing divisions.',
    finish: 'Satin Brushed PVD Titanium',
    applications: ['Floor Marble Metal Inlays', 'Custom Cantilevered Railings', 'Bespoke Lighting Profiles'],
    colorHex: '#C5A880'
  },
  {
    id: 'travertine',
    name: 'Travertine Navona Vein-Cut',
    category: 'Sedimentary Architectural Stone',
    origin: 'Tivoli, Italy',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    texture: 'Linear directional striations in warm sand, ivory, and soft biscuit tones with filled micro-pores.',
    description: 'Evoking the timeless permanence of Roman palazzos, Travertine Navona creates monolithic exterior facades and tranquil interior courtyard atriums that age with graceful patina.',
    finish: 'Filled & Brushed Silky Matte',
    applications: ['Exterior Thermal Claddings', 'Internal Courtyard Walls', 'Cantilevered Steps'],
    colorHex: '#D8CAB7'
  },
  {
    id: 'portoro',
    name: 'Nero Portoro Gold Onyx',
    category: 'Exotic Precious Stone',
    origin: 'La Spezia, Italy',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    texture: 'Intense jet-black obsidian base interspersed with golden-yellow veins and liquid honey ribbons.',
    description: 'An ultra-rare dramatic focal stone. We integrate custom LED diffuser light-boxes behind translucent onyx sheets to transform private entertainment lounges and executive cocktail bars into glowing monoliths.',
    finish: 'Polished / Backlit Translucent',
    applications: ['Backlit Cigar Bar Counters', 'Powder Room Vanities', 'Executive Office Facades'],
    colorHex: '#1A1815'
  }
];

export const MaterialPalette: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('statuario');
  const activeMaterial = MATERIALS.find((m) => m.id === selectedId) || MATERIALS[0];

  return (
    <section className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border/30"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Tactile Material Studio
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Curated Materials & <br />
              <span className="text-gold-gradient italic font-serif">Italian Stone Alchemy</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            We directly source quarry-tagged slabs from Carrara and Verona, paired with German precision millwork to ensure every touchpoint exudes enduring luxury.
          </p>
        </motion.div>

        {/* Interactive Material Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Swatch Selector List */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-4">
              Select Curated Material:
            </p>
            {MATERIALS.map((mat) => {
              const isSelected = selectedId === mat.id;
              return (
                <button
                  key={mat.id}
                  onClick={() => setSelectedId(mat.id)}
                  className={`w-full p-4 rounded-sm text-left transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-brand-card border-brand-gold shadow-gold-glow'
                      : 'bg-brand-card/40 border-brand-border/30 hover:border-brand-gold/40 hover:bg-brand-surface/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full border border-brand-border/60 shrink-0 shadow-sm"
                      style={{ backgroundColor: mat.colorHex }}
                    />
                    <div>
                      <h4 className={`font-serif-luxury text-sm font-bold transition-colors ${isSelected ? 'text-brand-gold' : 'text-brand-cream group-hover:text-brand-gold'}`}>
                        {mat.name.split(' ')[0]} {mat.name.split(' ')[1]}
                      </h4>
                      <p className="text-[10px] text-brand-gray tracking-wider uppercase">
                        {mat.origin}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs ${isSelected ? 'text-brand-gold' : 'text-brand-gray/40 group-hover:text-brand-gold'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Material Showcase */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMaterial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-card/80 border border-brand-border/40 rounded-sm p-6 sm:p-8 backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Visual */}
                <div className="md:col-span-6 relative aspect-[4/3] rounded-sm overflow-hidden border border-brand-gold/40 shadow-2xl">
                  <img
                    src={activeMaterial.image}
                    alt={activeMaterial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-sm bg-black/80 backdrop-blur-md border border-brand-border text-xs flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-brand-gold uppercase tracking-widest block">Stone Origin</span>
                      <span className="font-serif-luxury text-brand-cream">{activeMaterial.origin}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-sm bg-brand-gold/20 text-brand-gold text-[10px] uppercase font-semibold">
                      Authentic
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="md:col-span-6 space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
                      {activeMaterial.category}
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-brand-cream mt-0.5">
                      {activeMaterial.name}
                    </h3>
                  </div>

                  <div className="p-3 rounded-sm bg-brand-surface/70 border border-brand-border/30 text-xs">
                    <p className="text-[10px] uppercase tracking-widest text-brand-gold mb-1 font-semibold">
                      Tactile Character:
                    </p>
                    <p className="text-brand-cream/80 italic font-serif leading-relaxed">
                      "{activeMaterial.texture}"
                    </p>
                  </div>

                  <p className="text-xs text-brand-gray leading-relaxed">
                    {activeMaterial.description}
                  </p>

                  <div className="pt-2 border-t border-brand-border/30">
                    <p className="text-[11px] uppercase tracking-widest text-brand-gold font-semibold mb-2">
                      Optimal Architectural Applications:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {activeMaterial.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-sm bg-brand-surface border border-brand-border/40 text-[11px] text-brand-cream/90"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
