"use client";

import { useState } from "react";
import { FiShoppingBag, FiTruck, FiRefreshCw, FiShield } from "react-icons/fi";
import { FaRuler } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function ProductInfo() {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("navy");

  const handleAddToCart = () => {
    addToCart({
      id: "prod-1",
      name: "Midnight Blue Comfort Brief",
      price: 450,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className="w-full md:w-[40%] md:h-screen md:sticky md:top-0 p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-white border-l border-gray-50">

      {/* Brand & Title */}
      <div className="mb-6">
        <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-2 block">
          Premium Essentials
        </span>
        <h1 className="font-serif text-3xl md:text-5xl text-brand-dark mb-2 leading-tight">
          Midnight Blue <br/> Comfort Brief
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-dark">৳ 450</span>
          <span className="text-sm text-text-muted line-through">৳ 600</span>
          <span className="bg-brand-accent/10 text-brand-accent text-[10px] font-bold px-2 py-1 rounded ml-2">
            SAVE 25%
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="bangla text-text-muted text-lg mb-8 border-l-2 border-brand-accent/30 pl-4">
        ঢাকার আবহাওয়ার জন্য ১০০% আরামদায়ক। দিনভর ফ্রেশনেস এবং পারফেক্ট ফিটিং।
      </p>

      {/* Selectors */}
      <div className="space-y-6 mb-8">
        {/* Colors (Floating Swatches) */}
        <div>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3 block">
            Select Color: {selectedColor}
          </span>
          <div className="flex gap-4">
            {['navy', 'black', 'grey'].map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full border-2 transition-all duration-300 relative ${
                  selectedColor === color ? 'border-brand-accent scale-110' : 'border-transparent hover:scale-105'
                }`}
                style={{ backgroundColor: color === 'navy' ? '#1e293b' : color === 'black' ? '#000' : '#64748b' }}
              >
                {selectedColor === color && (
                  <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Select Size
            </span>
            <button className="flex items-center gap-1 text-xs text-brand-accent font-bold hover:underline cursor-pointer">
              <FaRuler /> আমার সাইজ কত? (Size Guide)
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {['M', 'L', 'XL', 'XXL'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-3 text-sm font-bold border rounded-sm transition-all cursor-pointer ${
                  selectedSize === size
                    ? 'bg-brand-dark text-white border-brand-dark'
                    : 'bg-white text-text-muted border-gray-200 hover:border-brand-dark'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-4 mb-8">
        <button
          onClick={handleAddToCart}
          className="w-full bg-brand-dark text-white py-4 font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 hover:bg-brand-accent transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-brand-accent/20"
        >
          <FiShoppingBag className="w-5 h-5" /> Add to Bag
        </button>
        <p className="text-center text-xs text-text-muted">
          Cash on Delivery Available • 7 Day Exchange
        </p>
      </div>

      {/* Trust Signals */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-accent/5 rounded-full text-brand-accent">
            <FiTruck className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-xs text-brand-dark">Fast Delivery</p>
            <p className="text-[10px] text-text-muted">24-48 Hours (Dhaka)</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-accent/5 rounded-full text-brand-accent">
            <FiRefreshCw className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-xs text-brand-dark">Easy Exchange</p>
            <p className="text-[10px] text-text-muted">Within 7 Days</p>
          </div>
        </div>
      </div>

    </div>
  );
}
