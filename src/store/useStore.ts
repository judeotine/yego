
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, CartItem, Product } from '@/types';

interface Store {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  
  // Cart state
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateCartQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  
  // UI state
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      // User state
      user: null,
      setUser: (user) => set({ user }),
      
      // Cart state
      cart: [],
      addToCart: (item) => {
        const { cart } = get();
        const existingItem = cart.find(
          (cartItem) =>
            cartItem.productId === item.productId &&
            cartItem.size === item.size &&
            cartItem.color === item.color
        );

        if (existingItem) {
          set({
            cart: cart.map((cartItem) =>
              cartItem.productId === item.productId &&
              cartItem.size === item.size &&
              cartItem.color === item.color
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
            ),
          });
        } else {
          set({ cart: [...cart, item] });
        }
      },
      
      removeFromCart: (productId, size, color) => {
        const { cart } = get();
        set({
          cart: cart.filter(
            (item) =>
              !(item.productId === productId && item.size === size && item.color === color)
          ),
        });
      },
      
      updateCartQuantity: (productId, size, color, quantity) => {
        const { cart } = get();
        if (quantity <= 0) {
          get().removeFromCart(productId, size, color);
          return;
        }
        
        set({
          cart: cart.map((item) =>
            item.productId === productId && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          ),
        });
      },
      
      clearCart: () => set({ cart: [] }),
      
      get cartCount() {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
      
      get cartTotal() {
        return get().cart.reduce((total, item) => {
          // Using placeholder price since no mock data
          const price = 50000; // Will be item.product?.price when connected to Supabase
          return total + price * item.quantity;
        }, 0);
      },
      
      // UI state
      isMenuOpen: false,
      setIsMenuOpen: (open) => set({ isMenuOpen: open }),
      isLoading: false,
      setIsLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'yego-store',
      partialize: (state) => ({
        cart: state.cart,
        user: state.user,
      }),
    }
  )
);
