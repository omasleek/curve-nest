export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}
