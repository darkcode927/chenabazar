"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaFire,
  FaEye,
} from "react-icons/fa";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { Product } from "@/types";

export default function TrendingProducts() {
  const { products: product, loading } = useProducts({ limit: 4 });

  const addToCart = useCartStore((state) => state.addToCart);

  const [added, setAdded] = useState(false);

  const handleAddToCart = (item: Product) => {
    addToCart(item);

    setAdded(true);

    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/70 to-pink-50/70 dark:from-gray-950 dark:via-orange-950/10 dark:to-pink-950/10 transition-colors duration-300" />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14"
        >
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5 shadow-sm border border-orange-200/60 dark:border-orange-500/20">
              <FaFire className="text-xs sm:text-sm" />
              Hot & Trending
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              Trending Products
            </h2>

            {/* Description */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover the most popular products customers are loving right now
              across fashion, gadgets, and lifestyle.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.03] transition-all duration-300 w-full sm:w-fit text-sm sm:text-base"
          >
            View All Products

            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Product Grid */}
        {loading ? (
          <ProductGridSkeleton count={4} />
        ) : (
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-7"
          >
            {product.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[22px] sm:rounded-[28px] border border-gray-200/70 dark:border-gray-800 bg-white/90 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-500"
              >
                {/* Product Image */}
                <Link href={`/products/${product._id}`}>
                  <div className="relative h-44 sm:h-64 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.png"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

                    {/* Category */}
                    <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 bg-white/15 backdrop-blur-xl border border-white/20 text-white px-2.5 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg max-w-[90px] sm:max-w-none truncate">
                      {product.category}
                    </div>

                    {/* Action Buttons */}
                    <div className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 flex flex-col gap-2 sm:gap-3">
                      <button className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 transition-all duration-300 shadow-lg">
                        <FaHeart className="text-[11px] sm:text-sm" />
                      </button>

                      <button className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-sky-500 transition-all duration-300 shadow-lg">
                        <FaEye className="text-[11px] sm:text-sm" />
                      </button>
                    </div>

                    {/* Sold Badge */}
                    <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2.5 sm:px-4 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-xl">
                      {product.sold}
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-3 sm:p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 flex-wrap">
                    <div className="flex items-center gap-1 text-yellow-500 text-[11px] sm:text-sm font-semibold">
                      <FaStar />
                      <span>{product.rating}</span>
                    </div>

                    <span className="text-gray-400 dark:text-gray-500 text-[10px] sm:text-sm">
                      Trending Choice
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-xl font-black text-gray-900 dark:text-white line-clamp-1 leading-snug">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-3 sm:mt-4">
                    <span className="text-lg sm:text-3xl font-black text-pink-600 dark:text-pink-400 leading-none">
                      ৳ {product.price}
                    </span>

                    <span className="text-gray-400 dark:text-gray-500 line-through text-xs sm:text-base">
                      ৳ {product.oldPrice}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm"
                    >
                      <FaShoppingCart className="text-[10px] sm:text-sm" />

                      <span className="truncate">
                        {added ? "Added" : "Add To Cart"}
                      </span>
                    </button>

                    <Link href={`/products/${product._id}`}>
                      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 flex items-center justify-center shadow-sm">
                        <FaHeart className="text-xs sm:text-sm" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Shine Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                  <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-2xl" />
                </div>

                {/* Bottom Glow Border */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}