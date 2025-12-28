"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FiCheckCircle, FiPhoneIncoming, FiBox, FiLock, FiMessageCircle } from "react-icons/fi";
import { useEffect, useState, Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id") || "ORD-7382";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 relative">

        {/* Confetti / Top Decoration */}
        <div className="h-2 bg-gradient-to-r from-brand-dark via-brand-accent to-brand-dark"></div>

        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiCheckCircle className="w-10 h-10 text-green-500 animate-bounce" />
          </div>

          <h1 className="font-serif text-3xl font-bold text-brand-dark mb-2">Order Placed!</h1>
          <p className="text-text-muted text-sm mb-6">Thank you for choosing InnerWare.</p>

          {/* Ticket / Order ID */}
          <div className="bg-amber-50 border border-brand-accent/20 rounded-lg p-4 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 rounded-bl">
              RESERVED
            </div>
            <p className="text-xs text-brand-dark/60 uppercase tracking-widest mb-1">Order ID</p>
            <p className="text-2xl font-mono font-bold text-brand-dark tracking-wider">{orderId}</p>
          </div>

          {/* The "Next Steps" Timeline */}
          <div className="text-left space-y-6 mb-8 relative">
            <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-gray-100"></div>

            {/* Step 1: Verification (Active) */}
            <div className="relative flex gap-4">
              <div className="relative z-10 w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-lg shadow-brand-accent/30">
                <FiPhoneIncoming className="w-4 h-4 animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-brand-dark text-sm">Verification Call</h3>
                <p className="text-xs text-text-muted mt-1">
                  Our manager will call you from <span className="font-bold text-brand-dark">017-XXXX-XXXX</span> to confirm details.
                </p>
                <div className="mt-2 inline-block bg-brand-accent/10 text-brand-accent text-[10px] font-bold px-2 py-1 rounded animate-pulse">
                  Please pick up!
                </div>
              </div>
            </div>

            {/* Step 2: Dispatch */}
            <div className="relative flex gap-4 opacity-60">
              <div className="relative z-10 w-8 h-8 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center">
                <FiBox className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-500 text-sm">Discreet Packing</h3>
                <p className="text-xs text-gray-400 mt-1">Packed in unmarked box.</p>
              </div>
            </div>
          </div>

          {/* Locked Reward */}
          <div className="bg-gray-900 rounded-lg p-4 text-white mb-8 relative overflow-hidden group">
            <div className="flex items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="p-3 bg-white/10 rounded-full">
                <FiLock className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm">Unlock 10% Discount</p>
                <p className="text-[10px] text-gray-400">Receive this delivery to unlock code.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white font-bold py-3 rounded shadow-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
            >
              <FiMessageCircle className="w-5 h-5" /> Track on WhatsApp
            </a>

            <Link
              href="/"
              className="block w-full text-brand-dark font-bold text-sm hover:underline py-2"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
