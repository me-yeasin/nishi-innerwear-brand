"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TABS = [
  { id: "returns", label: "Returns & Exchange" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms of Service" }
];

export default function PoliciesPage() {
  const [activeTab, setActiveTab] = useState("returns");

  return (
    <main className="min-h-screen bg-bg-light">
      <Header />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1000px] mx-auto px-4 py-16 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4">Legal & Policies</h1>
          <p className="text-text-muted">Transparency is the core of our business.</p>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">

        {/* Sidebar Nav */}
        <div className="w-full md:w-64 flex-shrink-0 space-y-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-6 py-4 font-bold text-sm rounded transition-all ${
                activeTab === tab.id
                  ? "bg-brand-dark text-white shadow-md"
                  : "bg-white text-text-muted hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white p-8 md:p-12 rounded shadow-sm border border-gray-100 min-h-[500px]">

          {activeTab === "returns" && (
            <div className="prose max-w-none animate-fade-in-up text-text-muted">
              <h2 className="font-serif text-2xl text-brand-dark mb-6">Return & Exchange Policy</h2>
              <p className="mb-4">
                At InnerWare, we are committed to ensuring your satisfaction. However, due to the hygienic nature of innerwear products, strict policies apply.
              </p>

              <h3 className="font-bold text-brand-dark mt-6 mb-2">1. Open Box Delivery</h3>
              <p className="mb-4">
                We allow customers to check the product packaging and quality in front of the delivery man. However, <strong>trying on the product is strictly prohibited</strong> before payment.
              </p>

              <h3 className="font-bold text-brand-dark mt-6 mb-2">2. Exchange Eligibility</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Size mismatch (if the product is unworn/unwashed).</li>
                <li>Manufacturing defect (holes, stitching issues).</li>
                <li>Wrong product delivered.</li>
              </ul>

              <h3 className="font-bold text-brand-dark mt-6 mb-2">3. How to Exchange?</h3>
              <p className="mb-4">
                Please contact our Concierge at <strong>017-0000-0000</strong> within 7 days of delivery. We will arrange a pickup.
              </p>
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="prose max-w-none animate-fade-in-up text-text-muted">
              <h2 className="font-serif text-2xl text-brand-dark mb-6">Privacy Policy</h2>
              <p className="mb-4">
                Your privacy is paramount. We do not sell or share your personal data with third parties beyond logistic partners required for delivery.
              </p>

              <h3 className="font-bold text-brand-dark mt-6 mb-2">Data We Collect</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Name, Phone Number, and Delivery Address.</li>
                <li>Order History and Sizing Preferences (to improve recommendations).</li>
              </ul>

              <h3 className="font-bold text-brand-dark mt-6 mb-2">Discreet Shipping</h3>
              <p className="mb-4">
                All orders are shipped in plain, unmarked packaging to ensure complete privacy. The shipping label will only display "IW Logistics".
              </p>
            </div>
          )}

          {activeTab === "terms" && (
            <div className="prose max-w-none animate-fade-in-up text-text-muted">
              <h2 className="font-serif text-2xl text-brand-dark mb-6">Terms of Service</h2>
              <p className="mb-4">
                By using this website, you agree to the following terms and conditions.
              </p>

              <h3 className="font-bold text-brand-dark mt-6 mb-2">Pricing & Payments</h3>
              <p className="mb-4">
                All prices are in Bangladeshi Taka (BDT) and include VAT. We reserve the right to change prices without prior notice.
              </p>

              <h3 className="font-bold text-brand-dark mt-6 mb-2">Delivery Timeline</h3>
              <p className="mb-4">
                <strong>Dhaka City:</strong> 24-48 Hours.<br/>
                <strong>Outside Dhaka:</strong> 3-5 Business Days.
              </p>
            </div>
          )}

        </div>

      </div>
      <Footer />
    </main>
  );
}
