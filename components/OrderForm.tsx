
import React, { useState, useEffect, useCallback } from 'react';
import { CakeOrderForm, CakeFlavor, CakeType } from '../types';
import { BASE_PRICE_PER_LB, FLAVORS, CAKE_TYPES, TOPPINGS, CREAM_COLORS } from '../constants';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<CakeOrderForm>({
    customerName: '',
    flavor: 'Vanilla Bean',
    sizeLbs: 1,
    type: 'Birthday',
    message: '',
    creamColor: '#FFFFFF',
    toppings: []
  });

  const [totalPrice, setTotalPrice] = useState(BASE_PRICE_PER_LB);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const calculatePrice = useCallback(() => {
    let price = formData.sizeLbs * BASE_PRICE_PER_LB;
    
    // Add topping costs
    formData.toppings.forEach(toppingId => {
      const topping = TOPPINGS.find(t => t.id === toppingId);
      if (topping) price += topping.price;
    });

    setTotalPrice(price);
  }, [formData.sizeLbs, formData.toppings]);

  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.customerName.trim()) newErrors.customerName = 'Name is required';
    if (formData.sizeLbs < 1 || formData.sizeLbs > 10) newErrors.sizeLbs = 'Size must be between 1-10 lbs';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Order Submitted Successfully:', {
        ...formData,
        totalPrice,
        timestamp: new Date().toISOString()
      });
      setIsSubmitted(true);
    }
  };

  const handleToppingChange = (id: string) => {
    setFormData(prev => ({
      ...prev,
      toppings: prev.toppings.includes(id) 
        ? prev.toppings.filter(t => t !== id)
        : [...prev.toppings, id]
    }));
  };

  if (isSubmitted) {
    return (
      <section id="order" className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 text-center bg-white p-12 rounded-3xl shadow-xl">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">Inquiry Received!</h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Thank you, {formData.customerName}! Your custom {formData.flavor} cake query has been logged. Our design consultant will reach out within 2 hours to finalize your masterpiece.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="text-rose-500 font-bold hover:underline"
          >
            Design another cake
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-24 pastel-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">Design Your Masterpiece</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Choose your flavors, colors, and toppings. See your creation come to life in our real-time preview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Area */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Full Name</label>
                  <input 
                    type="text"
                    value={formData.customerName}
                    onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 border-b-2 bg-transparent focus:outline-none focus:border-rose-500 transition-colors ${errors.customerName ? 'border-red-400' : 'border-stone-100'}`}
                  />
                  {errors.customerName && <p className="text-xs text-red-500">{errors.customerName}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Event Type</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value as CakeType})}
                    className="w-full px-4 py-3 border-b-2 border-stone-100 bg-transparent focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    {CAKE_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Base Flavor</label>
                  <select 
                    value={formData.flavor}
                    onChange={(e) => setFormData({...formData, flavor: e.target.value as CakeFlavor})}
                    className="w-full px-4 py-3 border-b-2 border-stone-100 bg-transparent focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    {FLAVORS.map(flavor => <option key={flavor} value={flavor}>{flavor}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">Weight (1 - 10 lbs)</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range"
                      min="1"
                      max="10"
                      step="0.5"
                      value={formData.sizeLbs}
                      onChange={(e) => setFormData({...formData, sizeLbs: parseFloat(e.target.value)})}
                      className="flex-1 accent-rose-500"
                    />
                    <span className="w-16 text-center font-bold bg-rose-50 text-rose-600 py-1 rounded-lg">
                      {formData.sizeLbs} lb
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-stone-700">Cream Color</label>
                <div className="flex flex-wrap gap-4">
                  {CREAM_COLORS.map(color => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => setFormData({...formData, creamColor: color.value})}
                      className={`w-10 h-10 rounded-full border-2 transition-all transform hover:scale-110 ${formData.creamColor === color.value ? 'border-stone-900 ring-2 ring-rose-200' : 'border-transparent'}`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-stone-700">Select Toppings</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {TOPPINGS.map(topping => (
                    <label 
                      key={topping.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.toppings.includes(topping.id) ? 'border-rose-500 bg-rose-50' : 'border-stone-50 bg-stone-50/50 hover:bg-stone-100'}`}
                    >
                      <span className="text-sm font-medium">{topping.label}</span>
                      <input 
                        type="checkbox"
                        className="hidden"
                        checked={formData.toppings.includes(topping.id)}
                        onChange={() => handleToppingChange(topping.id)}
                      />
                      <span className="text-rose-500 font-bold text-xs">+${topping.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Custom Message on Cake</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Happy 25th Birthday Sarah..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-stone-50 rounded-2xl bg-stone-50/50 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-stone-900 text-white rounded-full text-lg font-bold hover:bg-rose-600 transition-all flex items-center justify-center gap-2 group"
              >
                Submit Cake Inquiry
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Preview Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-stone-900 text-white rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500 rounded-bl-full opacity-20" />
              
              <h3 className="text-2xl font-serif font-bold mb-8 relative z-10">Real-time Preview</h3>
              
              {/* Visual Cake Simulation */}
              <div className="flex flex-col items-center justify-center mb-10 h-48 relative">
                <div 
                  className="w-48 h-32 rounded-lg shadow-2xl relative transition-all duration-500"
                  style={{ 
                    backgroundColor: formData.creamColor,
                    borderBottom: '12px solid rgba(0,0,0,0.1)' 
                  }}
                >
                  <div className="cake-shimmer absolute inset-0 rounded-lg opacity-30" />
                  
                  {/* Toppings Visuals */}
                  {formData.toppings.includes('sprinkles') && (
                    <div className="absolute inset-0 grid grid-cols-6 gap-2 p-2 opacity-60">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className={`w-1 h-1 rounded-full ${['bg-red-400', 'bg-blue-400', 'bg-yellow-400', 'bg-green-400'][i % 4]}`} />
                      ))}
                    </div>
                  )}
                  {formData.toppings.includes('fruits') && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
                      <div className="w-6 h-6 bg-red-500 rounded-full shadow-md" />
                      <div className="w-5 h-5 bg-blue-600 rounded-full shadow-md mt-2" />
                      <div className="w-6 h-6 bg-red-500 rounded-full shadow-md" />
                    </div>
                  )}
                  {formData.toppings.includes('chocolate') && (
                    <div className="absolute inset-0 bg-gradient-to-b from-[#4B2C20]/40 to-transparent rounded-t-lg" />
                  )}

                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <p className="text-xs font-serif italic text-stone-800 break-words opacity-80 select-none">
                      {formData.message || 'Your Message Here'}
                    </p>
                  </div>
                </div>
                <div className="w-64 h-4 bg-stone-700 rounded-full mt-2" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-end border-b border-stone-800 pb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Selections</p>
                    <p className="font-serif text-lg">{formData.flavor} &bull; {formData.sizeLbs} lbs</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Estimated Total</p>
                    <p className="text-3xl font-serif text-rose-400 font-bold">${totalPrice.toFixed(2)}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 mb-1">Event Type</p>
                    <p className="text-sm font-semibold">{formData.type}</p>
                  </div>
                  <div className="bg-stone-800/50 p-4 rounded-2xl">
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 mb-1">Cream Base</p>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: formData.creamColor }} />
                      <p className="text-sm font-semibold">{CREAM_COLORS.find(c => c.value === formData.creamColor)?.name}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-800/50 p-4 rounded-2xl">
                  <p className="text-[10px] uppercase tracking-wider text-stone-500 mb-2">Extra Accents</p>
                  <div className="flex flex-wrap gap-2">
                    {formData.toppings.length > 0 ? (
                      formData.toppings.map(t => (
                        <span key={t} className="text-[10px] bg-stone-700 px-2 py-1 rounded-md text-stone-300">
                          {TOPPINGS.find(top => top.id === t)?.label}
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-stone-600 italic">No extra toppings selected</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
