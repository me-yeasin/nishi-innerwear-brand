export default function AboutHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D97706_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="block text-brand-accent text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-6 animate-fade-in-up">
          Our Philosophy
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] tracking-tight">
          Unseen <br/> <span className="italic text-brand-accent">Comfort.</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We believe that true confidence starts with the layer closest to you.
          It's not just about fabric; it's about a feeling.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </div>
    </section>
  );
}
