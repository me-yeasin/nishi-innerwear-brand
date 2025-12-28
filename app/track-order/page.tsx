"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiSearch, FiPackage, FiTruck, FiCheckCircle } from "react-icons/fi";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "found" | "error">("idle");

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API
    setTimeout(() => {
      if (orderId.length > 3) {
        setStatus("found");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-bg-light">
      <Header />

      <div className="max-w-[800px] mx-auto px-4 py-16 md:py-24">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
            Guest Services
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4">
            Track Your Order
          </h1>
          <p className="text-text-muted">
            Enter your Order ID and Phone Number to see real-time status.
          </p>
        </div>

        {/* Tracker Form */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-sm border border-gray-100 mb-12">
          <form onSubmit={handleTrack} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Order ID (e.g. ORD-9999)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded focus:border-brand-accent outline-none font-mono uppercase"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded focus:border-brand-accent outline-none"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-brand-dark text-white font-bold uppercase tracking-wider rounded hover:bg-brand-accent transition-colors disabled:opacity-70"
            >
              {status === "loading" ? "Searching..." : "Track Now"}
            </button>
          </form>

          {/* Error Message */}
          {status === "error" && (
            <div className="mt-4 p-4 bg-red-50 text-red-600 text-sm rounded text-center">
              Order not found. Please check your details and try again.
            </div>
          )}
        </div>

        {/* Result Demo */}
        {status === "found" && (
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-brand-dark p-4 text-white flex justify-between items-center">
                <span className="font-mono font-bold">{orderId}</span>
                <span className="bg-brand-accent text-xs font-bold px-2 py-1 rounded">ON THE WAY</span>
              </div>
              <div className="p-8">
                <div className="relative border-l-2 border-gray-100 pl-8 space-y-8">
                  {/* Timeline Items */}
                  <div className="relative">
                    <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
                    <h4 className="font-bold text-brand-dark">Order Confirmed</h4>
                    <p className="text-xs text-text-muted">Oct 24, 10:00 AM</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
                    <h4 className="font-bold text-brand-dark">Verification Call Completed</h4>
                    <p className="text-xs text-text-muted">Oct 24, 02:30 PM</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[39px] w-5 h-5 rounded-full bg-brand-accent border-4 border-white shadow-sm animate-pulse"></div>
                    <h4 className="font-bold text-brand-dark">Out for Delivery</h4>
                    <p className="text-xs text-text-muted">Today, 09:00 AM</p>
                    <p className="text-sm text-brand-dark mt-2 bg-amber-50 p-2 rounded border border-brand-accent/20">
                      Rider: 017-XXXX-XXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </main>
  );
}
