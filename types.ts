
export type CakeFlavor = 'Vanilla Bean' | 'Valrhona Chocolate' | 'Red Velvet' | 'Lemon Zest' | 'Salted Caramel' | 'Pistachio';

export type CakeType = 'Birthday' | 'Wedding' | 'Anniversary' | 'Custom Event';

export interface Topping {
  id: string;
  label: string;
  price: number;
}

export interface CakeOrderForm {
  customerName: string;
  flavor: CakeFlavor;
  sizeLbs: number;
  type: CakeType;
  message: string;
  creamColor: string;
  toppings: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}
