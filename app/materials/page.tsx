"use client";

import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiMinimize2 } from "react-icons/fi";

export default function MaterialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-brand-dark text-white py-24 px-4 text-center relative overflow-hidden">
        {/* Background Image: Abstract Science/Fiber */}
        <div className="absolute inset-0 z-0">
           <Image
             src="https://images.unsplash.com/photo-1673718697732-e02e82fe443c?auto=format&fit=crop&w=2000&q=80"
             alt="Abstract fabric technology background"
             fill
             className="object-cover opacity-30"
             priority
           />
           <div className="absolute inset-0 bg-brand-dark/60"></div>
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto">
          <p className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-4">
            The Science of Comfort
          </p>
          <h1 className="font-serif text-4xl md:text-6xl mb-6">
            Fabric Technology
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
            We don't just pick fabrics. We engineer comfort. Discover the premium blends that make Innerware distinctively soft.
          </p>
        </div>
      </section>

      {/* Fabric 1: Micro Modal */}
      <section className="py-24 max-w-[1300px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative w-full h-[400px] md:h-[500px] bg-slate-100 rounded overflow-hidden group shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1615799998603-7c6270a45196?auto=format&fit=crop&w=1200&q=80"
                  alt="Micro-Modal soft white fabric texture"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-125 origin-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-brand-dark text-xs font-bold flex items-center gap-2 shadow-sm">
                   <FiMinimize2 /> Hover to Magnify Texture
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6">Micro-Modal Air</h2>
            <div className="h-1 w-20 bg-brand-accent mb-6"></div>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Sourced from sustainable Austrian beechwood, our Micro-Modal is 3x softer than cotton. It breathes with your skin, managing moisture specifically for Dhaka's humidity.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                 <span className="font-bold text-brand-dark">Antibacterial Properties</span>
              </li>
              <li className="flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                 <span className="font-bold text-brand-dark">Feather-light Feel</span>
              </li>
               <li className="flex items-center gap-4">
                 <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                 <span className="font-bold text-brand-dark">Shrink Resistant</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fabric 2: Combed Cotton */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-[1300px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-6">Combed Cotton</h2>
                <div className="h-1 w-20 bg-brand-dark mb-6"></div>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Not your average cotton. We comb out short fibers to leave only the longest, strongest strands. The result is a smoother surface that doesn't pill, even after 50 washes.
                </p>
                 <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                     <span className="w-2 h-2 rounded-full bg-brand-dark"></span>
                     <span className="font-bold text-brand-dark">High Durability</span>
                  </li>
                  <li className="flex items-center gap-4">
                     <span className="w-2 h-2 rounded-full bg-brand-dark"></span>
                     <span className="font-bold text-brand-dark">Perfect Stretch</span>
                  </li>
                </ul>
              </div>
              <div>
                 <div className="relative w-full h-[400px] md:h-[500px] bg-slate-200 rounded overflow-hidden group shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1612538498613-35c5c8d675c4?auto=format&fit=crop&w=1200&q=80"
                      alt="Combed cotton weave texture"
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-125 origin-center"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                 </div>
              </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
