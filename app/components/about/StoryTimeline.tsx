"use client";

import { useEffect, useRef, useState } from "react";

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
      year: "01"
    },
    {
      title: "The Craft",
      desc: "Knitted by artisans with 20+ years of experience.",
      year: "02"
    },
    {
      title: "The Test",
      desc: "Washed, stretched, and tested for Dhaka's humidity.",
      year: "03"
    },
    {
      title: "The Promise",
      desc: "Delivered to your door with a guarantee of satisfaction.",
      year: "04"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative">

        {/* The Thread Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 transform md:-translate-x-1/2">
          <div
            className="w-full bg-brand-accent transition-all duration-100 ease-linear"
            style={{ height: `${progress}%` }}
          ></div>
        </div>

        <div className="space-y-24 md:space-y-48 relative z-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 w-full md:text-right">
                {idx % 2 === 0 && (
                  <div className="hidden md:block p-8 bg-gray-50 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-6xl font-serif text-brand-dark/10 font-bold">{step.year}</span>
                  </div>
                )}
                {idx % 2 !== 0 && (
                  <div className="text-left md:text-right">
                    <h3 className="font-serif text-3xl text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-text-muted">{step.desc}</p>
                  </div>
                )}
              </div>

              {/* Center Node */}
              <div className="relative flex-shrink-0">
                <div className={`w-4 h-4 rounded-full border-2 border-brand-accent bg-white transition-all duration-500 ${
                  progress > ((idx + 1) * 20) ? 'scale-150 bg-brand-accent' : ''
                }`}></div>
              </div>

              <div className="flex-1 w-full">
                {idx % 2 !== 0 && (
                  <div className="hidden md:block p-8 bg-gray-50 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-6xl font-serif text-brand-dark/10 font-bold">{step.year}</span>
                  </div>
                )}
                {idx % 2 === 0 && (
                  <div className="text-left">
                    <h3 className="font-serif text-3xl text-brand-dark mb-2">{step.title}</h3>
                    <p className="text-text-muted">{step.desc}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
