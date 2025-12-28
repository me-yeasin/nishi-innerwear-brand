"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Mock Data for simulation (would come from API later)
const MOCK_PRODUCTS = [
  { id: "1", name: "Midnight Blue Comfort Brief", price: 450, category: "men", image: "bg-slate-800" },
  { id: "2", name: "Classic White Vest", price: 350, category: "men", image: "bg-gray-100" },
  { id: "3", name: "Women's Soft Lounge Set", price: 1200, category: "women", image: "bg-amber-700" },
  { id: "4", name: "Kids Cotton Tee", price: 250, category: "kids", image: "bg-slate-600" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Simple filter simulation
  const results = MOCK_PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow bg-bg-light py-12 px-4">
        <div className="max-w-[1300px] mx-auto">

          {/* Search Header */}
          <div className="mb-8 border-b border-gray-200 pb-4">
            <h1 className="font-serif text-3xl text-brand-dark mb-2">
              Search Results
            </h1>
            <p className="text-text-muted">
              {query ? (
                <>Showing results for <span className="font-bold text-brand-dark">"{query}"</span></>
              ) : (
                "Please enter a search term"
              )}
            </p>
          </div>

          {/* Results Grid */}
          {query && results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group block bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className={`h-64 w-full ${product.image} relative`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-lg text-brand-dark group-hover:text-brand-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-bold text-brand-dark mt-2">
                      ৳ {product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            // No Results / Empty State
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="bg-white p-6 rounded-full shadow-sm mb-6">
                <FiSearch className="w-10 h-10 text-gray-300" />
              </div>
              <h2 className="font-serif text-2xl text-brand-dark mb-2">
                {query ? "No items found" : "Start typing to search"}
              </h2>
              <p className="text-text-muted max-w-md mb-8">
                {query
                  ? `We couldn't find any matches for "${query}". Try checking your spelling or use different keywords.`
                  : "Explore our premium collection of innerware designed for comfort and style."}
              </p>

              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-colors cursor-pointer"
              >
                Back to Home <FiArrowRight />
              </Link>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </main>
  );
}
