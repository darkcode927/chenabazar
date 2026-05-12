"use client";

import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);

  const {
    items,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
  } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 hydration fix

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <p className="text-center mt-10">Cart is empty</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {items.map((item, index) => (
        <div
          key={item._id || index}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2>{item.name}</h2>
            <p>৳ {item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => decreaseQty(item._id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item._id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">Total: ৳ {total}</h2>

        <button
          onClick={clearCart}
          className="mt-3 bg-gray-200 px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}