import { FiStar, FiCheck, FiUser } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Rahim Ahmed",
      role: "Corporate Professional",
      rating: 5,
      date: "2 days ago",
      text: "I was skeptical about ordering innerwear online in Bangladesh, but the quality blew me away. The cotton is genuinely breathable for Dhaka heat.",
      bangla: "অনলাইনে ইনওয়ার অর্ডার করতে ভয় পাচ্ছিলাম, কিন্তু কোয়ালিটি দেখে আমি মুগ্ধ। ঢাকার গরমে পরার জন্য একদম পারফেক্ট।",
      verified: true,
      initial: "R"
    },
    {
      id: 2,
      name: "Sadia Islam",
      role: "Gift for Husband",
      rating: 5,
      date: "1 week ago",
      text: "Ordered the 3-pack bundle for my husband. He says it's the most comfortable brand he's worn. The packaging was also very premium.",
      bangla: "স্বামীর জন্য বান্ডেল প্যাক অর্ডার করেছিলাম। সে খুবই পছন্দ করেছে। প্যাকেজিংটাও খুব প্রিমিয়াম ছিল।",
      verified: true,
      initial: "S"
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      role: "Verified Buyer",
      rating: 4,
      date: "3 weeks ago",
      text: "Great color retention. I've washed them 5 times and the black is still deep black. Highly recommended for the price.",
      bangla: "কালার গ্যারান্টি সত্যি। ৫ বার ধোয়ার পরেও কালো রং নতুনের মতোই আছে। দাম অনুযায়ী সেরা।",
      verified: true,
      initial: "T"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-bg-light relative">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-4">
            Loved by Bangladesh
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex text-brand-accent">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-brand-dark">4.9/5</span>
            <span className="text-text-muted text-sm">(2,500+ Reviews)</span>
          </div>
          <p className="bangla text-gray-500 text-lg">আমাদের গ্রাহকদের বাস্তব অভিজ্ঞতা</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-gray-100 group-hover:text-brand-accent/10 transition-colors">
                <FaQuoteRight className="w-12 h-12" />
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark font-serif font-bold text-xl group-hover:bg-brand-dark group-hover:text-white transition-colors">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{review.name}</h4>
                  <p className="text-xs text-text-muted">{review.role}</p>
                </div>
                {review.verified && (
                  <div className="ml-auto flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <FiCheck className="w-3 h-3" /> Verified
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex text-brand-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "opacity-30"}`} />
                ))}
              </div>

              {/* Content */}
              <div className="space-y-4 relative z-10">
                <p className="text-brand-dark text-sm leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="h-[1px] w-10 bg-gray-100 group-hover:w-full group-hover:bg-brand-accent/30 transition-all duration-500"></div>
                <p className="bangla text-text-muted text-sm leading-relaxed opacity-90">
                  {review.bangla}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-16 text-center border-t border-gray-200 pt-8">
          <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
            Trusted by 10,000+ Customers across Bangladesh
          </p>
          <div className="flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Logos for Trust (Payment/Delivery Partners) - using text for now */}
             <span className="font-bold text-xl text-slate-400">Pathao</span>
             <span className="font-bold text-xl text-slate-400">Steadfast</span>
             <span className="font-bold text-xl text-slate-400">RedX</span>
             <span className="font-bold text-xl text-slate-400">Bkash</span>
          </div>
        </div>

      </div>
    </section>
  );
}
