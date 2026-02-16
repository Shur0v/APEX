
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  Building2,
  HardHat,
  Briefcase
} from 'lucide-react';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Services } from './components/Services';
import { TrustSection } from './components/TrustSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const LOGO_URL = "https://static.wixstatic.com/media/02cd8a_02cf9514545a4589acb426a2588d643a~mv2.png/v1/fill/w_274,h_62,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sustainabylt-green%20-%20transparent.png";

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="block transition-all duration-300">
              <img 
                src={LOGO_URL} 
                alt="Sustainabylt Logo" 
                className={`h-10 md:h-12 w-auto transition-all duration-300 ${!scrolled ? 'brightness-0 invert' : ''}`}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-semibold uppercase tracking-widest hover:text-construction-green transition-colors ${
                  scrolled ? 'text-construction-charcoal' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-construction-green hover:bg-construction-greenLight text-white px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-construction-charcoal' : 'text-white'} size={28} />
            ) : (
              <Menu className={scrolled ? 'text-construction-charcoal' : 'text-white'} size={28} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-construction-dark text-white flex flex-col justify-center items-center space-y-8 z-40 md:hidden animate-in fade-in duration-300">
             <img 
              src={LOGO_URL} 
              alt="Sustainabylt Logo" 
              className="h-16 w-auto mb-8 brightness-0 invert"
            />
            {['Services', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-heading font-bold uppercase tracking-widest hover:text-construction-green"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-construction-green px-10 py-4 text-lg font-bold uppercase tracking-widest"
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Overview />
        <Services />
        <TrustSection />
        <ProjectShowcase />
        <Process />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
