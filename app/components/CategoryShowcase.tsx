import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// Mock data for the categories
const categories = [
  {
    id: "men",
    title: "Men's Premium",
    subtitle: "Gentlemen's Choice",
    href: "/shop/men",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-2 md:row-span-2 bg-slate-800",
    theme: "dark"
  },
  {
    id: "women",
    title: "Women's Comfort",
    subtitle: "Elegance & Ease",
    href: "/shop/women",
    image: "https://images.unsplash.com/photo-1673115380140-d1941bcf21c7?auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-1 md:row-span-1 bg-amber-700",
    theme: "light"
  },
  {
    id: "kids",
    title: "Kids Series",
    subtitle: "Soft & Safe",
    href: "/shop/kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
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
            <span className="text-lg md:text-xl font-serif italic">Curated For You</span>
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
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col items-start justify-end h-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {cat.subtitle}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
                  {cat.title}
                </h3>

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
