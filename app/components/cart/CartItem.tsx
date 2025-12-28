import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { CartItem, useCart } from "../../context/CartContext";

export default function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Thumbnail Placeholder */}
      <div className="w-16 h-20 bg-gray-100 rounded-sm flex-shrink-0 relative overflow-hidden">
         {/* In real app, next/image here */}
         <div className="absolute inset-0 bg-slate-200"></div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h4 className="font-serif text-sm text-brand-dark pr-4 leading-tight">{item.name}</h4>
            <button
              onClick={() => removeFromCart(item.cartItemId)}
              className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-text-muted mt-1">
            {item.size} / {item.color}
          </p>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex items-center border border-gray-200 rounded-sm">
            <button
              onClick={() => updateQuantity(item.cartItemId, -1)}
              className="px-2 py-1 hover:bg-gray-50 text-gray-500 cursor-pointer"
            >
              <FiMinus className="w-3 h-3" />
            </button>
            <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.cartItemId, 1)}
              className="px-2 py-1 hover:bg-gray-50 text-gray-500 cursor-pointer"
            >
              <FiPlus className="w-3 h-3" />
            </button>
          </div>
          <span className="font-bold text-sm text-brand-dark">
            ৳ {item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
}
