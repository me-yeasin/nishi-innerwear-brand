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
            <button className="bg-brand-accent text-white px-6 py-3 md:px-8 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(217,119,6,0.3)] transition-all duration-300">
              Shop Now
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Premium Cotton</h4>
                <p className="text-xs md:text-sm text-text-muted">100% Breathable Fabric</p>
              </div>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-brand-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Authentic</h4>
                <p className="text-xs md:text-sm text-text-muted">Official Brand Warranty</p>
              </div>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-brand-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.75" />
                </svg>
              </span>
              <div>
                <h4 className="font-bold text-brand-dark text-sm md:text-base">Express Delivery</h4>
                <p className="text-xs md:text-sm text-text-muted">All Over Bangladesh</p>
              </div>
            </div>

            {/* Trust Item 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:border-r border-gray-100 last:border-0">
              <span className="text-brand-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 5.25h-.75m0 9c.341-.02.68-.043 1.022-.068m2.973 2.62a29.638 29.638 0 0 1-2.943.96m0-9c.145.018.29.035.436.052m0 0c5.161.592 10.328.702 15.5.332.348-.025.683-.075 1.008-.149.728-.166 1.175-.815 1.05-1.517l-.318-1.745c-.104-.572-.656-.995-1.235-.978-2.321.066-4.66.027-6.992-.115-2.256-.138-4.524-.4-6.793-.769.308-.239.566-.546.746-.893 1.76-3.393 7.319-3.792 7.732-3.822.404-.03.856-.05 1.344-.061M3.75 4.5c.236 0 .463.078.651.226a3.298 3.298 0 0 1 .649.955c.18.416.27.872.27 1.342 0 .47-.09.926-.27 1.342a3.305 3.305 0 0 1-.649.955 1.95 1.95 0 0 1-.651.226m12.75 12.75v-.825c0-.687.487-1.272 1.173-1.328a88.887 88.887 0 0 0 4.198-.443" />
                </svg>
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
