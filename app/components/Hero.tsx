import { FiBox, FiShield, FiTruck, FiDollarSign } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="relative">
      {/* Split Hero Layout */}
      <section className="relative min-h-[calc(100dvh-64px)] md:min-h-[85vh] bg-brand-dark flex flex-col md:grid md:grid-cols-2 overflow-hidden">

        {/* Left Side: Content */}
        <div className="flex flex-col justify-center px-6 py-8 md:p-16 md:pb-48 lg:p-24 lg:pb-56 z-10 text-white order-2 md:order-1 flex-1">
          <div className="text-brand-accent font-bold tracking-[0.15em] text-xs md:text-base uppercase mb-2 md:mb-4 animate-fade-in-up">
            Winter Collection 2025
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-4 md:mb-6">
            Redefining <br/>
            <span className="italic">Comfort & Class</span>
          </h1>

          <div className="bangla text-lg md:text-2xl text-slate-300 font-light border-l-4 border-brand-accent pl-4 mb-6 md:mb-10">
            বিলাসবহুল আরাম, যা আপনার প্রতিদিনের সঙ্গী। <br/>
            <span className="text-sm md:text-lg opacity-70 font-sans">(Luxury comfort, your everyday companion)</span>
          </div>

          <div>
            <button className="group relative cursor-pointer bg-brand-accent text-white px-6 py-3 md:px-8 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(30,41,59,0.3)]">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Shop Now</span>
              <span className="absolute inset-0 bg-brand-dark transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
            </button>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="relative bg-slate-800 h-[35vh] min-h-[250px] md:h-full w-full order-1 md:order-2 overflow-hidden group">
          {/*
            In a real scenario, use Next.js <Image /> here.
            Using a CSS pattern for the placeholder to match the mockup's "Fusion" feel.
          */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b),linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] opacity-20"></div>

          <div className="absolute bottom-8 right-8 md:bottom-32 bg-white p-4 text-black shadow-lg">
            <p className="font-bold text-sm">📷 Lifestyle Shot</p>
            <p className="text-xs text-gray-500">Models wearing premium collection</p>
          </div>
        </div>
      </section>

      {/* Floating Trust Strip */}
      <div className="relative z-20 mt-8 md:-mt-20 px-4 max-w-[1300px] mx-auto pb-12">
        <div className="bg-white rounded shadow-sm border border-gray-100 py-8 px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

            {/* Trust Item 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-brand-dark">
                <FiBox className="w-8 h-8" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Premium Cotton</h4>
                <p className="text-xs md:text-sm text-text-muted">100% Breathable Fabric</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-brand-dark">
                <FiShield className="w-8 h-8" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Authentic</h4>
                <p className="text-xs md:text-sm text-text-muted">Official Brand Warranty</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-brand-dark">
                <FiTruck className="w-8 h-8" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Express Delivery</h4>
                <p className="text-xs md:text-sm text-text-muted">All Over Bangladesh</p>
              </div>
            </div>

            {/* Trust Item 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-brand-dark">
                <FiDollarSign className="w-8 h-8" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Cash on Delivery</h4>
                <p className="text-xs md:text-sm text-text-muted">Pay After Receiving</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
