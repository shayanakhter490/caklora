
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-rose-50 rounded-full z-0 blur-3xl opacity-70" />
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1557925923-33b27f891f88?auto=format&fit=crop&q=80&w=800" 
                alt="Cake Detail" 
                className="rounded-2xl shadow-xl transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800" 
                alt="Bakery Process" 
                className="rounded-2xl shadow-xl transform -translate-y-4"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="uppercase tracking-widest text-rose-500 font-bold text-sm">The Caklora Experience</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
              Where Artistry Meets Pure <span className="italic">Flavor</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              At CAKLORA, we believe every celebration deserves a centerpiece that tells a story. Our master bakers and decorators blend traditional French pastry techniques with modern design to create cakes that are visual masterpieces.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-rose-600 text-xl font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">Premium Ingredients</h4>
                  <p className="text-sm text-stone-500">Only the finest Valrhona chocolate and Madagascan vanilla.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-orange-600 text-xl font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-1">100% Handcrafted</h4>
                  <p className="text-sm text-stone-500">Bespoke designs tailored to your unique event theme.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
