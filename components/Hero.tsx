
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/90 to-rose-50/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1578985543813-28b3a127b71a?auto=format&fit=crop&q=80&w=2000" 
          alt="Elegant Cake Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-6 animate-fade-in text-stone-900">
            Design Your <span className="text-rose-500 italic">Dream Cake</span> with CAKLORA
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-10 font-light leading-relaxed max-w-xl">
            Custom cakes crafted with premium ingredients, designed just the way you imagined for your most precious moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#order" 
              className="px-10 py-5 bg-rose-500 text-white rounded-full text-lg font-bold shadow-lg shadow-rose-200 hover:bg-rose-600 transition-all transform hover:-translate-y-1 text-center"
            >
              Order Your Cake
            </a>
            <a 
              href="#about" 
              className="px-10 py-5 bg-white text-stone-900 rounded-full text-lg font-bold border border-stone-200 hover:bg-stone-50 transition-all text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-stone-400 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
