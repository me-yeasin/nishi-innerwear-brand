import Link from "next/link";
import { FiPackage, FiMapPin, FiCreditCard } from "react-icons/fi";

export default function AccountDashboard() {
  return (
    <div className="space-y-8">
      <h1 className="font-serif text-3xl text-brand-dark mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat Cards */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-brand-accent/10 text-brand-accent rounded-full">
            <FiPackage className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-dark">12</p>
            <p className="text-xs text-text-muted uppercase tracking-wider">Total Orders</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-green-100 text-green-600 rounded-full">
            <FiPackage className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-dark">1</p>
            <p className="text-xs text-text-muted uppercase tracking-wider">Active Order</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
            <FiMapPin className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-brand-dark">2</p>
            <p className="text-xs text-text-muted uppercase tracking-wider">Saved Addresses</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Recent Order Preview */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-serif text-lg text-brand-dark">Recent Order</h3>
            <Link href="/account/orders" className="text-xs font-bold text-brand-accent hover:underline cursor-pointer">
              View All
            </Link>
          </div>

          <div className="border border-gray-100 rounded p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="font-bold text-brand-dark">#ORD-2025-8821</p>
                <p className="text-xs text-text-muted">Placed on Oct 24, 2024</p>
              </div>
              <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded uppercase">
                Processing
              </span>
            </div>
            <div className="flex gap-2 mb-4">
               {/* Product Thumbnails */}
               <div className="w-12 h-12 bg-slate-200 rounded"></div>
               <div className="w-12 h-12 bg-slate-200 rounded"></div>
               <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-xs text-text-muted font-bold">
                 +1
               </div>
            </div>
            <div className="flex justify-between items-center border-t border-gray-50 pt-3">
              <p className="text-sm font-bold text-brand-dark">Total: ৳ 1,450</p>
              <button className="text-xs font-bold text-brand-dark border-b border-brand-dark hover:text-brand-accent hover:border-brand-accent transition-colors">
                Track Order
              </button>
            </div>
          </div>
        </div>

        {/* Default Address Preview */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
           <div className="flex justify-between items-center mb-6">
            <h3 className="font-serif text-lg text-brand-dark">Default Shipping Address</h3>
            <Link href="/account/addresses" className="text-xs font-bold text-brand-accent hover:underline cursor-pointer">
              Edit
            </Link>
          </div>
          <div className="text-sm text-text-muted leading-relaxed">
            <p className="font-bold text-brand-dark mb-1">Tanvir Hassan</p>
            <p>House 42, Road 12, Block B</p>
            <p>Banani, Dhaka - 1213</p>
            <p>Bangladesh</p>
            <p className="mt-2 text-brand-dark">01711-000000</p>
          </div>
        </div>

      </div>
    </div>
  );
}
