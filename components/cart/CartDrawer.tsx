"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({ isOpen, onClose }: Props) {
  const { items, removeFromCart, increaseQty, decreaseQty } = useCartStore();

  const total = items.reduce(
    (sum, item) => {
      const price = Number(item.price) || 0;
      return sum + (isNaN(price) ? 0 : price * item.quantity);
    },
    0,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed right-0 top-0 h-full w-[380px] bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={onClose}>
                <FaTimes />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-center text-gray-500">Cart is empty</p>
              ) : (
                items.map((item) => (
                  <div
                    // key={item._id}
                    key={`${item._id}-${item.quantity}`}
                    className="flex gap-3 border p-3 rounded-xl"
                  >
                    <Image
                      src={item.image?.trim() ? item.image : "/placeholder.png"}
                      alt={item.name || "Product Image"}
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{item.name}</h3>

                      {item.size && (
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          Size: {item.size}
                        </p>
                      )}

                      <p className="text-pink-600 font-bold">৳ {item.price}</p>

                      {/* Qty */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQty(item._id)}
                          className="p-1 bg-gray-200 rounded"
                        >
                          <FaMinus size={12} />
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => increaseQty(item._id)}
                          className="p-1 bg-gray-200 rounded"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-5 mb-6 pb-8 border-t space-y-4">
              {/* Total */}
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>৳ {total.toLocaleString()}</span>
              </div>

              {/* 🔥 View Cart */}
              <Link
                href="/cart"
                onClick={onClose}
                className="block text-center border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                View Cart
              </Link>

              {/* 🔥 Checkout (Primary CTA) */}
              <Link
                href="/checkout"
                onClick={onClose}
                className="block text-center bg-pink-600 text-white py-3 rounded-xl font-bold hover:bg-pink-700 transition shadow-lg"
              >
                Checkout
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
