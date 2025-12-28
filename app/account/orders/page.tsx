import Link from "next/link";
import { FiEye } from "react-icons/fi";

// Mock Data
const orders = [
  { id: "ORD-2025-8821", date: "Oct 24, 2024", total: 1450, status: "Processing", items: 3 },
  { id: "ORD-2024-1102", date: "Sep 15, 2024", total: 850, status: "Delivered", items: 2 },
  { id: "ORD-2024-0554", date: "Aug 02, 2024", total: 2200, status: "Delivered", items: 5 },
];

export default function OrderHistoryPage() {
  return (
    <div className="bg-white p-6 rounded shadow-sm border border-gray-100 min-h-[400px]">
      <h1 className="font-serif text-2xl text-brand-dark mb-6">My Orders</h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-xs uppercase tracking-wider text-text-muted font-bold">
            <tr>
              <th className="p-4 rounded-l">Order ID</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Total</th>
              <th className="p-4 rounded-r text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr key={order.id} className="group hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-brand-dark">{order.id}</td>
                <td className="p-4 text-sm text-text-muted">{order.date}</td>
                <td className="p-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'Processing' ? 'bg-orange-100 text-orange-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-4 text-sm font-bold text-brand-dark">
                  ৳ {order.total} <span className="font-normal text-gray-400 text-xs">({order.items} items)</span>
                </td>
                <td className="p-4 text-right">
                  <Link href={`/account/orders/${order.id}`} className="inline-flex items-center gap-1 text-brand-accent text-xs font-bold hover:underline cursor-pointer">
                    <FiEye /> View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
