"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { FaShoppingCart, FaEye, FaHeart, FaCheck } from "react-icons/fa";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      <button
        type="button"
        className="absolute top-2 right-2 z-10 rounded-full bg-white/90 p-2 shadow backdrop-blur transition hover:bg-pink-100 dark:bg-gray-800/90 dark:hover:bg-pink-900/40 sm:top-3 sm:right-3"
        aria-label="Add to wishlist"
      >
        <FaHeart className="text-gray-500 hover:text-pink-500 dark:text-gray-300" />
      </button>

      <Link href={`/products/${product._id}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-square md:h-56 md:aspect-auto lg:h-64">
          <Image
            src={product.image?.trim() ? product.image : "/placeholder.png"}
            alt={product.name || "Product Image"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-110"
          />

          {product.flashSale && (
            <span className="absolute top-2 left-2 z-10 rounded-full bg-red-500 px-2 py-1 text-[10px] text-white shadow sm:top-3 sm:left-3 sm:px-3 sm:text-xs">
              🔥 Flash Sale
            </span>
          )}

          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              className="rounded-full bg-white p-2 shadow transition hover:bg-pink-600 hover:text-white sm:p-3"
              aria-label="Add to cart"
            >
              <FaShoppingCart />
            </button>
            <span className="rounded-full bg-white p-2 shadow sm:p-3">
              <FaEye />
            </span>
          </div>
        </div>
      </Link>

      <div className="space-y-2 p-3 sm:p-4">
        <h2 className="line-clamp-2 text-sm font-semibold transition group-hover:text-pink-600 sm:text-base md:line-clamp-1 md:text-lg dark:group-hover:text-pink-400">
          {product.name}
        </h2>

        <p className="text-xs capitalize text-gray-500 dark:text-gray-400">
          {product.category}
        </p>

        <p className="text-lg font-bold text-pink-600 sm:text-xl dark:text-pink-400">
          ৳ {product.price}
        </p>

        <div className="flex gap-2 pt-1 sm:pt-2">
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs transition sm:gap-2 sm:text-sm ${
              added
                ? "bg-green-500 text-white"
                : "bg-pink-600 text-white hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600"
            }`}
          >
            {added ? (
              <>
                <FaCheck /> Added
              </>
            ) : (
              <>
                <FaShoppingCart /> Add to Cart
              </>
            )}
          </button>

          <Link
            href={`/products/${product._id}`}
            className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="View product"
          >
            <FaEye />
          </Link>
        </div>
      </div>
    </div>
  );
}
