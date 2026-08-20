import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, MessageSquare, Clock, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeInterval);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Materials', href: '#materials' },
    { name: 'Process', href: '#process' },
    { name: 'Estimator', href: '#estimator' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-brand-dark/95 backdrop-blur-2xl border-b border-brand-border/40 shadow-2xl shadow-black/80'
            : 'py-5 bg-gradient-to-b from-black/90 via-black/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Architectural Monogram */}
          <a href="#" className="flex items-center gap-3.5 group" data-cursor="pointer">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#1F1C18] to-[#0D0D0D] border border-brand-gold/40 flex items-center justify-center shadow-lg group-hover:border-brand-gold group-hover:shadow-gold-glow transition-all duration-300">
              <svg viewBox="0 0 100 100" className="w-6 h-6 text-brand-gold stroke-current fill-none stroke-[6]">
                <path d="M20 20 L80 20 M50 20 L50 80 M25 80 L75 80" strokeLinecap="round" />
                <rect x="35" y="35" width="30" height="30" stroke="currentColor" strokeWidth="4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-base sm:text-lg font-bold tracking-[0.2em] text-brand-cream uppercase group-hover:text-brand-gold transition-colors duration-300">
                Into Design Studio
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-brand-gold/90 font-medium flex items-center gap-2">
                <span>Architecture & Interiors</span>
                <span className="w-1 h-1 rounded-full bg-brand-gold hidden sm:inline" />
                <span className="hidden sm:inline">Est. 2008</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-brand-cream/80 hover:text-brand-gold transition-colors duration-300 font-medium relative group py-1"
                data-cursor="pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Studio Coordinates & Live Clock */}
          <div className="hidden lg:flex flex-col items-end text-[11px] text-brand-gray border-r border-brand-border/30 pr-5 mr-1">
            <span className="flex items-center gap-1 text-brand-cream/90 font-medium">
              <Clock className="w-3 h-3 text-brand-gold" />
              <span>Hyderabad: {currentTime || 'IST'}</span>
            </span>
            <span className="text-[10px] tracking-wider text-brand-gold/80 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5" />
              17.4325° N, 78.4071° E
            </span>
          </div>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Into%20Design%20Studio,%20I%20would%20like%20to%20inquire%20about%20an%20architectural/interior%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-brand-card hover:bg-brand-surface border border-brand-border text-brand-gold hover:text-brand-cream transition-all duration-300 shadow-sm"
              title="Chat on WhatsApp"
              data-cursor="pointer"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenConsultation}
              data-cursor="pointer"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-brand-dark bg-gold-gradient rounded-sm overflow-hidden group shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                Book Consultation
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-brand-cream hover:text-brand-gold focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl xl:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-brand-dark border-l border-brand-border/40 p-6 flex flex-col justify-between"
            >
              <div className="pt-16">
                <div className="flex items-center gap-3 pb-6 border-b border-brand-border/30">
                  <div className="w-9 h-9 rounded-sm bg-brand-card border border-brand-gold/40 flex items-center justify-center">
                    <span className="font-serif-luxury text-brand-gold font-bold text-sm">IDS</span>
                  </div>
                  <div>
                    <p className="font-serif-luxury text-sm font-bold text-brand-cream">INTO DESIGN STUDIO</p>
                    <p className="text-[10px] text-brand-gold tracking-widest uppercase">Hyderabad • Since 2008</p>
                  </div>
                </div>

                <nav className="mt-8 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-base uppercase tracking-widest text-brand-cream/90 hover:text-brand-gold py-2 border-b border-white/5 transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4 pt-6 border-t border-brand-border/30">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 text-xs font-bold tracking-widest uppercase text-brand-dark bg-gold-gradient rounded-sm shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-4 text-xs text-brand-gray">
                  <a href={`tel:${STUDIO_INFO.phone}`} className="flex items-center gap-1.5 hover:text-brand-gold">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{STUDIO_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
