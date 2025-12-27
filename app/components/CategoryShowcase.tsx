import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// Mock data for the categories
const categories = [
  {
    id: "men",
    title: "Men's Premium",
    subtitle: "Gentlemen's Choice",
    bangla: "পুরুষদের কালেকশন",
    href: "/men",
    // In a real app, use actual image paths. Using CSS gradients/patterns for now as per design system.
    className: "md:col-span-2 md:row-span-2 bg-slate-800",
    theme: "dark"
  },
  {
    id: "women",
    title: "Women's Comfort",
    subtitle: "Elegance & Ease",
    bangla: "মহিলাদের কালেকশন",
    href: "/women",
    className: "md:col-span-1 md:row-span-1 bg-amber-700",
    theme: "light"
  },
  {
    id: "kids",
    title: "Kids Series",
    subtitle: "Soft & Safe",
    bangla: "শিশুদের পোশাক",
    href: "/kids",
    className: "md:col-span-1 md:row-span-1 bg-slate-600",
    theme: "dark"
  }
];

export default function CategoryShowcase() {
  return (
    <section className="py-16 md:py-24 px-4 bg-bg-light">
      <div className="max-w-[1300px] mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-3">
            Essential Collections
          </h2>
          <div className="flex items-center justify-center gap-2 text-text-muted">
            <span className="h-[1px] w-8 bg-brand-accent/50"></span>
            <span className="bangla text-lg md:text-xl">আপনার পছন্দের স্টাইল বেছে নিন</span>
            <span className="h-[1px] w-8 bg-brand-accent/50"></span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-widest text-brand-accent opacity-80">
            (Choose Your Preferred Style)
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[600px]">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`group relative overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-[400px] md:h-auto ${cat.className}`}
            >
              {/* Background Pattern (Placeholder for Image) */}
              <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-110 opacity-80
                ${cat.theme === 'dark'
                  ? 'bg-[linear-gradient(45deg,#1e293b_25%,#334155_25%,#334155_50%,#1e293b_50%,#1e293b_75%,#334155_75%,#334155)] bg-[length:40px_40px]'
                  : 'bg-[linear-gradient(45deg,#d97706_25%,#b45309_25%,#b45309_50%,#d97706_50%,#d97706_75%,#b45309_75%,#b45309)] bg-[length:40px_40px]'}
              `}></div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col items-start justify-end h-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-1">
                  {cat.title}
                </h3>
                <p className="bangla text-gray-300 text-lg md:text-xl mb-6">
                  {cat.bangla}
                </p>

                {/* Button-like Link */}
                <div className="inline-flex items-center gap-2 text-white font-bold text-sm border-b-2 border-brand-accent pb-1 group-hover:text-brand-accent transition-colors">
                  View Collection <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
