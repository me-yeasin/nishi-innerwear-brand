"use client";

import { useState } from "react";
import { FiCheck, FiInfo } from "react-icons/fi";
import { FaRuler } from "react-icons/fa";

const SIZE_CHART = {
  men: [
    { size: "S", waist: "28-30", hip: "34-36" },
    { size: "M", waist: "31-33", hip: "37-39" },
    { size: "L", waist: "34-36", hip: "40-42" },
    { size: "XL", waist: "37-39", hip: "43-45" },
    { size: "XXL", waist: "40-42", hip: "46-48" },
  ],
  women: [
    { size: "S", waist: "26-28", hip: "36-38" },
    { size: "M", waist: "29-31", hip: "39-41" },
    { size: "L", waist: "32-34", hip: "42-44" },
    { size: "XL", waist: "35-37", hip: "45-47" },
  ]
};

export default function SizeCalculator() {
  const [gender, setGender] = useState<"men" | "women">("men");
  const [waist, setWaist] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const calculateSize = () => {
    const w = parseInt(waist);
    if (isNaN(w)) return;

    let foundSize = "Free Size";
    const chart = SIZE_CHART[gender];

    // Simple range check
    for (const s of chart) {
      const [min, max] = s.waist.split("-").map(Number);
      if (w >= min && w <= max) {
        foundSize = s.size;
        break;
      }
      // Handle edge cases
      if (w < min && s.size === "S") foundSize = "XS (Contact Support)";
      if (w > max && s.size === "XXL") foundSize = "3XL (Contact Support)";
    }

    setResult(foundSize);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
      <div className="flex items-center gap-2 mb-6">
        <FaRuler className="text-brand-accent w-6 h-6" />
        <h3 className="font-serif text-2xl font-bold text-brand-dark">Fit Calculator</h3>
      </div>

      {/* Gender Switch */}
      <div className="flex bg-gray-100 p-1 rounded-md mb-6 w-full md:w-fit">
        <button
          onClick={() => { setGender("men"); setResult(null); }}
          className={`flex-1 md:w-32 py-2 text-sm font-bold rounded-sm transition-all ${
            gender === "men" ? "bg-white shadow-sm text-brand-dark" : "text-text-muted hover:text-brand-dark"
          }`}
        >
          Men
        </button>
        <button
          onClick={() => { setGender("women"); setResult(null); }}
          className={`flex-1 md:w-32 py-2 text-sm font-bold rounded-sm transition-all ${
            gender === "women" ? "bg-white shadow-sm text-brand-dark" : "text-text-muted hover:text-brand-dark"
          }`}
        >
          Women
        </button>
      </div>

      {/* Input */}
      <div className="mb-6">
        <label className="block text-xs font-bold text-text-muted uppercase tracking-wider mb-2">
          Your Waist Size (Inches)
        </label>
        <div className="flex gap-4">
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaist(e.target.value)}
            placeholder="e.g. 32"
            className="flex-1 border border-gray-200 rounded px-4 py-3 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none font-sans text-lg"
          />
          <button
            onClick={calculateSize}
            className="bg-brand-dark text-white px-6 py-3 font-bold uppercase tracking-wider rounded hover:bg-brand-accent transition-colors"
          >
            Find Size
          </button>
        </div>
        <p className="text-[10px] text-text-muted mt-2 flex items-center gap-1">
          <FiInfo /> Measure around the narrowest part of your waist.
        </p>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-amber-50 border border-brand-accent/20 rounded-lg p-6 animate-fade-in-up">
          <p className="text-center text-xs text-brand-dark/60 uppercase tracking-widest mb-1">Recommended Size</p>
          <div className="text-center">
             <span className="text-5xl font-serif font-bold text-brand-dark">{result}</span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-brand-accent font-bold">
            <FiCheck /> Perfect Fit Guaranteed
          </div>
        </div>
      )}
    </div>
  );
}
