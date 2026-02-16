
import React from 'react';
import { Building2, PencilRuler, Briefcase, Handshake } from 'lucide-react';

const serviceData = [
  {
    title: "Construction & Delivery",
    desc: "Full-scale commercial construction management focusing on structural integrity and premium finishes.",
    icon: <Building2 className="text-construction-green" size={32} />
  },
  {
    title: "Boutique Shop Fitting",
    desc: "High-end retail and hospitality fit-outs tailored to brand identity and functional excellence.",
    icon: <PencilRuler className="text-construction-green" size={32} />
  },
  {
    title: "Property Development",
    desc: "End-to-end development services including land acquisition, planning, and feasibility studies.",
    icon: <Briefcase className="text-construction-green" size={32} />
  },
  {
    title: "Strategic Advisory",
    desc: "Expert consulting on project feasibility, building regulations, and delivery strategies.",
    icon: <Handshake className="text-construction-green" size={32} />
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-24 bg-construction-gray" id="services">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-construction-green text-sm font-black uppercase tracking-widest mb-4 block">Our Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight uppercase">Specialized Solutions <br /> For Commercial Projects</h2>
          </div>
          <div className="text-gray-500 max-w-xs text-sm">
            Tailored delivery models designed to maximize ROI and minimize project risk across all sectors.
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {serviceData.map((service, idx) => (
            <div key={idx} className="bg-white p-10 hover:bg-construction-charcoal group transition-all duration-300">
              <div className="mb-8 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-white uppercase tracking-tight">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="w-8 h-[2px] bg-construction-green group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
