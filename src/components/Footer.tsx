import React from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-brand-cream border-t border-brand-border/30 relative overflow-hidden">
      {/* Top Banner with Monogram */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-brand-border/20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-brand-surface border border-brand-gold/50 flex items-center justify-center">
                <span className="font-serif-luxury text-brand-gold font-bold text-base">IDS</span>
              </div>
              <div>
                <span className="font-serif-luxury text-lg font-bold tracking-widest text-brand-cream uppercase block">
                  Into Design Studio
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-brand-gold">
                  Hyderabad • Established 2008
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-gray leading-relaxed pr-4">
              Pioneering bespoke architecture, turn-key luxury interiors, and landscape architecture across Telangana and Andhra Pradesh for over sixteen years.
            </p>

            <div className="pt-2 text-xs text-brand-cream/80 space-y-1">
              <p>
                <strong className="text-brand-gold">Managing Director:</strong> Vamsi Atluri
              </p>
              <p>
                <strong className="text-brand-gold">Principal Office:</strong> Road No. 36, Jubilee Hills, Hyderabad
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-4">
              Exploration
            </h4>
            <ul className="space-y-2 text-xs text-brand-cream/80">
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">Our Legacy & Craft</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-gold transition-colors">Bespoke Disciplines</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-brand-gold transition-colors">Selected Portfolio</a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-gold transition-colors">Turnkey Methodology</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-brand-gold transition-colors">Luxury Cost Estimator</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-gold transition-colors">Client Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Regional Portfolios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-4">
              Regional Enclaves
            </h4>
            <ul className="space-y-2 text-xs text-brand-cream/80">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Jubilee Hills & Banjara Hills Villas</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Financial District & Neopolis Kokapet</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Amaravati & Vijayawada Waterfronts</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Visakhapatnam Coastal Estates</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Warangal & Guntur Luxury Mansions</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Direct Inquiry Capture */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold">
              The Architectural Monograph
            </h4>
            <p className="text-xs text-brand-gray leading-relaxed">
              Subscribe to receive private previews of new residential commissions and material releases.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3.5 py-2.5 rounded-l-sm bg-brand-surface border border-brand-border/60 text-xs text-brand-cream placeholder-brand-gray/50 focus:border-brand-gold focus:outline-none w-full"
              />
              <button
                type="button"
                className="px-3.5 py-2.5 bg-gold-gradient text-brand-dark rounded-r-sm font-bold text-xs uppercase hover:shadow-gold-glow transition-all"
              >
                Join
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-brand-surface hover:bg-brand-gold hover:text-brand-dark text-brand-cream border border-brand-border/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-brand-surface hover:bg-brand-gold hover:text-brand-dark text-brand-cream border border-brand-border/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-brand-surface hover:bg-[#25D366] hover:text-white text-brand-cream border border-brand-border/40 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <p>© {new Date().getFullYear()} Into Design Studio. All rights reserved. Managing Director: Vamsi Atluri.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-brand-gold hover:text-brand-cream transition-colors text-xs uppercase tracking-widest"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
