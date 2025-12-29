"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function StoryTimeline() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much of the section has been scrolled
      const scrolled = windowHeight - top;
      const total = height + windowHeight;
      const percent = Math.min(100, Math.max(0, (scrolled / total) * 100));

      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      title: "The Source",
      desc: "Hand-picked combed cotton from the finest fields.",
      year: "01",
      image: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=800",
      alt: "Cotton plant close up"
    },
    {
      title: "The Craft",
      desc: "Knitted by artisans with 20+ years of experience.",
      year: "02",
      image: "https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=800",
      alt: "Textile machinery"
    },
    {
      title: "The Test",
      desc: "Washed, stretched, and tested for Dhaka's humidity.",
      year: "03",
      image: "https://images.unsplash.com/photo-1550920400-0e54d5d9c24b?q=80&w=800",
      alt: "Fabric texture detail"
    },
    {
      title: "The Promise",
      desc: "Delivered to your door with a guarantee of satisfaction.",
      year: "04",
      image: "https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=800",
      alt: "Package delivery"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative">

        {/* The Thread Line */}
        {/* Mobile: Left aligned (left-8 = 32px center). Desktop: Centered. */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 transform -translate-x-1/2">
          <div
            className="w-full bg-brand-accent transition-all duration-100 ease-linear"
            style={{ height: `${progress}%` }}
          ></div>
        </div>

        <div className="space-y-16 md:space-y-48 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col md:flex-row md:items-center gap-4 md:gap-16 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/*
                Desktop: Left Side Content
                Mobile: Hidden (We render a dedicated mobile block to avoid confusion)
              */}
              <div className="hidden md:block flex-1 w-full md:text-right">
                {idx % 2 === 0 ? (
                  // Even Row, Left Side (Visual Right in row-reverse? No, row-reverse swaps visual.)
                  // Row-Reverse: [Item 3, Item 2, Item 1]
                  // DOM 1 (Here): Visual Right.
                  <div className="relative h-64 w-full overflow-hidden rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                    <span className="absolute bottom-4 right-4 text-6xl font-serif text-white/20 font-bold z-10">{step.year}</span>
                  </div>
                ) : (
                  // Odd Row, Left Side (Visual Left)
                  <div className="text-right">
                    <h3 className="font-serif text-3xl text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-text-muted">{step.desc}</p>
                  </div>
                )}
              </div>

              {/* Center Node */}
              {/* Mobile: Absolute Positioned to match the line at left-8 */}
              <div className="absolute left-8 md:static top-0 md:top-auto transform -translate-x-1/2 md:translate-x-0 z-20 flex-shrink-0">
                <div className={`w-4 h-4 rounded-full border-2 border-brand-accent bg-white transition-all duration-500 ${
                  progress > ((idx + 1) * 20) ? 'scale-150 bg-brand-accent' : ''
                }`}></div>
              </div>

              {/*
                Desktop: Right Side Content
                Mobile: Visible Content (We use this block for Mobile Text)
              */}
              <div className="flex-1 w-full pl-16 md:pl-0">
                {/* Mobile View: Always show Title & Desc here */}
                <div className="md:hidden text-left mb-2">
                   <h3 className="font-serif text-2xl text-brand-dark mb-1">{step.title}</h3>
                   <p className="text-sm text-text-muted mb-3">{step.desc}</p>
                   <span className="text-4xl font-serif text-brand-dark/5 font-bold">{step.year}</span>
                </div>

                {/* Desktop View */}
                <div className="hidden md:block">
                  {idx % 2 !== 0 ? (
                    // Odd Row, Right Side (Visual Right)
                    <div className="relative h-64 w-full overflow-hidden rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                      <span className="absolute bottom-4 right-4 text-6xl font-serif text-white/20 font-bold z-10">{step.year}</span>
                    </div>
                  ) : (
                    // Even Row, Right Side (Visual Left? No, Visual Left is the other one in row-reverse)
                    // Wait, row-reverse: [RightSideDOM, Center, LeftSideDOM]
                    // So this div is Visual Left.
                    <div className="text-left">
                      <h3 className="font-serif text-3xl text-brand-dark mb-2">{step.title}</h3>
                      <p className="text-text-muted">{step.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
