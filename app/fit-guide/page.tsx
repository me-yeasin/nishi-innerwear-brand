import Header from "../components/Header";
import Footer from "../components/Footer";
import SizeCalculator from "../components/fit-guide/SizeCalculator";
import { FiCheckCircle, FiShield, FiRefreshCw } from "react-icons/fi";

export default function FitGuidePage() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Header />

      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center px-4 relative overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Virtual Tailor
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">
            Find Your <br/> <span className="italic text-brand-accent">Perfect Second Skin</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl bangla">
            আর কোনো দ্বিধা নয়। আমাদের স্মার্ট সাইজ গাইডের সাহায্যে বেছে নিন আপনার সঠিক মাপ।
            <br/><span className="text-sm opacity-70 font-sans">(No more hesitation. Find your exact fit with our smart guide.)</span>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1100px] mx-auto px-4 md:px-8 py-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Left: Calculator */}
          <SizeCalculator />

          {/* Right: The Promise */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col justify-center space-y-8">
             <div>
               <h3 className="font-serif text-2xl font-bold text-brand-dark mb-4">First Fit Guarantee</h3>
               <p className="text-text-muted">
                 We know buying innerwear online can be scary. What if it doesn&apos;t fit?
               </p>
             </div>

             <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                   <FiShield className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-brand-dark">Risk-Free First Trial</h4>
                   <p className="text-sm text-text-muted mt-1">
                     If your first purchase doesn&apos;t fit, we will exchange it for free. No questions asked.
                   </p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                   <FiRefreshCw className="w-5 h-5" />
                 </div>
                 <div>
                   <h4 className="font-bold text-brand-dark">Easy Exchange Process</h4>
                   <p className="text-sm text-text-muted mt-1">
                     Just WhatsApp us. Our rider will pick up the old one and deliver the new size.
                   </p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Brand Comparison (SEO / Trust content) */}
        <div className="mt-16 md:mt-24 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-brand-dark mb-8">Standard Size Chart</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-gray-200">
              <thead className="bg-gray-50 text-brand-dark uppercase text-xs font-bold">
                <tr>
                  <th className="px-6 py-4 border-b">Size</th>
                  <th className="px-6 py-4 border-b">Waist (Inches)</th>
                  <th className="px-6 py-4 border-b">Equivalent Brand X</th>
                </tr>
              </thead>
              <tbody className="bg-white text-text-muted">
                <tr>
                  <td className="px-6 py-4 border-b font-bold text-brand-dark">S</td>
                  <td className="px-6 py-4 border-b">28 - 30</td>
                  <td className="px-6 py-4 border-b">30</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-bold text-brand-dark">M</td>
                  <td className="px-6 py-4 border-b">31 - 33</td>
                  <td className="px-6 py-4 border-b">32</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-bold text-brand-dark">L</td>
                  <td className="px-6 py-4 border-b">34 - 36</td>
                  <td className="px-6 py-4 border-b">34</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-bold text-brand-dark">XL</td>
                  <td className="px-6 py-4 border-b">37 - 39</td>
                  <td className="px-6 py-4 border-b">36</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b font-bold text-brand-dark">XXL</td>
                  <td className="px-6 py-4 border-b">40 - 42</td>
                  <td className="px-6 py-4 border-b">38</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-muted mt-4">* Based on standard Bangladeshi sizing metrics.</p>
        </div>

      </section>

      <Footer />
    </main>
  );
}
