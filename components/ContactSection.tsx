
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-construction-charcoal overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left: Contact Info */}
          <div className="lg:w-2/5 p-12 lg:p-20 bg-construction-dark text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-construction-green opacity-10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 font-heading">
              Let’s Build <br />
              <span className="text-construction-green">Something Great.</span>
            </h2>
            <p className="text-gray-400 mb-12 font-light leading-relaxed">
              Ready to start your next commercial venture? Contact our expert team for a consultation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-construction-green/20 p-3 text-construction-green">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                  <p className="text-lg font-bold">1300 APEX BUILD</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-construction-green/20 p-3 text-construction-green">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <p className="text-lg font-bold">hello@apexcommercial.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-construction-green/20 p-3 text-construction-green">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Headquarters</p>
                  <p className="text-lg font-bold">42 Corporate Blvd, Melbourne VIC 3000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-3/5 p-12 lg:p-20 bg-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full border-b-2 border-gray-100 focus:border-construction-green py-3 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Company</label>
                  <input 
                    type="text" 
                    placeholder="Enter Company Name"
                    className="w-full border-b-2 border-gray-100 focus:border-construction-green py-3 outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full border-b-2 border-gray-100 focus:border-construction-green py-3 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+61 000 000 000"
                    className="w-full border-b-2 border-gray-100 focus:border-construction-green py-3 outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Brief Project Description</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project goals..."
                  className="w-full border-b-2 border-gray-100 focus:border-construction-green py-3 outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full md:w-auto bg-construction-green hover:bg-construction-greenLight text-white px-12 py-5 text-sm font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
