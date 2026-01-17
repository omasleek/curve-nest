import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product } from "../types";

interface CartStore {
  items: CartItem[];
  addItem: (
    product: Product,
    quantity: number,
    size: string,
    color: string,
  ) => void;
  removeItem: (productId: number, size: string, color: string) => void;
  updateQuantity: (
    productId: number,
    size: string,
    color: string,
    quantity: number,
  ) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, quantity, size, color) => {
        const { items } = get();
        const existingItem = items.find(
          (item) =>
            item.product.id === product.id &&
            item.size === size &&
            item.color === color,
        );

        if (existingItem) {
          existingItem.quantity += quantity;
          set({ items: [...items] });
        } else {
          set({ items: [...items, { product, quantity, size, color }] });
        }
      },

      removeItem: (productId, size, color) => {
        const { items } = get();
        set({
          items: items.filter(
            (item) =>
              !(
                item.product.id === productId &&
                item.size === size &&
                item.color === color
              ),
          ),
        });
      },

      updateQuantity: (productId, size, color, quantity) => {
        const { items } = get();
        const item = items.find(
          (item) =>
            item.product.id === productId &&
            item.size === size &&
            item.color === color,
        );

        if (item) {
          if (quantity <= 0) {
            get().removeItem(productId, size, color);
          } else {
            item.quantity = quantity;
            set({ items: [...items] });
          }
        }
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
