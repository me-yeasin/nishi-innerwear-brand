"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <a href="tel:01700000000" className="text-brand-accent font-semibold hover:underline">
              017-0000-0000
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark tracking-tighter">
              INNERWARE
            </span>
            <span className="font-sans text-[0.6rem] sm:text-xs tracking-[0.2em] text-brand-accent uppercase mt-1 group-hover:text-brand-dark transition-colors">
              Premium Essentials
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors relative group">
              New Arrivals
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Men <span className="bangla text-xs font-normal opacity-80">(পুরুষ)</span>
            </Link>
            <Link href="#" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Women <span className="bangla text-xs font-normal opacity-80">(মহিলা)</span>
            </Link>
            <Link href="#" className="text-sm font-semibold text-brand-dark hover:text-brand-accent transition-colors">
              Kids
            </Link>
            <Link href="#" className="text-sm font-bold text-brand-accent hover:text-brand-dark transition-colors">
              Sale
            </Link>
          </div>

          {/* Icons & Mobile Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="text-brand-dark hover:text-brand-accent transition-colors" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button className="text-brand-dark hover:text-brand-accent transition-colors relative" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 5.407c.49 2.1 0.238 2.31 0.457 1.993 1.263 5.407 1.263 5.407 1.263 5.407 1.263 5.407 1.263 5.407 1.263 5.407 1.263 5.407M7.5 10.5h9m-9 0H6.375c-.621 0-1.125.504-1.125 1.125v4.75c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125v-4.75c0-.621-.504-1.125-1.125-1.125H16.5" />
                {/* Simplified Cart Path */}
                 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>

            {/* Hamburger Menu (Mobile) */}
            <button
              className="md:hidden text-brand-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="flex flex-col py-4 px-6 space-y-4">
               <Link href="#" className="font-semibold text-brand-dark">New Arrivals</Link>
               <Link href="#" className="font-semibold text-brand-dark">Men <span className="bangla text-xs text-gray-500">(পুরুষ)</span></Link>
               <Link href="#" className="font-semibold text-brand-dark">Women <span className="bangla text-xs text-gray-500">(মহিলা)</span></Link>
               <Link href="#" className="font-semibold text-brand-dark">Kids</Link>
               <Link href="#" className="font-bold text-brand-accent">Sale</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
