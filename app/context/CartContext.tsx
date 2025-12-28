"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type CartItem = {
  id: string;
  cartItemId: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image?: string;
};

type CartContextType = {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity" | "cartItemId">) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  // Mock initial data or load from local storage could go here

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addToCart = (newItem: Omit<CartItem, "quantity" | "cartItemId">) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.id === newItem.id && i.size === newItem.size && i.color === newItem.color
      );
      if (existing) {
        return prev.map((i) =>
          i === existing ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Create a unique cart item ID based on attributes to ensure uniqueness if logic changes,
      // though here we rely on find logic for aggregation.
      // Actually, if we aggregate, we reuse the existing item's cartItemId.
      // If new, we generate one.
      const cartItemId = `${newItem.id}-${newItem.size}-${newItem.color}`;
      return [...prev, { ...newItem, cartItemId, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.cartItemId === cartItemId) {
          const newQty = Math.max(1, i.quantity + delta);
          return { ...i, quantity: newQty };
        }
        return i;
      })
    );
  };

  const clearCart = () => setItems([]);

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
