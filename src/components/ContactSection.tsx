import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialProjectType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialProjectType || 'Villa Architecture & Interiors',
    propertySize: '5,000 - 8,000 Sq. Ft.',
    budgetRange: '₹1.00 Cr - ₹2.50 Cr',
    state: 'Telangana',
    city: 'Hyderabad (Jubilee Hills / Banjara Hills / Kokapet)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A880', '#DFCCA8', '#997D58', '#FFFFFF']
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-brand-border/30">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              Initiate Your Commission
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream tracking-tight">
              Let's Co-Author <br />
              <span className="text-gold-gradient italic font-serif">Your Sanctuary</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-sm sm:text-base text-brand-gray max-w-md">
            Schedule a private architectural design consultation with Managing Director <strong>Vamsi Atluri</strong> at our Jubilee Hills studio or your site.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Studio Access & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-brand-card/80 border border-brand-gold/30 backdrop-blur-md space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold block">
                Direct Studio Channels
              </span>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Vamsi%20garu,%20I%20would%20like%20to%20discuss%20a%20luxury%20architectural/interior%20project%20with%20Into%20Design%20Studio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-sm bg-[#111] hover:bg-brand-surface border border-brand-border hover:border-brand-gold transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif-luxury text-sm font-bold text-brand-cream">Instant WhatsApp Connect</p>
                    <p className="text-xs text-brand-gray">Direct line to studio coordinators</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="flex items-center justify-between p-4 rounded-sm bg-[#111] hover:bg-brand-surface border border-brand-border hover:border-brand-gold transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif-luxury text-sm font-bold text-brand-cream">{STUDIO_INFO.phone}</p>
                    <p className="text-xs text-brand-gray">Mon - Sat: 9:30 AM - 7:30 PM IST</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Direct Desk Email */}
              <a
                href={`mailto:${STUDIO_INFO.email}`}
                className="flex items-center justify-between p-4 rounded-sm bg-[#111] hover:bg-brand-surface border border-brand-border hover:border-brand-gold transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-brand-surface border border-brand-border flex items-center justify-center text-brand-cream">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif-luxury text-sm font-bold text-brand-cream">{STUDIO_INFO.email}</p>
                    <p className="text-xs text-brand-gray">MD Desk: {STUDIO_INFO.directDesk}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Studio Location */}
              <div className="p-4 rounded-sm bg-[#111] border border-brand-border/40 space-y-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-serif-luxury text-sm font-bold text-brand-cream">Principal Design Studio</p>
                    <p className="text-xs text-brand-cream/80 mt-0.5 leading-relaxed">
                      {STUDIO_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Regional Service Assurance */}
              <div className="p-3.5 rounded-sm bg-brand-surface/40 border border-brand-border/20 text-xs text-brand-cream/90 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Serving all luxury projects across Telangana & Andhra Pradesh.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-brand-card/90 border border-brand-border/40 p-6 sm:p-10 rounded-sm backdrop-blur-md shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold mx-auto flex items-center justify-center text-brand-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-brand-cream">
                  Inquiry Received with Distinction
                </h3>
                <p className="text-sm text-brand-cream/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Managing Director <strong>Vamsi Atluri</strong> and our senior design architects will review your project brief for <em>{formData.city}</em> and connect with you within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Villa Architecture & Interiors',
                        propertySize: '5,000 - 8,000 Sq. Ft.',
                        budgetRange: '₹1.00 Cr - ₹2.50 Cr',
                        state: 'Telangana',
                        city: 'Hyderabad (Jubilee Hills / Banjara Hills / Kokapet)',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-surface border border-brand-border hover:border-brand-gold rounded-sm transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-brand-border/30 pb-4 mb-4">
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-brand-cream">
                    Project Consultation Inquiry
                  </h3>
                  <p className="text-xs text-brand-gray mt-1">
                    Fill out the specifications below to schedule an initial design walkthrough.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. V. R. Chowdary"
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream placeholder-brand-gray/60 text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      Contact Number (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98490 XXXXX"
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream placeholder-brand-gray/60 text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@domain.com"
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream placeholder-brand-gray/60 text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="Villa Architecture & Interiors">Turnkey Villa Architecture & Interiors</option>
                      <option value="Luxury Penthouse / Duplex">Luxury Penthouse / Duplex Interior</option>
                      <option value="Architecture Blueprint Only">Architectural Blueprint & Elevation Only</option>
                      <option value="Commercial & Corporate Lounge">Commercial & Corporate Headquarters</option>
                      <option value="Landscape & Terrace Architecture">Landscape & Terrace Architecture</option>
                    </select>
                  </div>
                </div>

                {/* Location & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="Telangana">Telangana</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Other">Other Region</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Jubilee Hills, Hyderabad / Vijayawada"
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream placeholder-brand-gray/60 text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Area & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      Approximate Area
                    </label>
                    <select
                      value={formData.propertySize}
                      onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="2,500 - 4,000 Sq. Ft.">2,500 - 4,000 Sq. Ft.</option>
                      <option value="4,000 - 7,000 Sq. Ft.">4,000 - 7,000 Sq. Ft.</option>
                      <option value="7,000 - 12,000 Sq. Ft.">7,000 - 12,000 Sq. Ft.</option>
                      <option value="12,000+ Sq. Ft. (Estate/Palazzo)">12,000+ Sq. Ft. (Estate / Villa)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                      Target Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream text-xs focus:border-brand-gold focus:outline-none transition-colors"
                    >
                      <option value="₹50 Lakhs - ₹1.00 Cr">₹50 Lakhs - ₹1.00 Cr</option>
                      <option value="₹1.00 Cr - ₹2.50 Cr">₹1.00 Cr - ₹2.50 Cr</option>
                      <option value="₹2.50 Cr - ₹5.00 Cr">₹2.50 Cr - ₹5.00 Cr</option>
                      <option value="₹5.00 Cr+ (Bespoke Royal)">₹5.00 Cr+ (Bespoke Royal)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1.5">
                    Project Vision / Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your site details, preferred architectural aesthetics (e.g. double-height living, Italian Statuario marble, courtyard landscape), or expected possession date..."
                    className="w-full px-4 py-3 rounded-sm bg-brand-surface border border-brand-border/60 text-brand-cream placeholder-brand-gray/60 text-xs focus:border-brand-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-xs font-bold tracking-widest uppercase text-brand-dark bg-gold-gradient rounded-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry to Principal Architect</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
