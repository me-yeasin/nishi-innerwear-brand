"use client";

import { useState, useRef } from "react";
import { FiStar, FiCheck, FiUser, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

export default function CustomerReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      name: "Rahim Ahmed",
      role: "Corporate Professional",
      rating: 5,
      date: "2 days ago",
      text: "I was skeptical about ordering innerwear online in Bangladesh, but the quality blew me away. The cotton is genuinely breathable for Dhaka heat.",
      verified: true,
      initial: "R"
    },
    {
      id: 2,
      name: "Sadia Islam",
      role: "Gift for Husband",
      rating: 5,
      date: "1 week ago",
      text: "Ordered the 3-pack bundle for my husband. He says it's the most comfortable brand he's worn. The packaging was also very premium.",
      verified: true,
      initial: "S"
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      role: "Verified Buyer",
      rating: 4,
      date: "3 weeks ago",
      text: "Great color retention. I've washed them 5 times and the black is still deep black. Highly recommended for the price.",
      verified: true,
      initial: "T"
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      role: "Regular Customer",
      rating: 5,
      date: "1 month ago",
      text: "Delivery was super fast, got it the next day in Uttara. The material is very soft and doesn't shrink after washing.",
      verified: true,
      initial: "N"
    },
    {
      id: 5,
      name: "Karim Ullah",
      role: "Business Owner",
      rating: 5,
      date: "2 months ago",
      text: "The fit is perfect. Usually, XXL sizes in local brands are tight, but this one is true to size. Will buy again.",
      verified: true,
      initial: "K"
    },
    {
      id: 6,
      name: "Mehedi Hasan",
      role: "Student",
      rating: 4,
      date: "3 months ago",
      text: "Value for money. The combo pack is a steal. Wish there were more color options though.",
      verified: true,
      initial: "M"
    },
    {
      id: 7,
      name: "Fariha Akter",
      role: "Housewife",
      rating: 5,
      date: "4 months ago",
      text: "Bought for my son. He loves the fabric. It's very soft and comfortable for daily wear.",
      verified: true,
      initial: "F"
    },
    {
      id: 8,
      name: "Jamil Ahmed",
      role: "Freelancer",
      rating: 5,
      date: "5 months ago",
      text: "Premium packaging, premium product. Feels like an international brand. Highly recommended.",
      verified: true,
      initial: "J"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-bg-light relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">

        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4">
              Loved by Bangladesh
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="flex text-brand-accent">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-brand-dark">4.9/5</span>
              <span className="text-text-muted text-sm">(2,500+ Reviews)</span>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous reviews"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Next reviews"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Reviews Slider */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[85vw] md:min-w-[400px] snap-center bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group relative flex flex-col"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-gray-100 group-hover:text-brand-accent/10 transition-colors">
                <FaQuoteRight className="w-12 h-12" />
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark font-serif font-bold text-xl group-hover:bg-brand-dark group-hover:text-white transition-colors flex-shrink-0">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{review.name}</h4>
                  <p className="text-xs text-text-muted mb-1">{review.role}</p>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit">
                      <FiCheck className="w-3 h-3" /> Verified
                    </div>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="flex text-brand-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "opacity-30"}`} />
                ))}
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10 flex-1">
                <p className="text-brand-dark text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="h-[1px] w-10 bg-gray-100 group-hover:w-full group-hover:bg-brand-accent/30 transition-all duration-500"></div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-8 text-center border-t border-gray-200 pt-8">
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
            Trusted by 10,000+ Customers across Bangladesh
          </p>
          <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos for Trust */}
             <span className="font-bold text-xl text-slate-400">Pathao</span>
             <span className="font-bold text-xl text-slate-400">Steadfast</span>
             <span className="font-bold text-xl text-slate-400">RedX</span>
             <span className="font-bold text-xl text-slate-400">Bkash</span>
          </div>
        </div>

      </div>
    </section>
  );
}
