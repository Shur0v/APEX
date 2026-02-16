
import React from 'react';

export const Overview: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="overview">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-construction-green text-sm font-black uppercase tracking-widest block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight uppercase">
                Experienced Builders <br />
                <span className="text-gray-400">Delivering Professional Outcomes.</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              At Sustainabylt, we don’t just build structures; we execute strategic commercial visions. With over 20 years of experience in the Australian construction market, our team provides seamless end-to-end delivery from advisory to final handover.
            </p>
            <div className="grid grid-cols-2 gap-8 py-6">
              <div>
                <h4 className="text-3xl font-black text-construction-charcoal font-heading">20+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-construction-charcoal font-heading">450+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-construction-green/10 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000" 
              alt="Construction Professionalism" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
            <div className="absolute bottom-0 right-0 bg-construction-charcoal p-8 text-white max-w-xs transform translate-y-12 translate-x-4 hidden lg:block">
              <p className="text-sm font-light italic">"Our commitment is to structural integrity, professional transparency, and on-time delivery."</p>
              <p className="text-xs font-bold mt-4 uppercase tracking-widest text-construction-green">— Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
