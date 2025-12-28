"use client";

import Link from "next/link";
import { FiMail, FiLock, FiUser, FiPhone } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bg-light">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="bg-white p-8 md:p-12 rounded shadow-sm border border-gray-100 max-w-md w-full">

          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl text-brand-dark mb-2">Create Account</h1>
            <p className="text-text-muted text-sm">Join Innerware for exclusive offers and faster checkout</p>
          </div>

          <form className="space-y-4">
             <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                />
              </div>
            </div>

             <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                Phone Number (Optional)
              </label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  placeholder="017..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 my-2">
               <input type="checkbox" id="terms" className="mt-1" />
               <label htmlFor="terms" className="text-xs text-text-muted leading-tight">
                  I agree to the <Link href="/policies" className="underline hover:text-brand-dark">Terms of Service</Link> and <Link href="/policies" className="underline hover:text-brand-dark">Privacy Policy</Link>.
               </label>
            </div>

            <button className="w-full bg-brand-dark text-white py-3 font-bold uppercase tracking-widest text-sm hover:bg-brand-accent transition-colors duration-300 cursor-pointer">
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-sm text-text-muted mb-4">Already have an account?</p>
            <Link href="/login" className="text-brand-accent font-bold hover:underline cursor-pointer">
              Sign In
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
