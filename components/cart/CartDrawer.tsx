"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";
import Link from "next/link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartDrawer({
  isOpen,
  onClose,
}: Props) {
  const {
    items,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCartStore();

  const total = items.reduce(
    (sum, item) => {
      const price = Number(item.price) || 0;

      return (
        sum +
        (isNaN(price)
          ? 0
          : price * item.quantity)
      );
    },
    0,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
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
            transition={{
              type: "spring",
              damping: 28,
              stiffness: 260,
            }}
            className="
              fixed right-0 top-0 z-50
              h-full w-[380px]
              max-w-full
              bg-white dark:bg-gray-950
              border-l border-gray-200 dark:border-gray-800
              shadow-2xl
              flex flex-col
            "
          >
            {/* Header */}
            <div
              className="
                flex items-center justify-between
                p-5 border-b
                border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-950
              "
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Your Cart
              </h2>

              <button
                onClick={onClose}
                className="
                  h-10 w-10 rounded-xl
                  flex items-center justify-center
                  text-gray-600 dark:text-gray-300
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  hover:text-red-500
                  transition-all duration-300
                "
              >
                <FaTimes />
              </button>
            </div>

            {/* Items */}
            <div
              className="
                flex-1 overflow-y-auto
                p-4 space-y-4
                bg-gray-50/70 dark:bg-gray-950
              "
            >
              {items.length === 0 ? (
                <div className="flex h-full items-center justify-center">
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Cart is empty
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item._id}-${item.quantity}`}
                    className="
                      flex gap-3
                      border border-gray-200 dark:border-gray-800
                      bg-white dark:bg-gray-900
                      p-3 rounded-xl
                      shadow-sm
                    "
                  >
                    <Image
                      src={
                        item.image?.trim()
                          ? item.image
                          : "/placeholder.png"
                      }
                      alt={
                        item.name ||
                        "Product Image"
                      }
                      width={70}
                      height={70}
                      className="rounded-lg object-cover"
                    />

                    <div className="flex-1 min-w-0">
                      <h3
                        className="
                          font-semibold text-sm
                          text-gray-900 dark:text-white
                          line-clamp-2
                        "
                      >
                        {item.name}
                      </h3>

                      {item.size && (
                        <p
                          className="
                            text-xs uppercase tracking-wide
                            text-gray-500 dark:text-gray-400
                            mt-1
                          "
                        >
                          Size: {item.size}
                        </p>
                      )}

                      <p className="text-pink-600 dark:text-pink-400 font-bold mt-2">
                        ৳ {item.price}
                      </p>

                      {/* Qty */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() =>
                            decreaseQty(item._id)
                          }
                          className="
                            p-1.5 rounded-md
                            bg-gray-200 dark:bg-gray-800
                            text-gray-700 dark:text-gray-300
                            hover:bg-pink-500 hover:text-white
                            transition-all duration-300
                          "
                        >
                          <FaMinus size={12} />
                        </button>

                        <span className="text-gray-900 dark:text-white font-medium min-w-[20px] text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQty(item._id)
                          }
                          className="
                            p-1.5 rounded-md
                            bg-gray-200 dark:bg-gray-800
                            text-gray-700 dark:text-gray-300
                            hover:bg-pink-500 hover:text-white
                            transition-all duration-300
                          "
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        removeFromCart(item._id)
                      }
                      className="
                        text-red-500
                        hover:text-red-600
                        dark:hover:text-red-400
                        transition-colors duration-300
                        self-start
                        mt-1
                      "
                    >
                      <FaTrash />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div
              className="
                p-5 mb-6 pb-8 border-t space-y-4
                border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-950
              "
            >
              {/* Total */}
              <div
                className="
                  flex justify-between
                  font-bold text-lg
                  text-gray-900 dark:text-white
                "
              >
                <span>Total</span>

                <span>
                  ৳ {total.toLocaleString()}
                </span>
              </div>

              {/* View Cart */}
              <Link
                href="/cart"
                onClick={onClose}
                className="
                  block text-center
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-gray-900
                  text-gray-900 dark:text-white
                  py-3 rounded-xl
                  font-semibold
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition-all duration-300
                "
              >
                View Cart
              </Link>

              {/* Checkout */}
              <Link
                href="/checkout"
                onClick={onClose}
                className="
                  block text-center
                  bg-pink-600 hover:bg-pink-700
                  dark:bg-pink-500 dark:hover:bg-pink-600
                  text-white
                  py-3 rounded-xl
                  font-bold
                  transition-all duration-300
                  shadow-lg
                "
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