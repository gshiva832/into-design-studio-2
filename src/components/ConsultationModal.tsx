import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_INFO } from '../data/portfolioData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectContext?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialProjectContext
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    meetingType: 'Studio Walkthrough (Jubilee Hills)',
    date: '',
    timeSlot: 'Morning (11:00 AM - 1:00 PM)',
    cityLocation: 'Hyderabad',
    notes: initialProjectContext ? `Interested in: ${initialProjectContext}` : ''
  });

  const [isBooked, setIsBooked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#C5A880', '#DFCCA8', '#997D58']
      });
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-brand-dark border border-brand-gold/50 rounded-sm shadow-2xl overflow-hidden my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            data-cursor="pointer"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-surface/80 hover:bg-brand-gold hover:text-brand-dark text-brand-cream border border-brand-border/40 transition-colors"
            aria-label="Close Consultation Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-[#1E1B17] to-brand-dark border-b border-brand-border/30">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              Private Architectural Consultation
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-brand-cream">
              Schedule a Private Walkthrough
            </h2>
            <p className="text-xs text-brand-gray mt-1.5">
              Connect directly with Managing Director <strong>Vamsi Atluri</strong> and our senior principal design architects.
            </p>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            {isBooked ? (
              <div className="py-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold mx-auto flex items-center justify-center text-brand-gold">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-brand-cream">
                  Consultation Request Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-brand-cream/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your consultation has been scheduled for <em>{formData.meetingType}</em>. Our executive coordinator will reach out to <strong>{formData.phone}</strong> to confirm your appointment.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Into%20Design%20Studio,%20I%20just%20scheduled%20a%20consultation%20under%20the%20name%20${encodeURIComponent(formData.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="px-5 py-2.5 rounded-sm bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:bg-[#25D366]/30 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Notify via WhatsApp</span>
                  </a>

                  <button
                    onClick={onClose}
                    data-cursor="pointer"
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-dark bg-gold-gradient rounded-sm hover:shadow-gold-glow transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Atluri"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-brand-surface border border-brand-border text-brand-cream placeholder-brand-gray/50 text-xs focus:border-brand-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1">
                      Phone (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98490 XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-brand-surface border border-brand-border text-brand-cream placeholder-brand-gray/50 text-xs focus:border-brand-gold focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Meeting Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-brand-surface border border-brand-border text-brand-cream placeholder-brand-gray/50 text-xs focus:border-brand-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1">
                      Meeting Format *
                    </label>
                    <select
                      value={formData.meetingType}
                      onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-brand-surface border border-brand-border text-brand-cream text-xs focus:border-brand-gold focus:outline-none"
                    >
                      <option value="Studio Walkthrough (Jubilee Hills)">Studio Walkthrough (Jubilee Hills)</option>
                      <option value="On-Site Plot / Property Visit (Telangana)">On-Site Plot / Property Visit (Telangana)</option>
                      <option value="On-Site Plot / Property Visit (Andhra Pradesh)">On-Site Plot / Property Visit (AP)</option>
                      <option value="Virtual High-Def 3D Presentation">Virtual High-Def 3D Presentation</option>
                    </select>
                  </div>
                </div>

                {/* Time Slot & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-brand-surface border border-brand-border text-brand-cream text-xs focus:border-brand-gold focus:outline-none"
                    >
                      <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:30 PM - 4:30 PM)">Afternoon (2:30 PM - 4:30 PM)</option>
                      <option value="Evening (5:30 PM - 7:30 PM)">Evening (5:30 PM - 7:30 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1">
                      Property Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.cityLocation}
                      onChange={(e) => setFormData({ ...formData, cityLocation: e.target.value })}
                      placeholder="e.g. Jubilee Hills, Hyderabad / Vijayawada"
                      className="w-full px-3.5 py-2.5 rounded-sm bg-brand-surface border border-brand-border text-brand-cream placeholder-brand-gray/50 text-xs focus:border-brand-gold focus:outline-none"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gold font-medium mb-1">
                    Project Notes / Space Highlights
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Plot size, preferred style (Italian marble, minimalist, double height living), possession timeline..."
                    className="w-full px-3.5 py-2.5 rounded-sm bg-brand-surface border border-brand-border text-brand-cream placeholder-brand-gray/50 text-xs focus:border-brand-gold focus:outline-none resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="pointer"
                  className="w-full py-3.5 text-xs font-bold tracking-widest uppercase text-brand-dark bg-gold-gradient rounded-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Scheduling Walkthrough...</span>
                  ) : (
                    <>
                      <span>Confirm Consultation Booking</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
