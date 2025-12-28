import Link from "next/link";
import { FiShoppingBag, FiHeart } from "react-icons/fi";

export default function ProductGrid() {
  // Mock Data
  const products = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? "Premium Cotton Brief" : "Ultra-Soft Modal Trunk",
    price: 450,
    originalPrice: 600,
    tag: i === 0 ? "Best Seller" : i === 2 ? "New" : null,
    color: i % 2 === 0 ? "bg-slate-800" : "bg-gray-700" // Placeholder for image
  }));

  return (
    <section className="max-w-[1300px] mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
        {products.map((product) => (
          <div key={product.id} className="group relative cursor-pointer">
            {/* Image Container */}
            <div className={`aspect-[3/4] w-full ${product.color} rounded-sm relative overflow-hidden mb-4`}>
              {/* Badge */}
              {product.tag && (
                <span className="absolute top-2 left-2 bg-brand-accent text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">
                  {product.tag}
                </span>
              )}

              {/* Actions Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <button className="w-full bg-white text-brand-dark py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand-dark hover:text-white transition-colors shadow-lg translate-y-4 group-hover:translate-y-0 duration-300 flex items-center justify-center gap-2">
                  <FiShoppingBag /> Quick Add
                </button>
              </div>

              {/* Wishlist */}
              <button className="absolute top-2 right-2 p-2 bg-white/90 rounded-full text-brand-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-500">
                <FiHeart className="w-4 h-4" />
              </button>
            </div>

            {/* Info */}
            <div className="space-y-1">
              <h3 className="font-serif text-sm md:text-base text-brand-dark group-hover:text-brand-accent transition-colors truncate">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-brand-dark">৳ {product.price}</span>
                <span className="text-text-muted line-through text-xs">৳ {product.originalPrice}</span>
              </div>

              {/* Size Hints (Desktop) */}
              <div className="hidden md:flex gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <span key={size} className="text-[10px] border border-gray-200 px-1 py-0.5 text-text-muted">
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Link Wrapper */}
            <Link href={`/products/${product.id}`} className="absolute inset-0 z-0"></Link>
          </div>
        ))}
      </div>
    </section>
  );
}
