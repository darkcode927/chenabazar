"use client";

import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import PageLoader from "@/components/ui/PageLoader";
import { theme } from "@/lib/theme";
import Link from "next/link";
import Image from "next/image";

import {
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowRight,
  FaShoppingBag,
} from "react-icons/fa";

export default function CartPage() {
  const [mounted, setMounted] =
    useState(false);

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

  if (!mounted) {
    return (
      <PageLoader label="Loading your cart..." />
    );
  }

  const total = items.reduce(
    (sum, item) =>
      sum +
      Number(item.price) *
        item.quantity,
    0,
  );

  const totalItems = items.reduce(
    (sum, item) =>
      sum + item.quantity,
    0,
  );

  /* 🔥 EMPTY CART */
  if (items.length === 0) {
    return (
      <div
        className="
          relative overflow-hidden
          px-4 py-20 sm:py-28
        "
      >
        {/* Background Glow */}
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl dark:bg-orange-500/10" />

        <div className="relative mx-auto max-w-xl">
          <div
            className="
              rounded-[2rem]
              border border-gray-200
              bg-white/80
              p-10 text-center
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
              dark:border-white/10
              dark:bg-gray-900/70
            "
          >
            <div
              className="
                mx-auto flex h-24 w-24
                items-center justify-center
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-orange-500
                text-4xl text-white
                shadow-xl
              "
            >
              <FaShoppingBag />
            </div>

            <h1
              className={`
                mt-8 text-3xl font-black
                ${theme.heading}
              `}
            >
              Your cart is empty
            </h1>

            <p
              className={`
                mx-auto mt-4 max-w-md
                text-lg leading-relaxed
                ${theme.subtext}
              `}
            >
              Looks like you haven’t added
              anything to your cart yet.
              Start exploring premium
              products now.
            </p>

            <Link
              href="/products"
              className="
                group mt-8 inline-flex
                items-center gap-3
                rounded-2xl
                bg-gradient-to-r
                from-pink-500
                via-rose-500
                to-orange-500
                px-8 py-4
                font-black text-white
                shadow-[0_15px_50px_rgba(236,72,153,0.35)]
                transition-all duration-300
                hover:scale-105
              "
            >
              Shop Now

              <FaArrowRight
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        relative overflow-hidden
        px-4 py-10 sm:px-6 sm:py-16
      "
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />

      <div className="relative mx-auto max-w-6xl">
        {/* 🔥 HEADER */}
        <div
          className="
            mb-10 flex flex-col gap-5
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <div>
            <h1
              className={`
                text-3xl font-black
                sm:text-4xl
                ${theme.heading}
              `}
            >
              Your Cart
            </h1>

            <p
              className={`
                mt-2 text-base
                ${theme.subtext}
              `}
            >
              {totalItems} item
              {totalItems > 1 && "s"} in
              your shopping cart
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="
              inline-flex items-center
              justify-center gap-2
              rounded-2xl
              border border-red-200
              bg-red-50
              px-5 py-3
              font-semibold text-red-600
              transition-all duration-300
              hover:bg-red-500
              hover:text-white
              dark:border-red-500/20
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            <FaTrash />
            Clear Cart
          </button>
        </div>

        {/* 🔥 CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* 🔥 CART ITEMS */}
          <div className="space-y-5">
            {items.map((item, index) => (
              <div
                key={item._id || index}
                className="
                  group rounded-[2rem]
                  border border-gray-200
                  bg-white/80
                  p-4 shadow-lg
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                  dark:border-white/10
                  dark:bg-gray-900/70
                "
              >
                <div className="flex flex-col gap-5 sm:flex-row">
                  {/* 🔥 IMAGE */}
                  <div
                    className="
                      relative h-28 w-full
                      overflow-hidden rounded-2xl
                      bg-gray-100
                      sm:h-32 sm:w-32
                      dark:bg-gray-800
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
                      fill
                      className="
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* 🔥 CONTENT */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div
                      className="
                        flex flex-col gap-4
                        sm:flex-row
                        sm:items-start
                        sm:justify-between
                      "
                    >
                      <div>
                        <h2
                          className="
                            text-lg font-black
                            text-gray-900
                            dark:text-white
                          "
                        >
                          {item.name}
                        </h2>

                        {item.size && (
                          <p
                            className="
                              mt-1 text-xs
                              uppercase tracking-wider
                              text-gray-500
                              dark:text-gray-400
                            "
                          >
                            Size:{" "}
                            {item.size}
                          </p>
                        )}

                        <p
                          className="
                            mt-3 text-2xl
                            font-black
                            text-pink-600
                            dark:text-pink-400
                          "
                        >
                          ৳{" "}
                          {Number(
                            item.price,
                          ).toLocaleString()}
                        </p>
                      </div>

                      {/* 🔥 REMOVE */}
                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(
                            item._id,
                          )
                        }
                        className="
                          inline-flex h-11 w-11
                          items-center justify-center
                          rounded-xl
                          bg-red-50
                          text-red-500
                          transition-all duration-300
                          hover:bg-red-500
                          hover:text-white
                          dark:bg-red-500/10
                        "
                      >
                        <FaTrash size={14} />
                      </button>
                    </div>

                    {/* 🔥 QTY */}
                    <div
                      className="
                        mt-5 flex flex-col gap-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                      "
                    >
                      <div
                        className="
                          flex w-fit items-center gap-3
                          rounded-2xl
                          bg-gray-100
                          px-3 py-2
                          dark:bg-white/10
                        "
                      >
                        <button
                          type="button"
                          onClick={() =>
                            decreaseQty(
                              item._id,
                            )
                          }
                          className="
                            flex h-9 w-9
                            items-center justify-center
                            rounded-xl
                            bg-white
                            text-gray-700
                            shadow-sm
                            transition-all duration-300
                            hover:bg-pink-500
                            hover:text-white
                            dark:bg-gray-900
                            dark:text-gray-200
                          "
                        >
                          <FaMinus size={11} />
                        </button>

                        <span
                          className="
                            min-w-[22px]
                            text-center font-bold
                            text-gray-900
                            dark:text-white
                          "
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            increaseQty(
                              item._id,
                            )
                          }
                          className="
                            flex h-9 w-9
                            items-center justify-center
                            rounded-xl
                            bg-white
                            text-gray-700
                            shadow-sm
                            transition-all duration-300
                            hover:bg-pink-500
                            hover:text-white
                            dark:bg-gray-900
                            dark:text-gray-200
                          "
                        >
                          <FaPlus size={11} />
                        </button>
                      </div>

                      <p
                        className="
                          text-sm font-semibold
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        Subtotal:{" "}
                        <span
                          className="
                            font-black
                            text-gray-900
                            dark:text-white
                          "
                        >
                          ৳{" "}
                          {(
                            Number(
                              item.price,
                            ) *
                            item.quantity
                          ).toLocaleString()}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 🔥 ORDER SUMMARY */}
          <div>
            <div
              className="
                sticky top-24
                rounded-[2rem]
                border border-gray-200
                bg-white/80
                p-6 shadow-2xl
                backdrop-blur-2xl
                dark:border-white/10
                dark:bg-gray-900/70
              "
            >
              <h2
                className="
                  text-2xl font-black
                  text-gray-900
                  dark:text-white
                "
              >
                Order Summary
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Total Items
                  </span>

                  <span
                    className="
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    {totalItems}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Shipping
                  </span>

                  <span
                    className="
                      font-bold text-green-600
                      dark:text-green-400
                    "
                  >
                    Free
                  </span>
                </div>

                <div
                  className="
                    border-t border-dashed
                    border-gray-200
                    pt-5
                    dark:border-white/10
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-lg font-semibold
                        text-gray-700
                        dark:text-gray-300
                      "
                    >
                      Total
                    </span>

                    <span
                      className="
                        text-3xl font-black
                        text-pink-600
                        dark:text-pink-400
                      "
                    >
                      ৳{" "}
                      {total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* 🔥 ACTION BUTTONS */}
              <div className="mt-8 space-y-4">
                <Link
                  href="/checkout"
                  className="
                    group flex h-14 w-full
                    items-center justify-center gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-pink-500
                    via-rose-500
                    to-orange-500
                    text-white
                    font-black
                    shadow-[0_15px_50px_rgba(236,72,153,0.35)]
                    transition-all duration-300
                    hover:scale-[1.02]
                  "
                >
                  Proceed to Checkout

                  <FaArrowRight
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="/products"
                  className="
                    flex h-14 w-full
                    items-center justify-center
                    rounded-2xl
                    border border-gray-200
                    bg-white
                    font-bold
                    text-gray-800
                    transition-all duration-300
                    hover:bg-gray-100
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-white
                    dark:hover:bg-white/10
                  "
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}