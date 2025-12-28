"use client";

import { FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

export default function MobileActionBar() {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart({
      id: "prod-1",
      name: "Midnight Blue Comfort Brief",
      price: 450,
      size: "M", // Default for quick buy
      color: "navy",
    });
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 p-4 z-50 flex items-center justify-between shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div>
        <p className="text-xs text-text-muted">Total Price</p>
        <p className="text-xl font-bold text-brand-dark">৳ 450</p>
      </div>
      <button
        onClick={handleBuyNow}
        className="bg-brand-dark text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:bg-brand-accent transition-colors shadow-lg"
      >
        <FiShoppingBag /> Buy Now
      </button>
    </div>
  );
}
