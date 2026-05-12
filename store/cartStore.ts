import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
};

type CartStore = {
  items: CartItem[];
  addToCart: (product: any, size?: string) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product, size) => {
        const items = get().items;

        const productId = product._id || product.id; // 🔥 safe id

        const exist = items.find(
          (item) => item._id === productId && item.size === size,
        );

        if (exist) {
          set({
            items: items.map((item) =>
              item._id === productId && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          });
        } else {
          set({
            items: [
              ...items,
              {
                _id: productId,
                name: product.name,
                price: Number(product.price) || 0,
                image: product.image,
                quantity: 1,
                size,
              },
            ],
          });
        }
      },
      removeFromCart: (id) => {
        set({ items: get().items.filter((item) => item._id !== id) });
      },

      increaseQty: (id) => {
        set({
          items: get().items.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        });
      },

      decreaseQty: (id) => {
        set({
          items: get()
            .items.map((item) =>
              item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        });
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "chena-bazar-cart", // 🔥 localStorage key
    },
  ),
);
