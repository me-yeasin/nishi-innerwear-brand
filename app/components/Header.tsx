"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiSearch, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { openCart, items } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide if scrolling down AND past the top (e.g., 100px)
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        // Show if scrolling up
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-brand-dark text-white/90 text-xs py-2 border-b border-white/10 text-center sm:text-left">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <span className="flex items-center gap-2">
             🇧🇩 Bangladesh&apos;s Premium Innerwear Brand
          </span>
          <div className="flex items-center gap-2">
            <span>Need Help?</span>
            <a href="tel:01700000000" className="cursor-pointer text-brand-accent font-semibold hover:underline">
              017-0000-0000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="cursor-pointer group flex flex-col leading-none">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tighter">
              INNERWARE
            </span>
            <span className="font-sans text-[0.6rem] sm:text-xs tracking-[0.2em] text-brand-accent uppercase mt-1 group-hover:text-brand-dark transition-colors">
              Premium Essentials
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="cursor-pointer text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors relative group">
              New Arrivals
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="cursor-pointer text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors relative group">
              Men <span className="bangla text-xs font-normal opacity-80">(পুরুষ)</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="cursor-pointer text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors relative group">
              Women <span className="bangla text-xs font-normal opacity-80">(মহিলা)</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="cursor-pointer text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors relative group">
              Kids
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="cursor-pointer text-sm font-bold text-brand-accent hover:text-brand-dark transition-colors relative group">
              Sale
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="cursor-pointer text-brand-dark hover:text-brand-accent transition-colors" aria-label="Search">
              <FiSearch className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              className="cursor-pointer text-brand-dark hover:text-brand-accent transition-colors relative"
              aria-label="Cart"
              onClick={openCart}
            >
              <FiShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            </button>

            {/* Hamburger Menu (Mobile) */}
            <button
              className="cursor-pointer md:hidden text-brand-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="flex flex-col py-4 px-6 space-y-4">
               <Link href="#" className="cursor-pointer font-semibold text-brand-dark">New Arrivals</Link>
               <Link href="#" className="cursor-pointer font-semibold text-brand-dark">Men <span className="bangla text-xs text-gray-500">(পুরুষ)</span></Link>
               <Link href="#" className="cursor-pointer font-semibold text-brand-dark">Women <span className="bangla text-xs text-gray-500">(মহিলা)</span></Link>
               <Link href="#" className="cursor-pointer font-semibold text-brand-dark">Kids</Link>
               <Link href="#" className="cursor-pointer font-bold text-brand-accent">Sale</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
