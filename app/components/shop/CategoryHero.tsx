import Image from "next/image";

const categoryImages: Record<string, string> = {
  men: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1920&q=80",
  women: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80",
  kids: "https://images.unsplash.com/photo-1519238263496-63f82a0359d5?auto=format&fit=crop&w=1920&q=80"
};

export default function CategoryHero({ category }: { category: string }) {
  const isMen = category === 'men';
  // Fallback to men's image if category not found, or use a generic one.
  const imageUrl = categoryImages[category] || categoryImages['men'];

  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
            src={imageUrl}
            alt={`${category} collection banner`}
            fill
            className="object-cover"
            priority
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <span className="block text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          {isMen ? "The Gentleman's Standard" : "Elegance Redefined"}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl mb-4 capitalize animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {category}'s Collection
        </h1>
        <p className="text-white/90 text-sm md:text-base max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {isMen
            ? "Engineered for comfort, designed for confidence. Experience the premium touch."
            : "Softness that embraces you. Styles that define you."
          }
        </p>
      </div>
    </section>
  );
}
