"use client";

import { FiShoppingBag, FiTag, FiStar, FiEye } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";

export default function SmartBundles() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const bundles = [
    {
      id: 1,
      title: "The Gentleman's Trio",
      subtitle: "3x Premium Cotton Briefs",
      price: "1,250",
      originalPrice: "1,500",
      save: "Save 17%",
      rating: 4.9,
      reviews: 128,
      tag: "Best Seller",
      image: "https://images.unsplash.com/photo-1594938328870-9623159c8c99?q=80&w=800",
      alt: "Folded premium men's clothing"
    },
    {
      id: 2,
      title: "Summer Breeze Kit",
      subtitle: "3x Breathable Vests",
      price: "950",
      originalPrice: "1,200",
      save: "Save 20%",
      rating: 4.8,
      reviews: 85,
      tag: "Summer Essential",
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800",
      alt: "White cotton fabric texture"
    },
    {
      id: 3,
      title: "Couple's Comfort Set",
      subtitle: "Matching Loungewear Pack",
      price: "2,500",
      originalPrice: "3,200",
      save: "Save 22%",
      rating: 5.0,
      reviews: 42,
      tag: "Trending",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800",
      alt: "Couple wearing comfortable loungewear"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full border border-brand-accent/30 text-brand-accent text-xs font-bold tracking-widest uppercase mb-4 bg-brand-accent/5 backdrop-blur-sm">
            Exclusive Offers
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
            Smart Saver Bundles
          </h2>
          <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Buy more, save more. Your daily premium essentials now in bundle offers.
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="group bg-white rounded-sm overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-pointer flex flex-col h-full"
              onMouseEnter={() => setHoveredId(bundle.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card Image Area */}
              <div className="h-80 relative overflow-hidden bg-gray-100">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-brand-accent text-white text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-md">
                    {bundle.tag}
                  </span>
                </div>

                {/* Save Tag */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-white/90 backdrop-blur text-brand-dark text-xs font-bold px-2 py-1 rounded shadow-sm">
                  <FiTag className="w-3 h-3 text-brand-accent" />
                  {bundle.save}
                </div>

                {/* Product Image */}
                <Image
                  src={bundle.image}
                  alt={bundle.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />

                {/* Overlay on Hover with Quick View */}
                <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center ${hoveredId === bundle.id ? 'opacity-100' : 'opacity-0'}`}>
                   <button className="bg-white text-brand-dark px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transform translate-y-4 hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 group/view">
                      <FiEye className="w-4 h-4 text-brand-accent" />
                      Quick View
                   </button>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-brand-accent">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={`w-3 h-3 ${i < Math.floor(bundle.rating) ? "fill-current" : "opacity-30"}`} />
                    ))}
                  </div>
                  <span className="text-xs text-text-muted font-semibold">({bundle.reviews})</span>
                </div>

                <h3 className="font-serif text-2xl text-brand-dark mb-1 group-hover:text-brand-accent transition-colors">
                  {bundle.title}
                </h3>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-6 pb-6 border-b border-gray-100 flex-1">
                  {bundle.subtitle}
                </p>

                {/* Price & Action */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-text-muted line-through mb-1">৳ {bundle.originalPrice}</p>
                    <p className="text-2xl font-bold text-brand-dark">৳ {bundle.price}</p>
                  </div>

                  <button className="group/btn relative w-12 h-12 bg-brand-dark rounded-full flex items-center justify-center text-white overflow-hidden shadow-lg hover:shadow-brand-accent/30 transition-shadow">
                     <span className="absolute inset-0 bg-brand-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                     <FiShoppingBag className="relative z-10 w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
