"use client";

import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import Link from "next/link";
import { FiArrowLeft, FiLock } from "react-icons/fi";

export default function CheckoutPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-bg-light flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-serif text-brand-dark mb-4">Your cart is empty</h1>
        <Link
          href="/"
          className="text-brand-accent hover:underline flex items-center gap-2 font-bold"
        >
          <FiArrowLeft /> Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Checkout Header */}
      <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-30">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-serif text-xl md:text-2xl font-bold text-brand-dark tracking-tighter">
              INNERWARE
            </span>
            <span className="font-sans text-[0.5rem] tracking-[0.2em] text-brand-accent uppercase mt-1">
              Premium Essentials
            </span>
          </Link>

          <div className="flex items-center gap-2 text-brand-dark/60 text-xs md:text-sm font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
            <FiLock className="w-3 h-3 md:w-4 md:h-4" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-0 md:px-8 py-4 md:py-12">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12">

          {/* Left: Form */}
          <div className="flex-1 order-2 lg:order-1 bg-white md:bg-transparent p-0 md:p-0">
             <CheckoutForm />
          </div>

          {/* Right: Summary (Sticky) */}
          <div className="w-full lg:w-[420px] order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="sticky top-24">
              <OrderSummary />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
