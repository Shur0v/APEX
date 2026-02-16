
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-construction-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-3xl font-extrabold tracking-tighter font-heading">
              APEX<span className="text-construction-green">.</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium commercial builders delivering stability, competence, and exceptional architectural outcomes across Australia.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-2 border-construction-green pl-4">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Boutique Fit-outs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Property Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Building Advisory</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-2 border-construction-green pl-4">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Protocols</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-2 border-construction-green pl-4">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>1300 APEX BUILD</li>
              <li>hello@apexcommercial.com</li>
              <li>Melbourne, Australia</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Apex Commercial Construction. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
