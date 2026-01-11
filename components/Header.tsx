
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-3xl font-serif font-bold tracking-tighter text-stone-900">
            CAKLORA
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-stone-600">
          <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
          <a href="#order" className="hover:text-rose-500 transition-colors">Order</a>
          <a href="#how-it-works" className="hover:text-rose-500 transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-rose-500 transition-colors">Testimonials</a>
        </nav>

        <a 
          href="#order" 
          className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-rose-600 transition-all duration-300 transform hover:scale-105"
        >
          Order Now
        </a>
      </div>
    </header>
  );
};

export default Header;
