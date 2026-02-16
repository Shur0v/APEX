
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = ['/vid1.mp4', '/vid2.mp4'];
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // When the index changes, ensure the new active video plays
    const video = videoRefs.current[currentVideoIndex];
    if (video) {
      video.currentTime = 0;
      video.play().catch(console.error);
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-construction-dark">
      {/* Hero Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((src, index) => (
          <video
            key={src}
            ref={(el) => (videoRefs.current[index] = el)}
            src={src}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            autoPlay={index === 0}
            muted
            playsInline
            onEnded={() => {
              if (index === currentVideoIndex) handleVideoEnd();
            }}
          />
        ))}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-construction-dark via-construction-dark/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
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
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 z-20">
        <span className="text-[10px] text-white uppercase tracking-[0.5em] mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </div>
    </section>
  );
};
