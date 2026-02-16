
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  { title: "Design & Plan", desc: "Rigorous planning and architectural coordination to set a firm foundation." },
  { title: "Build & Managed", desc: "On-site execution with strict quality controls and safety protocols." },
  { title: "Deliver & Handover", desc: "Meticulous finishing and professional project close-out." }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-construction-gray border-y border-gray-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-construction-green text-sm font-black uppercase tracking-widest block mb-4">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black uppercase tracking-tight">Structured For Success</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gray-300 -z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 bg-white p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-construction-charcoal text-white flex items-center justify-center font-heading font-bold mb-8 group-hover:bg-construction-green transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8 text-gray-300">
                  <ArrowRight className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
