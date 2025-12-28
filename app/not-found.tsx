import Link from "next/link";
import { FiHome, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%,#ffffff),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%,#ffffff)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]"></div>

      <div className="relative z-10 max-w-lg">
        <h1 className="font-serif text-[120px] md:text-[180px] leading-none font-bold text-white/5 select-none">
          404
        </h1>

        <div className="-mt-12 md:-mt-20">
          <p className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
            Page Not Found
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Lost in Comfort?
          </h2>
          <p className="text-slate-400 text-lg mb-8 bangla">
            দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যাচ্ছে না। <br/>
            <span className="text-sm font-sans opacity-70">(Sorry, the page you are looking for does not exist.)</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full md:w-auto px-8 py-3 bg-brand-accent text-white font-bold rounded shadow-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiHome /> Return Home
            </Link>
            <Link
              href="/shop/men"
              className="w-full md:w-auto px-8 py-3 bg-white/10 text-white border border-white/20 font-bold rounded hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <FiSearch /> Browse Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
