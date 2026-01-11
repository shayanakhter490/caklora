
import React from 'react';
import { CakeFlavor, CakeType, Topping, Testimonial } from './types';

export const BASE_PRICE_PER_LB = 15;

export const FLAVORS: CakeFlavor[] = [
  'Vanilla Bean',
  'Valrhona Chocolate',
  'Red Velvet',
  'Lemon Zest',
  'Salted Caramel',
  'Pistachio'
];

export const CAKE_TYPES: CakeType[] = [
  'Birthday',
  'Wedding',
  'Anniversary',
  'Custom Event'
];

export const TOPPINGS: Topping[] = [
  { id: 'sprinkles', label: 'Rainbow Sprinkles', price: 2 },
  { id: 'fruits', label: 'Fresh Mixed Berries', price: 5 },
  { id: 'chocolate', label: 'Dark Chocolate Ganache', price: 4 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Bride",
    content: "Our wedding cake from CAKLORA was not only a masterpiece to look at but tasted heavenly. The Vanilla Bean flavor was so delicate!",
    rating: 5,
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Event Planner",
    content: "I always recommend CAKLORA to my clients. Their attention to detail and custom messages is unparalleled in the city.",
    rating: 5,
    avatar: "https://picsum.photos/id/91/100/100"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Birthday Parent",
    content: "The custom birthday cake for my daughter was perfect. The live preview on the site really helped us decide on the colors.",
    rating: 5,
    avatar: "https://picsum.photos/id/102/100/100"
  }
];

export const CREAM_COLORS = [
  { name: 'Classic White', value: '#FFFFFF' },
  { name: 'Soft Blush', value: '#FCE7F3' },
  { name: 'Pale Mint', value: '#ECFDF5' },
  { name: 'Golden Cream', value: '#FEF3C7' },
  { name: 'Rich Mocha', value: '#78350F' }
];
