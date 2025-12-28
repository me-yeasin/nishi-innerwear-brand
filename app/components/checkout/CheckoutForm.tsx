"use client";

import { useState } from "react";
import { FiSmartphone, FiMapPin, FiTruck, FiDollarSign } from "react-icons/fi";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function CheckoutForm() {
  const [city, setCity] = useState("dhaka");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
      <h2 className="font-serif text-2xl font-bold text-brand-dark mb-6">Checkout Details</h2>

      {/* Step 1: Contact */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm">1</div>
          <h3 className="font-bold text-lg text-brand-dark">Contact Info</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-11">
           <div className="space-y-1">
             <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Mobile Number <span className="text-red-500">*</span></label>
             <div className="relative">
               <FiSmartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
               <input
                 type="tel"
                 placeholder="017xxxxxxxx"
                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all font-sans"
               />
             </div>
             <p className="text-[10px] text-text-muted">We will call to confirm your order.</p>
           </div>

           <div className="space-y-1">
             <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Full Name</label>
             <input
               type="text"
               placeholder="Your Name"
               className="w-full px-4 py-3 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all font-sans"
             />
           </div>
        </div>
      </div>

      {/* Step 2: Delivery */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm">2</div>
          <h3 className="font-bold text-lg text-brand-dark">Delivery Address</h3>
        </div>

        <div className="pl-0 md:pl-11 space-y-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-1">
               <label className="text-xs font-bold text-text-muted uppercase tracking-wider">City / Zone</label>
               <div className="relative">
                 <select
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all appearance-none bg-white cursor-pointer"
                 >
                   <option value="dhaka">Dhaka City</option>
                   <option value="outside">Outside Dhaka</option>
                 </select>
                 <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                 </div>
               </div>
             </div>

             <div className="space-y-1">
               <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Area / Thana</label>
               <input
                 type="text"
                 placeholder="e.g. Dhanmondi, Gulshan"
                 className="w-full px-4 py-3 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all"
               />
             </div>
           </div>

           <div className="space-y-1">
             <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Full Address</label>
             <div className="relative">
               <FiMapPin className="absolute left-3 top-3 text-gray-400" />
               <textarea
                 rows={2}
                 placeholder="House #, Road #, Block #"
                 className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all resize-none"
               ></textarea>
             </div>
           </div>
        </div>
      </div>

      {/* Step 3: Payment */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm">3</div>
          <h3 className="font-bold text-lg text-brand-dark">Payment Method</h3>
        </div>

        <div className="pl-0 md:pl-11 space-y-3">

          {/* COD Option */}
          <label
            className={`cursor-pointer group flex items-center justify-between p-4 border rounded-lg transition-all duration-300 ${
              paymentMethod === 'cod'
                ? 'border-brand-accent bg-amber-50 shadow-md ring-1 ring-brand-accent'
                : 'border-gray-200 hover:border-brand-accent/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-brand-accent' : 'border-gray-300'}`}>
                {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-brand-accent"></div>}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-dark flex items-center gap-2">
                  <FiTruck /> Cash on Delivery
                </span>
                <span className="text-xs text-text-muted">Pay with cash upon receiving your order.</span>
              </div>
            </div>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
              className="hidden"
            />
            <span className="text-[10px] font-bold bg-brand-dark text-white px-2 py-1 rounded">MOST POPULAR</span>
          </label>

          {/* Digital Payment (Mobile Banking) */}
          <label
            className={`cursor-pointer group flex items-center justify-between p-4 border rounded-lg transition-all duration-300 ${
              paymentMethod === 'digital'
                ? 'border-brand-accent bg-amber-50 shadow-md ring-1 ring-brand-accent'
                : 'border-gray-200 hover:border-brand-accent/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'digital' ? 'border-brand-accent' : 'border-gray-300'}`}>
                {paymentMethod === 'digital' && <div className="w-2.5 h-2.5 rounded-full bg-brand-accent"></div>}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-brand-dark flex items-center gap-2">
                  <RiSecurePaymentLine /> bKash / Nagad / Cards
                </span>
                <span className="text-xs text-text-muted">Secure online payment gateway.</span>
              </div>
            </div>
            <input
              type="radio"
              name="payment"
              value="digital"
              checked={paymentMethod === 'digital'}
              onChange={() => setPaymentMethod('digital')}
              className="hidden"
            />
          </label>

        </div>
      </div>

      {/* Confirm Button */}
      <div className="mt-8 pl-0 md:pl-11">
        <button className="w-full bg-brand-accent text-white font-bold py-4 rounded shadow-lg hover:bg-amber-700 transition-colors flex flex-col items-center justify-center gap-1 cursor-pointer">
          <span className="text-lg uppercase tracking-widest">Confirm Order</span>
          <span className="text-xs opacity-90 font-normal">I agree to the Terms & Conditions</span>
        </button>
        <div className="text-center mt-4">
           <p className="text-xs text-text-muted">
             Need Help? Call us at <a href="tel:01700000000" className="text-brand-dark font-bold underline">017-0000-0000</a>
           </p>
        </div>
      </div>

    </div>
  );
}
