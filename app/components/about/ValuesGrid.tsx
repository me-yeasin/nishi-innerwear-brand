import { FiShield, FiHeart, FiGlobe } from "react-icons/fi";

export default function ValuesGrid() {
  const values = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Integrity",
      desc: "No hidden costs. No fake fabrics. What you see is what you get."
    },
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Modesty",
      desc: "Designs that respect our culture while embracing modern comfort."
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Quality",
      desc: "Export-standard manufacturing, available locally for you."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark text-white">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Our Core Values</h2>
          <div className="h-[1px] w-24 bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, idx) => (
            <div key={idx} className="text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto rounded-full border border-white/20 flex items-center justify-center text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 group-hover:scale-110">
                {value.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
