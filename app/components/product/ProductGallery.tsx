export default function ProductGallery() {
  return (
    <div className="flex flex-col gap-1 w-full md:w-[60%]">
      {/*
        Using CSS Gradients to simulate High-Res Lifestyle Shots
        In production, these would be <Image> components
      */}

      {/* Image 1: Main Lifestyle */}
      <div className="h-[500px] md:h-[800px] w-full bg-slate-800 relative group overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b),linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%,#1e293b)] bg-[length:40px_40px] opacity-20"></div>
        <div className="absolute bottom-8 left-8 text-white/50 text-xs tracking-[0.3em] font-serif uppercase">
          Lifestyle Shot 01
        </div>
      </div>

      {/* Image 2: Fabric Macro */}
      <div className="h-[500px] md:h-[800px] w-full bg-slate-700 relative group overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:4px_4px]"></div>
        <div className="absolute bottom-8 left-8 text-white/50 text-xs tracking-[0.3em] font-serif uppercase">
          Macro Texture 02
        </div>
      </div>

      {/* Image 3: Model Pose */}
      <div className="h-[500px] md:h-[800px] w-full bg-slate-900 relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white/50 text-xs tracking-[0.3em] font-serif uppercase">
          Fit & Form 03
        </div>
      </div>
    </div>
  );
}
