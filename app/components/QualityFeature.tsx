import { FiSun, FiDroplet, FiCheckCircle } from "react-icons/fi";

export default function QualityFeature() {
  const features = [
    {
      icon: <FiSun className="w-6 h-6 text-brand-accent" />,
      title: "100% Breathable Cotton",
      desc: "Perfect for Bangladesh's humid weather.",
      bangla: "১০০% আরামদায়ক কটন"
    },
    {
      icon: <FiDroplet className="w-6 h-6 text-brand-accent" />,
      title: "Color Lock Technology",
      desc: "Vibrant colors that don't fade after washing.",
      bangla: "রঙের গ্যারান্টি"
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-brand-accent" />,
      title: "Asian Fit Guarantee",
      desc: "Tailored specifically for the South Asian physique.",
      bangla: "পারফেক্ট ফিটিং"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side: Fabric Macro Shot (Visual) */}
          <div className="w-full h-[400px] md:h-[500px] relative group overflow-hidden rounded-sm shadow-2xl border border-gray-100">
            {/*
              Simulating a "Fabric Texture" using CSS gradients.
              In production, this would be a high-res macro shot of the fabric.
            */}
            <div className="absolute inset-0 bg-brand-dark">
              {/* Thread pattern */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:4px_4px]"></div>
              {/* Weave texture overlay */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,#000_25%,#000_50%,transparent_50%,transparent_75%,#000_75%,#000_100%)] bg-[length:8px_8px]"></div>
            </div>

            {/* Magnifying Glass Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded shadow-lg max-w-[200px]">
              <p className="text-xs font-bold text-brand-dark uppercase tracking-wider mb-1">Fabric Tech</p>
              <p className="text-[10px] text-text-muted">High-gauge combed cotton weave</p>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-10 pl-0 md:pl-8">
            <div>
              <span className="text-brand-accent font-serif tracking-[0.25em] text-sm uppercase mb-3 block">
                Quality Assurance
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-6 leading-[1.1]">
                Engineered for <br/>
                <span className="italic text-brand-accent">Ultimate Comfort</span>
              </h2>
              <p className="bangla text-xl md:text-2xl text-text-muted leading-relaxed opacity-90 max-w-xl">
                বিলাসবহুল আরাম, যা আপনার প্রতিদিনের সঙ্গী। আমাদের প্রতিটি সুতা বোনা হয়েছে আপনার স্বাচ্ছন্দ্যের কথা ভেবে।
              </p>
            </div>

            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-6 group cursor-pointer pl-6 border-l-2 border-gray-100 hover:border-brand-accent transition-all duration-500">
                  <div className="mt-1 text-brand-dark opacity-50 group-hover:opacity-100 group-hover:text-brand-accent transition-all duration-300 transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-brand-dark text-xl md:text-2xl mb-1 group-hover:text-brand-accent transition-colors">
                      {feature.title}
                    </h4>
                    <div className="bangla text-sm text-brand-accent mb-2 opacity-80">({feature.bangla})</div>
                    <p className="text-sm text-text-muted leading-relaxed max-w-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative px-10 py-4 bg-brand-dark text-white font-bold uppercase tracking-[0.15em] text-xs overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Discover Technology</span>
                <span className="absolute inset-0 bg-brand-accent transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
