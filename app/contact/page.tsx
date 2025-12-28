import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-brand-dark text-white py-16 md:py-24 text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl mb-4">Contact Concierge</h1>
        <p className="text-slate-300 max-w-xl mx-auto">
          We are real people behind the premium brand. Visit our HQ or reach out anytime.
        </p>
      </section>

      <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-brand-dark mb-6">Headquarters</h2>
            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-accent">
                  <FiMapPin />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Visit Us</h3>
                  <p className="text-text-muted text-sm">
                    Level 4, House 12, Sonargaon Janapath<br/>
                    Uttara Sector 11, Dhaka-1230
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-accent">
                  <FiPhone />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Call Us</h3>
                  <p className="text-text-muted text-sm">
                    017-0000-0000<br/>
                    <span className="text-xs">(10:00 AM - 10:00 PM)</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-accent">
                  <FiMail />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">Email Us</h3>
                  <p className="text-text-muted text-sm">
                    support@innerware.bd<br/>
                    wholesale@innerware.bd
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 h-64 rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 flex items-center justify-center text-text-muted font-bold tracking-widest uppercase">
              Google Maps Embed
            </div>
            {/*
               In real production, use:
               <iframe src="https://www.google.com/maps/embed?..." ... />
            */}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
          <h2 className="font-serif text-2xl text-brand-dark mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:border-brand-accent outline-none" />
              <input type="text" placeholder="Phone" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:border-brand-accent outline-none" />
            </div>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:border-brand-accent outline-none" />
            <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:border-brand-accent outline-none text-text-muted">
              <option>Order Inquiry</option>
              <option>Product Question</option>
              <option>Exchange / Return</option>
              <option>Other</option>
            </select>
            <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 bg-white border border-gray-200 rounded focus:border-brand-accent outline-none resize-none"></textarea>

            <button className="w-full bg-brand-dark text-white font-bold py-4 uppercase tracking-widest rounded hover:bg-brand-accent transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>

      <Footer />
    </main>
  );
}
