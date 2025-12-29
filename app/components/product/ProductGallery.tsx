import Image from "next/image";

export default function ProductGallery() {
  return (
    <div className="flex flex-col gap-1 w-full md:w-[60%]">
      {/* Image 1: Main Lifestyle */}
      <div className="h-[500px] md:h-[800px] w-full relative group overflow-hidden bg-slate-100">
        <Image
          src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200"
          alt="Man wearing white t-shirt lifestyle shot"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
          priority
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>
        <div className="absolute bottom-8 left-8 text-black/50 text-xs tracking-[0.3em] font-serif uppercase z-10">
          Lifestyle Shot 01
        </div>
      </div>

      {/* Image 2: Fabric Macro */}
      <div className="h-[500px] md:h-[800px] w-full relative group overflow-hidden bg-slate-100">
        <Image
          src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1200"
          alt="Fabric macro texture detail"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute bottom-8 left-8 text-black/50 text-xs tracking-[0.3em] font-serif uppercase z-10">
          Macro Texture 02
        </div>
      </div>

      {/* Image 3: Model Pose */}
      <div className="h-[500px] md:h-[800px] w-full relative group overflow-hidden bg-slate-100">
        <Image
          src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1200"
          alt="Model fit and form"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute bottom-8 left-8 text-white/50 text-xs tracking-[0.3em] font-serif uppercase z-10">
          Fit & Form 03
        </div>
      </div>
    </div>
  );
}
