import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AwardsMarquee } from './components/AwardsMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { MaterialPalette } from './components/MaterialPalette';
import { ProcessSection } from './components/ProcessSection';
import { CostEstimator } from './components/CostEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { ConsultationModal } from './components/ConsultationModal';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from './data/portfolioData';

export function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState<string>('');

  const handleOpenConsultation = (context: string = '') => {
    setConsultationContext(context);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setConsultationContext('');
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-cream flex flex-col selection:bg-brand-gold selection:text-brand-dark relative font-sans">
      {/* Luxury Architectural Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Top Floating Glass Navigation with Live Hyderabad Clock */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Fullscreen Hero with Staggered Motion & Dynamic Counters */}
        <HeroSection onOpenConsultation={() => handleOpenConsultation('General Luxury Walkthrough')} />

        {/* Infinite Awards & Accreditations Marquee */}
        <AwardsMarquee />

        {/* 16-Year Story & Leadership (Vamsi Atluri) */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation('Founder Consultation')} />

        {/* Disciplines & Before/After Slider */}
        <ServicesSection onOpenConsultation={() => handleOpenConsultation('Service Inquiry')} />

        {/* Filterable Portfolio Gallery & Lightbox with Framer Motion Layout Reordering */}
        <PortfolioSection
          onOpenConsultationWithProject={(projectTitle) =>
            handleOpenConsultation(`Project Case Study: ${projectTitle}`)
          }
        />

        {/* Interactive Tactile Material Studio */}
        <div id="materials">
          <MaterialPalette />
        </div>

        {/* 4-Step Interactive Process Timeline */}
        <ProcessSection />

        {/* Interactive Luxury Budget & Timeline Estimator with Allocation Matrix */}
        <CostEstimator
          onOpenConsultationWithScope={(scopeDetails) =>
            handleOpenConsultation(`Custom Estimation: ${scopeDetails}`)
          }
        />

        {/* Client Testimonials & Regional Patron Reviews */}
        <TestimonialsSection />

        {/* Lead Generation & Contact Studio */}
        <ContactSection />
      </main>

      {/* Architectural Footer */}
      <Footer />

      {/* Global Consultation Modal with Spring Physics */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialProjectContext={consultationContext}
      />

      {/* Floating Quick WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${STUDIO_INFO.whatsapp}?text=Hello%20Into%20Design%20Studio,%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20interior%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="pointer"
          className="w-13 h-13 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group border-2 border-white/20"
          title="Chat directly on WhatsApp"
          aria-label="Direct WhatsApp Contact"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
            WhatsApp Studio
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
