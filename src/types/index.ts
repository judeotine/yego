
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: "customer" | "admin";
  createdAt: string;
};

export type CartItem = {
  productId: string;
  size: string;
  color: string;
  quantity: number;
  product?: Product;
};

export type Order = {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "shipped" | "delivered";
  createdAt: string;
};

export type CheckoutStep = "shipping" | "payment" | "confirmation";
