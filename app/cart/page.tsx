"use client";

import Link from "next/link";
import { FiTrash2, FiArrowRight, FiLock, FiShield } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal } = useCart();
  const SHIPPING_THRESHOLD = 2000;
  const progress = Math.min((cartTotal / SHIPPING_THRESHOLD) * 100, 100);

  return (
    <main className="min-h-screen flex flex-col bg-bg-light">
      <Header />

      <div className="flex-grow max-w-[1300px] mx-auto w-full px-4 py-12">
        <h1 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8 text-center md:text-left">
          Your Shopping Bag
        </h1>

        {items.length === 0 ? (
          // Empty Cart State
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 rounded shadow-sm text-center">
            <h2 className="font-serif text-2xl text-brand-dark mb-2">Your bag is empty</h2>
            <p className="text-text-muted mb-8">Looks like you haven't added any premium essentials yet.</p>
            <Link
              href="/"
              className="bg-brand-dark text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-colors cursor-pointer"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Left Column: Cart Items */}
            <div className="flex-grow order-2 lg:order-1">
              {/* Shipping Progress */}
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
                 <p className="text-sm text-brand-dark font-bold mb-2">
                    {cartTotal >= SHIPPING_THRESHOLD
                      ? "🎉 You've unlocked Free Shipping!"
                      : `Add ৳${SHIPPING_THRESHOLD - cartTotal} more for Free Shipping`
                    }
                  </p>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-accent transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
              </div>

              {/* Items List */}
              <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left hidden md:table">
                  <thead className="bg-gray-50 text-xs uppercase tracking-wider text-text-muted font-bold">
                    <tr>
                      <th className="p-4">Product</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Quantity</th>
                      <th className="p-4 text-right">Total</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {items.map((item) => (
                      <tr key={`${item.id}-${item.size}-${item.color}`}>
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-slate-100 rounded overflow-hidden flex-shrink-0">
                               {/* Placeholder for image */}
                               <div className="w-full h-full bg-slate-200"></div>
                            </div>
                            <div>
                              <Link href={`/products/${item.id}`} className="font-serif font-bold text-brand-dark hover:text-brand-accent">
                                {item.name}
                              </Link>
                              <p className="text-xs text-text-muted mt-1">
                                Size: {item.size} | Color: {item.color}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 font-bold text-text-muted">
                           ৳ {item.price}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center border border-gray-200 rounded w-max">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 hover:bg-gray-50 text-brand-dark cursor-pointer"
                            >-</button>
                            <span className="px-2 text-sm font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 hover:bg-gray-50 text-brand-dark cursor-pointer"
                            >+</button>
                          </div>
                        </td>
                        <td className="p-4 text-right font-bold text-brand-dark">
                          ৳ {item.price * item.quantity}
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                          >
                            <FiTrash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Mobile View */}
                <div className="md:hidden divide-y divide-gray-100">
                   {items.map((item) => (
                      <div key={`${item.id}-${item.size}-${item.color}`} className="p-4 flex gap-4">
                        <div className="w-20 h-20 bg-slate-100 rounded flex-shrink-0"></div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                             <div>
                                <h3 className="font-serif font-bold text-brand-dark">{item.name}</h3>
                                <p className="text-xs text-text-muted">Size: {item.size} • Color: {item.color}</p>
                             </div>
                             <button onClick={() => removeFromCart(item.id)} className="text-gray-400">
                               <FiTrash2 />
                             </button>
                          </div>
                          <div className="flex justify-between items-center mt-4">
                             <div className="flex items-center border border-gray-200 rounded">
                                <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1">-</button>
                                <span className="px-2 text-xs font-bold">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1">+</button>
                             </div>
                             <p className="font-bold text-brand-dark">৳ {item.price * item.quantity}</p>
                          </div>
                        </div>
                      </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Right Column: Summary */}
            <div className="w-full lg:w-[350px] flex-shrink-0 order-1 lg:order-2">
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100 sticky top-24">
                <h3 className="font-serif text-xl text-brand-dark mb-4 border-b border-gray-100 pb-2">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Subtotal</span>
                    <span className="font-bold text-brand-dark">৳ {cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Shipping</span>
                    <span className="text-xs text-text-muted">(Calculated at checkout)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-6">
                  <span className="font-bold text-brand-dark">Total</span>
                  <span className="font-serif text-xl font-bold text-brand-accent">৳ {cartTotal}</span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full block text-center bg-brand-dark text-white py-4 font-bold uppercase tracking-[0.15em] hover:bg-brand-accent transition-colors duration-300 mb-4 cursor-pointer"
                >
                  Proceed to Checkout
                </Link>

                <div className="flex flex-col gap-2 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
                    <FiLock /> Secure Checkout
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-text-muted">
                    <FiShield /> Open Box Delivery Available
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
