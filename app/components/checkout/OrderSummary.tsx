"use client";

import { useCart } from "../../context/CartContext";
import { FiCheckCircle, FiPackage, FiRefreshCw, FiTruck } from "react-icons/fi";
import Image from "next/image";

export default function OrderSummary() {
  const { items, cartTotal } = useCart();

  // Mock calculations for demo
  const subtotal = cartTotal;
  const shipping = 60; // Default Dhaka
  const total = subtotal + shipping;

  return (
    <div className="bg-white md:border border-gray-100 rounded-lg md:shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-brand-dark px-6 py-4 flex justify-between items-center text-white">
        <h3 className="font-serif text-lg font-bold">Order Summary</h3>
        <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-brand-accent font-semibold">
          {items.length} Items
        </span>
      </div>

      {/* Items List */}
      <div className="p-6 max-h-[300px] overflow-y-auto custom-scrollbar border-b border-gray-50">
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0 border border-gray-200">
                {/* Placeholder for item image */}
                <div className="absolute inset-0 bg-brand-dark/5 flex items-center justify-center text-xs text-brand-dark/20 font-bold">
                  IMG
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-brand-dark text-sm leading-tight">{item.name}</h4>
                <p className="text-xs text-text-muted mt-1">Size: M • Qty: {item.quantity}</p>
                <p className="text-sm font-bold text-brand-accent mt-1">৳ {item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="p-6 bg-gray-50/50 space-y-3 border-b border-gray-100">
        <div className="flex justify-between text-sm text-text-muted">
          <span>Subtotal</span>
          <span className="font-medium text-brand-dark">৳ {subtotal}</span>
        </div>
        <div className="flex justify-between text-sm text-text-muted">
          <span>Shipping (Est.)</span>
          <span className="font-medium text-brand-dark">৳ {shipping}</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
          <span className="font-serif font-bold text-lg text-brand-dark">Total</span>
          <span className="font-serif font-bold text-2xl text-brand-accent">৳ {total}</span>
        </div>
      </div>

      {/* Trust Stack (The "Unique Angle") */}
      <div className="p-5 bg-blue-50/30">
        <div className="space-y-3">

          <div className="flex items-start gap-3">
            <div className="p-2 bg-white rounded-full text-brand-accent shadow-sm border border-brand-accent/10">
              <FiPackage className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-brand-dark text-sm">Discreet Packaging</p>
              <p className="text-xs text-text-muted">Delivered in unmarked boxes for your privacy.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 bg-white rounded-full text-brand-accent shadow-sm border border-brand-accent/10">
              <FiRefreshCw className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-brand-dark text-sm">Open Box Delivery</p>
              <p className="text-xs text-text-muted">Check your product before you pay.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
             <div className="p-2 bg-white rounded-full text-brand-accent shadow-sm border border-brand-accent/10">
              <FiCheckCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-brand-dark text-sm">Official Warranty</p>
              <p className="text-xs text-text-muted">6 months guarantee on color & fabric.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
