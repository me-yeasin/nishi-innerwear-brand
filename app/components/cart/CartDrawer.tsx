"use client";

import { useCart } from "../../context/CartContext";
import { FiX, FiShoppingBag, FiLock, FiShield } from "react-icons/fi";
import FreeShippingBar from "./FreeShippingBar";
import CartItemRow from "./CartItem";

export default function CartDrawer() {
  const { isOpen, closeCart, items, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col animate-slide-in-right">

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-serif text-xl text-brand-dark flex items-center gap-2">
            Your Bag <span className="text-sm font-sans text-text-muted font-normal">({items.length})</span>
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <FreeShippingBar />

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <FiShoppingBag className="w-12 h-12 text-gray-300" />
              <p className="text-sm">Your bag is empty.</p>
              <button
                onClick={closeCart}
                className="text-brand-accent text-xs font-bold uppercase tracking-wider hover:underline"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col">
              {items.map((item) => (
                <CartItemRow key={item.cartItemId} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50/30">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-text-muted">Subtotal</span>
              <span className="text-xl font-bold text-brand-dark">৳ {cartTotal}</span>
            </div>

            <p className="text-[10px] text-gray-400 mb-4 text-center">
              Shipping & taxes calculated at checkout.
            </p>

            <button className="w-full bg-brand-dark text-white py-4 font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-brand-accent transition-colors duration-300 cursor-pointer shadow-lg group relative overflow-hidden">
              <span className="relative z-10">Checkout Now</span>
              <span className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </button>

            {/* Trust Badges */}
            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-200/50 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <FiLock className="w-3 h-3" /> Secure Payment
              </div>
              <div className="flex items-center gap-1">
                <FiShield className="w-3 h-3" /> 7-Day Returns
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
