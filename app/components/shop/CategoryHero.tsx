export default function CategoryHero({ category }: { category: string }) {
  const isMen = category === 'men';

  return (
    <section className={`relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden ${isMen ? 'bg-brand-dark' : 'bg-amber-900'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute inset-0 ${
          isMen
            ? 'bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-[length:30px_30px]'
            : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent bg-[length:20px_20px]'
        }`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <span className="block text-brand-accent text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          {isMen ? "The Gentleman's Standard" : "Elegance Redefined"}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl mb-4 capitalize">
          {category}'s Collection
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-md mx-auto">
          {isMen
            ? "Engineered for comfort, designed for confidence. Experience the premium touch."
            : "Softness that embraces you. Styles that define you."
          }
        </p>
      </div>
    </section>
  );
}
