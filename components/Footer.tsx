
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="text-3xl font-serif font-bold text-white tracking-tighter mb-6">CAKLORA</h3>
            <p className="text-sm leading-relaxed mb-6">
              Crafting sweet memories, one layer at a time. Premium boutique bakery specialized in modern, elegant, and custom cake design.
            </p>
            <div className="flex gap-4">
              {/* Dummy Social Icons */}
              {[1, 2, 3].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-all">
                  <span className="sr-only">Social Link</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#about" className="hover:text-rose-400 transition-colors">About Our Bakery</a></li>
              <li><a href="#order" className="hover:text-rose-400 transition-colors">Design Your Cake</a></li>
              <li><a href="#how-it-works" className="hover:text-rose-400 transition-colors">Ordering Process</a></li>
              <li><a href="#testimonials" className="hover:text-rose-400 transition-colors">Client Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-stone-600">Email:</span>
                hello@caklora.com
              </li>
              <li className="flex items-center gap-3">
                <span className="text-stone-600">Phone:</span>
                +1 (555) 0123-CAKE
              </li>
              <li className="flex items-center gap-3">
                <span className="text-stone-600">Visit:</span>
                123 Pastry Lane, Sweet City
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-xs mb-4">Get sweet updates and seasonal recipes.</p>
            <div className="flex bg-stone-800 rounded-full p-1 border border-stone-700">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-transparent text-xs px-4 py-2 flex-1 focus:outline-none"
              />
              <button className="bg-rose-500 text-white text-[10px] font-bold px-4 py-2 rounded-full hover:bg-rose-600 transition-all uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© {new Date().getFullYear()} CAKLORA Bakery. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
