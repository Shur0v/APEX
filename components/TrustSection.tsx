
import React from 'react';
import { ShieldCheck, Target, HardHat, Award } from 'lucide-react';

const stats = [
  { label: "Safety Rating", value: "100%", icon: <ShieldCheck size={24} /> },
  { label: "Delivery Precision", value: "98%", icon: <Target size={24} /> },
  { label: "Active Sites", value: "12", icon: <HardHat size={24} /> },
  { label: "Industry Awards", value: "15+", icon: <Award size={24} /> }
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-construction-dark text-white overflow-hidden relative" id="experience">
      {/* Decorative architectural grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-6 h-full border-l border-white/20">
          {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/20"></div>)}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-construction-green text-sm font-black uppercase tracking-widest block mb-6">Unwavering Reliability</span>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-8 uppercase tracking-tighter">Stability. Competence. <br /><span className="text-construction-green">Control.</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We handle the complexity so you can focus on the outcome. Our proven systems ensure that every square meter is built to code, on budget, and beyond expectations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="group">
              <div className="flex justify-center text-construction-green mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest font-bold text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-10 md:gap-20 grayscale opacity-40 hover:opacity-100 transition-opacity">
          {/* Logo Placeholders for Industry Accreditations */}
          <div className="font-heading font-black text-xl italic tracking-tighter">MASTER BUILDERS</div>
          <div className="font-heading font-black text-xl italic tracking-tighter">VIC BUILDING ASSOC.</div>
          <div className="font-heading font-black text-xl italic tracking-tighter">ISO 9001 CERTIFIED</div>
          <div className="font-heading font-black text-xl italic tracking-tighter">HIA MEMBER</div>
        </div>
      </div>
    </section>
  );
};
