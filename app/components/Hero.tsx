import { FiBox, FiShield, FiTruck, FiDollarSign } from "react-icons/fi";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      {/* Full Width Hero Layout */}
      <section className="relative min-h-[calc(100dvh-64px)] w-full overflow-hidden flex items-end md:items-center pb-32 md:pb-0">

        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
           <Image
            src="https://images.unsplash.com/photo-1622519407650-3df9883f76a5?auto=format&fit=crop&w=1920&q=80"
            alt="Man wearing premium black t-shirt"
            fill
            className="object-cover object-top md:object-center"
            priority
          />
           {/* Cinematic Overlay Gradient for Text Readability - Mobile Optimized */}
           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 md:via-brand-dark/60 to-transparent/10 z-10"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-20 w-full max-w-[1300px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="max-w-xl text-white animate-fade-in-up">

            <div className="text-brand-accent font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 md:mb-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Winter Collection 2025
            </div>

            <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl leading-[1.1] mb-4 md:mb-6 opacity-0 animate-slide-up-fade" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              Redefining <br/>
              <span className="italic font-light text-brand-accent">Comfort</span>
            </h1>

            <div className="text-sm md:text-xl text-slate-200 font-light border-l-2 border-brand-accent pl-4 md:pl-6 mb-8 md:mb-10 max-w-xs md:max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              Luxury comfort, your everyday companion. Engineered for the modern lifestyle.
            </div>

            <div className="opacity-0 animate-slide-up-fade" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
              <button className="group relative cursor-pointer bg-brand-accent text-white px-6 md:px-8 py-3 md:py-4 font-bold text-xs md:text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(217,119,6,0.4)] active:scale-95 border border-brand-accent">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Shop Now</span>
                <span className="absolute inset-0 bg-brand-dark transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Floating Trust Strip */}
      <div className="relative z-30 -mt-16 md:-mt-20 px-4 max-w-[1300px] mx-auto pb-12">
        <div className="bg-white rounded-sm shadow-2xl border-t border-gray-100 py-6 md:py-8 px-4 md:px-10 backdrop-blur-xl bg-white/95 supports-[backdrop-filter]:bg-white/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-12">

            {/* Trust Item 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 md:border-r border-gray-200 last:border-0">
              <span className="text-brand-dark bg-gray-50 p-2 md:p-3 rounded-full">
                <FiBox className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-xs md:text-sm uppercase tracking-wide">Premium Cotton</h4>
                <p className="text-[10px] md:text-xs text-text-muted mt-0.5 md:mt-1">100% Breathable</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 md:border-r border-gray-200 last:border-0">
              <span className="text-brand-dark bg-gray-50 p-2 md:p-3 rounded-full">
                <FiShield className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-xs md:text-sm uppercase tracking-wide">Authentic</h4>
                <p className="text-[10px] md:text-xs text-text-muted mt-0.5 md:mt-1">Brand Warranty</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 md:border-r border-gray-200 last:border-0">
              <span className="text-brand-dark bg-gray-50 p-2 md:p-3 rounded-full">
                <FiTruck className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-xs md:text-sm uppercase tracking-wide">Express Delivery</h4>
                <p className="text-[10px] md:text-xs text-text-muted mt-0.5 md:mt-1">All Bangladesh</p>
              </div>
            </div>

            {/* Trust Item 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 md:border-r border-gray-200 last:border-0">
              <span className="text-brand-dark bg-gray-50 p-2 md:p-3 rounded-full">
                <FiDollarSign className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-xs md:text-sm uppercase tracking-wide">Cash on Delivery</h4>
                <p className="text-[10px] md:text-xs text-text-muted mt-0.5 md:mt-1">Pay After Receiving</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
