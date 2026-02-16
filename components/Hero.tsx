
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-construction-dark">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Commercial Architecture"
          className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark via-construction-dark/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1 mb-6 border border-construction-green text-construction-accent text-xs font-bold uppercase tracking-[0.3em] animate-in slide-in-from-left duration-700">
            Commercial Building Experts
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 font-heading uppercase tracking-tighter">
            Building Commercial <br />
            <span className="text-construction-green">Spaces That Work.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light max-w-2xl border-l-2 border-construction-green pl-6">
            We deliver high-end commercial construction, boutique shop fitting, and strategic property development with absolute precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-construction-green hover:bg-construction-greenLight text-white px-10 py-5 text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a 
              href="#projects" 
              className="bg-transparent border border-white/30 hover:bg-white hover:text-construction-charcoal text-white px-10 py-5 text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40">
        <span className="text-[10px] text-white uppercase tracking-[0.5em] mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
};
