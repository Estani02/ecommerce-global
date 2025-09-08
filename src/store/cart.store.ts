import {create} from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  total: () => number;
  updateQuantity: (id: number, quantity: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (item) => {
    const items = get().items;
    const existing = items.find((i) => i.id === item.id);

    if (existing) {
      set({
        items: items.map((i) =>
          i.id === item.id ? {...i, quantity: i.quantity + item.quantity} : i,
        ),
      });
    } else {
      set({items: [...items, item]});
    }
  },

  removeItem: (id) => {
    set({items: get().items.filter((i) => i.id !== id)});
  },

  updateQuantity: (id: number, quantity: number) => {
    set({
      items: get().items.map((i) => (i.id === id ? {...i, quantity: Math.max(1, quantity)} : i)),
    });
  },

  clearCart: () => set({items: []}),

  total() {
    return get().items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  },
}));
