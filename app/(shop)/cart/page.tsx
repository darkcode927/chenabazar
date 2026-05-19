"use client";

import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import PageLoader from "@/components/ui/PageLoader";
import { theme } from "@/lib/theme";
import Link from "next/link";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);

  const { items, removeFromCart, increaseQty, decreaseQty, clearCart } =
    useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <PageLoader label="Loading your cart..." />;
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <p className={`text-lg ${theme.subtext}`}>Your cart is empty</p>
        <Link href="/products" className={`mt-6 inline-block ${theme.btnPrimary}`}>
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl p-4 sm:p-6">
      <h1 className={`mb-6 text-2xl font-bold sm:text-3xl ${theme.heading}`}>
        Your Cart
      </h1>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={item._id || index}
            className={`flex flex-col gap-4 border-b py-4 sm:flex-row sm:items-center sm:justify-between ${theme.card} p-4`}
          >
            <div>
              <h2 className="font-semibold dark:text-white">{item.name}</h2>
              <p className="text-pink-600 dark:text-pink-400">৳ {item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => decreaseQty(item._id)}
                className="rounded-lg border px-3 py-1 dark:border-gray-700 dark:text-gray-200"
              >
                -
              </button>
              <span className="dark:text-white">{item.quantity}</span>
              <button
                type="button"
                onClick={() => increaseQty(item._id)}
                className="rounded-lg border px-3 py-1 dark:border-gray-700 dark:text-gray-200"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${theme.cardElevated} p-6`}>
        <p className={`text-xl font-bold ${theme.heading}`}>Total: ৳ {total}</p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={clearCart} className={theme.btnSecondary}>
            Clear Cart
          </button>
          <Link href="/checkout" className={theme.btnPrimary}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
