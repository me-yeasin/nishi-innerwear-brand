"use client";

import Link from "next/link";
import { FiHeart, FiTrash2, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      size: "M", // Default, user can change later in cart
      color: "navy", // Default
      quantity: 1
    });
    // Optional: remove from wishlist after adding to cart
    // removeFromWishlist(item.id);
  };

  return (
    <main className="min-h-screen flex flex-col bg-bg-light">
      <Header />

      <div className="flex-grow max-w-[1300px] mx-auto w-full px-4 py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-brand-dark mb-2 text-center">
          My Wishlist
        </h1>
        <p className="text-center text-text-muted mb-12">
          {items.length} {items.length === 1 ? 'item' : 'items'} saved for later
        </p>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded shadow-sm text-center">
            <FiHeart className="w-12 h-12 text-gray-200 mb-4" />
            <h2 className="font-serif text-2xl text-brand-dark mb-2">Your wishlist is empty</h2>
            <p className="text-text-muted mb-8">Save items you love to revisit them later.</p>
            <Link
              href="/"
              className="bg-brand-dark text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-colors cursor-pointer"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white group rounded shadow-sm border border-gray-100 overflow-hidden relative">

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 z-10 p-2 bg-white/90 rounded-full text-gray-400 hover:text-red-500 shadow-sm cursor-pointer"
                  title="Remove from Wishlist"
                >
                  <FiTrash2 />
                </button>

                {/* Image */}
                <Link href={`/products/${item.id}`} className="block h-64 bg-slate-100 relative overflow-hidden">
                   {/* Placeholder */}
                   <div className="absolute inset-0 bg-slate-200"></div>
                </Link>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-serif text-lg text-brand-dark mb-1 truncate">
                    <Link href={`/products/${item.id}`} className="hover:text-brand-accent transition-colors">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="font-bold text-brand-dark mb-4">৳ {item.price}</p>

                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="w-full border border-brand-dark text-brand-dark py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FiShoppingBag /> Add to Cart
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </main>
  );
}
