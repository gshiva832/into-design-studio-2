import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Clock, Check, ArrowUpRight, Sparkles, PieChart } from 'lucide-react';

interface CostEstimatorProps {
  onOpenConsultationWithScope?: (scopeDetails: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onOpenConsultationWithScope }) => {
  const [propertyType, setPropertyType] = useState<'villa' | 'penthouse' | 'duplex' | 'apartment' | 'commercial'>('villa');
  const [areaSqFt, setAreaSqFt] = useState<number>(6000);
  const [finishTier, setFinishTier] = useState<'signature' | 'bespoke'>('bespoke');
  const [includeLandscape, setIncludeLandscape] = useState<boolean>(true);
  const [includeAutomation, setIncludeAutomation] = useState<boolean>(true);

  // Rate calculations (INR per sq.ft approximate luxury brackets)
  const baseRates = {
    villa: { signature: 2800, bespoke: 4500 },
    penthouse: { signature: 3200, bespoke: 5200 },
    duplex: { signature: 2600, bespoke: 4200 },
    apartment: { signature: 2400, bespoke: 3800 },
    commercial: { signature: 3000, bespoke: 4800 },
  };

  const currentRate = baseRates[propertyType][finishTier];
  let estimatedTotal = areaSqFt * currentRate;

  if (includeLandscape) estimatedTotal += 500000 + areaSqFt * 250;
  if (includeAutomation) estimatedTotal += 600000 + areaSqFt * 200;

  const formatLakhsCrores = (val: number) => {
    if (val >= 10000000) {
      const cr = (val / 10000000).toFixed(2);
      return `₹${cr} Cr`;
    }
    const lakhs = (val / 100000).toFixed(1);
    return `₹${lakhs} Lakhs`;
  };

  const getEstimatedDuration = () => {
    if (areaSqFt <= 3000) return '3 to 5 Months';
    if (areaSqFt <= 7000) return '5 to 8 Months';
    if (areaSqFt <= 12000) return '8 to 12 Months';
    return '12 to 16 Months';
  };

  const handleBookConsultation = () => {
    const summary = `${propertyType.toUpperCase()} of ${areaSqFt.toLocaleString()} sq.ft (${finishTier.toUpperCase()} Luxury tier) - Est. ${formatLakhsCrores(estimatedTotal)}`;
    if (onOpenConsultationWithScope) {
      onOpenConsultationWithScope(summary);
    }
  };

  return (
    <section id="estimator" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-brand-border/20">
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
              <Calculator className="w-4 h-4" />
              Budget & Planning Utility
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Interactive Luxury <br />
              <span className="text-gold-gradient italic font-serif">Project Estimator</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            Calculate estimated investment brackets and project delivery timelines tailored for Hyderabad, Telangana, and Andhra Pradesh properties.
          </p>
        </motion.div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-brand-card/80 border border-brand-border/40 p-6 sm:p-8 rounded-sm backdrop-blur-md space-y-6">
            {/* Property Type Selection */}
            <div>
              <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-3">
                1. Select Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'villa', label: 'Luxury Villa' },
                  { id: 'penthouse', label: 'Sky Penthouse' },
                  { id: 'duplex', label: 'Duplex Home' },
                  { id: 'apartment', label: 'Premium Flat' },
                  { id: 'commercial', label: 'Commercial Lounge' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id as any)}
                    data-cursor="pointer"
                    className={`py-3 px-3 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all text-center border ${
                      propertyType === type.id
                        ? 'bg-gold-gradient text-brand-dark border-brand-gold shadow-gold-glow font-bold'
                        : 'bg-brand-surface text-brand-cream/80 border-brand-border/30 hover:border-brand-gold/40'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Carpet Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                  2. Built-Up Carpet Area (Sq. Ft.)
                </label>
                <span className="font-serif-luxury text-lg font-bold text-brand-cream bg-brand-surface px-3 py-1 rounded-sm border border-brand-gold/30">
                  {areaSqFt.toLocaleString()} sq.ft
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="15000"
                step="250"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-brand-surface rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[10px] text-brand-gray mt-1">
                <span>1,500 sq.ft</span>
                <span>6,000 sq.ft</span>
                <span>15,000+ sq.ft</span>
              </div>
            </div>

            {/* Finishes & Stone Tier */}
            <div>
              <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-3">
                3. Material & Craftsmanship Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setFinishTier('signature')}
                  data-cursor="pointer"
                  className={`p-4 rounded-sm border cursor-pointer transition-all ${
                    finishTier === 'signature'
                      ? 'bg-brand-surface border-brand-gold shadow-gold-glow'
                      : 'bg-brand-surface/40 border-brand-border/30 hover:border-brand-gold/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif-luxury text-sm font-bold text-brand-cream">Signature Contemporary</span>
                    {finishTier === 'signature' && <Check className="w-4 h-4 text-brand-gold" />}
                  </div>
                  <p className="text-[11px] text-brand-gray leading-relaxed">
                    Imported Greek Thassos / Botticino marble, natural veneer, custom lighting fixtures.
                  </p>
                </div>

                <div
                  onClick={() => setFinishTier('bespoke')}
                  data-cursor="pointer"
                  className={`p-4 rounded-sm border cursor-pointer transition-all ${
                    finishTier === 'bespoke'
                      ? 'bg-brand-surface border-brand-gold shadow-gold-glow'
                      : 'bg-brand-surface/40 border-brand-border/30 hover:border-brand-gold/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif-luxury text-sm font-bold text-brand-gold">Bespoke Royal Italian</span>
                    {finishTier === 'bespoke' && <Check className="w-4 h-4 text-brand-gold" />}
                  </div>
                  <p className="text-[11px] text-brand-gray leading-relaxed">
                    Bookmatched Statuario / Michael Angelo marble, Rimadesio-style glass systems, brass inlays.
                  </p>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="text-xs uppercase tracking-widest text-brand-gold font-semibold block mb-3">
                4. Integrated Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-sm bg-brand-surface/50 border border-brand-border/30 cursor-pointer hover:border-brand-gold/40">
                  <input
                    type="checkbox"
                    checked={includeLandscape}
                    onChange={(e) => setIncludeLandscape(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-gold bg-brand-dark border-brand-border focus:ring-brand-gold"
                  />
                  <span className="text-xs text-brand-cream font-medium">Terrace & Courtyard Landscape</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-sm bg-brand-surface/50 border border-brand-border/30 cursor-pointer hover:border-brand-gold/40">
                  <input
                    type="checkbox"
                    checked={includeAutomation}
                    onChange={(e) => setIncludeAutomation(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-gold bg-brand-dark border-brand-border focus:ring-brand-gold"
                  />
                  <span className="text-xs text-brand-cream font-medium">Smart Architectural Lighting & DALI</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#1A1713] to-[#100F0D] border border-brand-gold/50 p-6 sm:p-8 rounded-sm shadow-2xl space-y-6">
            <div className="border-b border-brand-gold/30 pb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold block">
                Estimated Turnkey Projection
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-brand-cream mt-1">
                Investment & Timeline Matrix
              </h3>
            </div>

            {/* Estimated Total with Smooth Number Recalculation */}
            <div className="p-5 rounded-sm bg-black/40 border border-brand-gold/30">
              <p className="text-xs text-brand-gray uppercase tracking-widest mb-1">
                Estimated Turnkey Budget Bracket
              </p>
              <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-gold-gradient">
                {formatLakhsCrores(estimatedTotal * 0.9)} – {formatLakhsCrores(estimatedTotal * 1.1)}
              </div>
              <p className="text-[10px] text-brand-gold/80 mt-1">
                *Approximate turnkey material & execution estimate for {areaSqFt.toLocaleString()} sq.ft
              </p>
            </div>

            {/* Dynamic Budget Allocation Breakdown Bar */}
            <div className="space-y-2 pt-2 border-t border-brand-border/30">
              <div className="flex items-center justify-between text-xs text-brand-gold font-semibold">
                <span className="flex items-center gap-1.5">
                  <PieChart className="w-3.5 h-3.5" />
                  Estimated Allocation Matrix
                </span>
                <span className="text-[10px] text-brand-gray">100% Turnkey</span>
              </div>

              {/* Segmented Color Bar */}
              <div className="h-3 rounded-full bg-brand-surface overflow-hidden flex gap-0.5 p-0.5 border border-brand-border/40">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '15%' }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-[#DFCCA8] rounded-l-full"
                  title="Architecture & 3D Engineering (15%)"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '35%' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="h-full bg-[#C5A880]"
                  title="Italian Marble & Natural Stones (35%)"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-[#997D58]"
                  title="Bespoke Joinery & Millwork (30%)"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '20%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full bg-[#5A452D] rounded-r-full"
                  title="Lighting, HVAC & Automation (20%)"
                />
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-2 pt-1 text-[10px] text-brand-cream/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#DFCCA8]" />
                  Architecture & 3D (15%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                  Italian Stone & Marble (35%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#997D58]" />
                  Bespoke Joinery (30%)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#5A452D]" />
                  Lighting & Automation (20%)
                </span>
              </div>
            </div>

            {/* Key Metric Highlights */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-sm bg-brand-surface/70 border border-brand-border/30">
                <span className="text-[10px] uppercase text-brand-gray block">Delivery Timeline</span>
                <span className="font-serif-luxury text-sm font-bold text-brand-cream flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" />
                  {getEstimatedDuration()}
                </span>
              </div>

              <div className="p-3 rounded-sm bg-brand-surface/70 border border-brand-border/30">
                <span className="text-[10px] uppercase text-brand-gray block">Selected Grade</span>
                <span className="font-serif-luxury text-sm font-bold text-brand-gold capitalize mt-0.5 block truncate">
                  {finishTier} Tier
                </span>
              </div>
            </div>

            {/* Trigger CTA */}
            <button
              onClick={handleBookConsultation}
              data-cursor="pointer"
              className="w-full py-4 text-xs font-bold tracking-widest uppercase text-brand-dark bg-gold-gradient rounded-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4"
            >
              <span>Request Detailed Itemized BOQ</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
