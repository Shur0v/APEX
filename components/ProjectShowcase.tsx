
import React from 'react';

const projects = [
  {
    title: "Centennial Heights",
    category: "Commercial Office",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Lumina Boutique",
    category: "Retail Fit-out",
    img: "https://images.unsplash.com/photo-1555529771-7888783a18d3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Urban Nexus",
    category: "Mixed Use",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Horizon Commons",
    category: "Education Sector",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Tech Plaza",
    category: "Infrastructure",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Metro Hub",
    category: "Logistics",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  }
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-16">
          <span className="text-construction-green text-sm font-black uppercase tracking-widest mb-4 block">Proven Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight uppercase">Exceptional Workmanship</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-gray-100 aspect-square shadow-lg">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-construction-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-construction-green text-xs font-bold uppercase tracking-widest mb-2">{p.category}</p>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-construction-charcoal text-sm font-black uppercase tracking-[0.3em] border-b-2 border-construction-green pb-2 hover:text-construction-green transition-colors">
            Full Project Archive
          </button>
        </div>
      </div>
    </section>
  );
};
