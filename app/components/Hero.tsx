export default function Hero() {
  return (
    <div className="relative">
      {/* Split Hero Layout */}
      <section className="relative min-h-[85vh] bg-brand-dark flex flex-col md:grid md:grid-cols-2 overflow-hidden">

        {/* Left Side: Content */}
        <div className="flex flex-col justify-center px-6 py-12 md:p-16 lg:p-24 z-10 text-white order-2 md:order-1">
          <div className="text-brand-accent font-bold tracking-[0.15em] text-sm md:text-base uppercase mb-4 animate-fade-in-up">
            Winter Collection 2025
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6">
            Redefining <br/>
            <span className="italic">Comfort & Class</span>
          </h1>

          <div className="bangla text-xl md:text-2xl text-slate-300 font-light border-l-4 border-brand-accent pl-4 mb-10">
            বিলাসবহুল আরাম, যা আপনার প্রতিদিনের সঙ্গী। <br/>
            <span className="text-base md:text-lg opacity-70 font-sans">(Luxury comfort, your everyday companion)</span>
          </div>

          <div>
            <button className="bg-brand-accent text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(217,119,6,0.3)] transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="relative bg-slate-800 h-[400px] md:h-full w-full order-1 md:order-2 overflow-hidden group">
          {/*
            In a real scenario, use Next.js <Image /> here.
            Using a CSS pattern for the placeholder to match the mockup's "Fusion" feel.
          */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b),linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] opacity-20"></div>

          <div className="absolute bottom-8 right-8 bg-white p-4 text-black shadow-lg">
            <p className="font-bold text-sm">📷 Lifestyle Shot</p>
            <p className="text-xs text-gray-500">Models wearing premium collection</p>
          </div>
        </div>
      </section>

      {/* Floating Trust Strip */}
      <div className="relative z-20 -mt-16 md:-mt-20 px-4 max-w-[1300px] mx-auto pb-12">
        <div className="bg-white rounded shadow-sm border border-gray-100 py-8 px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

            {/* Trust Item 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-3xl text-brand-dark">💎</span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Premium Cotton</h4>
                <p className="text-xs md:text-sm text-text-muted">100% Breathable Fabric</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-3xl text-brand-dark">🛡️</span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Authentic</h4>
                <p className="text-xs md:text-sm text-text-muted">Official Brand Warranty</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-3xl text-brand-dark">🚚</span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Express Delivery</h4>
                <p className="text-xs md:text-sm text-text-muted">All Over Bangladesh</p>
              </div>
            </div>

            {/* Trust Item 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-3xl text-brand-dark">💵</span>
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
