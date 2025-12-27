import Link from "next/link";
import { FiFacebook, FiInstagram, FiYoutube, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1: Brand Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-serif text-2xl font-bold tracking-tighter text-white">
                INNERWARE
              </span>
              <span className="font-sans text-[0.6rem] tracking-[0.2em] text-brand-accent uppercase mt-1 group-hover:text-white transition-colors">
                Premium Essentials
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Redefining comfort for Bangladesh. Premium fabrics, perfect fit, and uncompromising quality for your everyday needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-all">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-all">
                <FiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:text-white transition-all">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-brand-accent transition-colors">Track Your Order</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-accent transition-colors">Exchange Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-accent transition-colors">Size Guide</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-accent transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <span>
                  Level 4, House 12, Sonargaon Janapath, Uttara, Dhaka-1230
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <a href="tel:01700000000" className="hover:text-white transition-colors">
                  017-0000-0000 (10 AM - 10 PM)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <a href="mailto:support@innerware.bd" className="hover:text-white transition-colors">
                  support@innerware.bd
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter/Trust */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe for exclusive offers and new arrivals.
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-accent w-full rounded-sm"
              />
              <button className="bg-brand-accent text-white px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors rounded-sm cursor-pointer">
                Join
              </button>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">We Accept</p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-pink-600">bKash</span>
                <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-orange-600">Nagad</span>
                <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-purple-600">Rocket</span>
                <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-blue-800">VISA</span>
                <span className="px-2 py-1 bg-white rounded text-[10px] font-bold text-gray-800">COD</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} InnerWare BD. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-brand-accent cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-brand-accent cursor-pointer transition-colors">Terms of Service</span>
          </div>
          <p className="font-mono text-[10px] opacity-70">
            Trade License: TRAD/DSCC/028491/2024
          </p>
        </div>
      </div>
    </footer>
  );
}
