"use client";

import Link from "next/link";
import { FiMail, FiLock, FiFacebook, FiChrome } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-bg-light">
      <Header />

      <div className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="bg-white p-8 md:p-12 rounded shadow-sm border border-gray-100 max-w-md w-full">

          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl text-brand-dark mb-2">Welcome Back</h1>
            <p className="text-text-muted text-sm">Sign in to access your account and orders</p>
          </div>

          <form className="space-y-4">
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
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-brand-dark uppercase tracking-wider">
                  Password
                </label>
                <Link href="#" className="text-xs text-brand-accent hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                />
              </div>
            </div>

            <button className="w-full bg-brand-dark text-white py-3 font-bold uppercase tracking-widest text-sm hover:bg-brand-accent transition-colors duration-300 cursor-pointer">
              Sign In
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <span className="h-px bg-gray-100 flex-grow"></span>
            <span className="text-xs text-text-muted">OR</span>
            <span className="h-px bg-gray-100 flex-grow"></span>
          </div>

          <div className="space-y-3">
            <button className="w-full border border-gray-200 py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer text-sm font-semibold text-brand-dark">
              <FcGoogle className="w-5 h-5" /> Continue with Google
            </button>
            <button className="w-full border border-gray-200 py-2.5 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer text-sm font-semibold text-[#1877F2]">
              <FiFacebook className="w-5 h-5 fill-current" /> Continue with Facebook
            </button>
          </div>

          <div className="mt-8 text-center pt-6 border-t border-gray-100">
            <p className="text-sm text-text-muted mb-4">Don't have an account?</p>
            <Link href="/register" className="text-brand-accent font-bold hover:underline cursor-pointer">
              Create Account
            </Link>
          </div>

           {/* Guest Option */}
           <div className="mt-4 text-center">
            <Link href="/" className="text-xs text-text-muted hover:text-brand-dark underline decoration-gray-300 underline-offset-4 cursor-pointer">
              Continue as Guest
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
