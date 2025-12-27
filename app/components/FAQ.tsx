"use client";

import { useState } from "react";
import { FiPlus, FiMinus, FiHelpCircle, FiPhone } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I check the product before paying?",
      answer: "Yes! We offer 'Open Box Delivery' all over Bangladesh. You can check the fabric quality and size before making the payment to the delivery man.",
      bangla: "হ্যাঁ! আমরা সারাদেশে 'ওপেন বক্স ডেলিভারি' দিচ্ছি। আপনি পেমেন্ট করার আগে কাপড়ের মান এবং সাইজ চেক করে নিতে পারবেন।"
    },
    {
      question: "What if the size doesn't fit?",
      answer: "No worries! We have a hassle-free 7-day exchange policy. Just let us know, and we will exchange the size from your doorstep.",
      bangla: "কোনো চিন্তা নেই! আমাদের ৭ দিনের সহজ এক্সচেঞ্জ পলিসি আছে। সাইজ না মিললে আমরা আপনার বাসা থেকেই এক্সচেঞ্জ করে দেব।"
    },
    {
      question: "How much is the delivery charge?",
      answer: "Inside Dhaka City: 60 BDT. Outside Dhaka: 100 BDT. Delivery usually takes 24-48 hours in Dhaka and 3-5 days elsewhere.",
      bangla: "ঢাকার ভিতরে ৬০ টাকা এবং ঢাকার বাইরে ১০০ টাকা। সাধারণত ঢাকায় ২৪-৪৮ ঘণ্টা এবং বাইরে ৩-৫ দিনের মধ্যে ডেলিভারি হয়।"
    },
    {
      question: "Is the color guaranteed?",
      answer: "Absolutely. We use 'Color Lock Technology' to ensure the fabric color stays vibrant even after multiple washes.",
      bangla: "অবশ্যই। আমাদের 'কালার লক টেকনোলজি' নিশ্চিত করে যে ধোয়ার পরেও রঙ নতুনের মতোই থাকবে।"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Left Side: Support Info */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <span className="text-brand-accent font-serif tracking-[0.2em] text-xs uppercase mb-2 block">
                Support
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">
                Have Questions?
              </h2>
              <p className="text-text-muted text-sm leading-relaxed">
                We know buying innerwear online can be confusing. Here are answers to the most common questions our customers ask.
              </p>
            </div>

            <div className="bg-bg-light p-6 rounded-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">Call Us (10AM - 10PM)</p>
                  <p className="font-bold text-brand-dark text-lg">017-0000-0000</p>
                </div>
              </div>
              <p className="text-xs text-text-muted mt-2">
                Or WhatsApp us for instant size consultation.
              </p>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="md:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-gray-100 rounded-sm overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-brand-accent/20' : 'hover:border-gray-200'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer bg-white text-left group"
                >
                  <span className={`font-serif text-lg transition-colors ${openIndex === index ? 'text-brand-accent' : 'text-brand-dark group-hover:text-brand-accent'}`}>
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-accent' : 'text-gray-400'}`}>
                    {openIndex === index ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 bg-white">
                    <p className="text-text-muted text-sm leading-relaxed mb-3">
                      {faq.answer}
                    </p>
                    <p className="bangla text-gray-500 text-sm opacity-90 border-l-2 border-brand-accent/30 pl-3">
                      {faq.bangla}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
