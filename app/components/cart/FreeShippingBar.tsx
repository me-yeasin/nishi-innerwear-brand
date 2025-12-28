"use client";

import { useCart } from "../../context/CartContext";

export default function FreeShippingBar() {
  const { cartTotal } = useCart();
  const threshold = 2000; // Free shipping at 2000 Tk
  const progress = Math.min(100, (cartTotal / threshold) * 100);
  const remaining = Math.max(0, threshold - cartTotal);

  return (
    <div className="py-4 border-b border-gray-100 bg-gray-50/50 px-6">
      <p className="text-xs text-center text-text-muted mb-2">
        {remaining > 0 ? (
          <>
            Add <span className="font-bold text-brand-dark">৳{remaining}</span> more for <span className="text-brand-accent font-bold">FREE Shipping</span>
          </>
        ) : (
          <span className="text-green-600 font-bold">You have unlocked FREE Shipping!</span>
        )}
      </p>
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
