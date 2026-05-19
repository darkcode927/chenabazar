"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import ProductCard from "@/components/product/ProductCard";

import { FaArrowRight, FaFire } from "react-icons/fa";
import { useProducts } from "@/hooks/useProducts";

export default function FeaturedProducts() {
  const { products: allProducts, loading } = useProducts();

  const featured = allProducts.filter((p) => p.featured).slice(0, 4);

  const product =
    featured.length > 0 ? featured : allProducts.slice(0, 4);

  const sliderProducts = [...product, ...product];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* 🔥 Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/40 dark:bg-pink-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/40 dark:bg-sky-500/10 blur-3xl rounded-full" />

      {/* Extra Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/40 to-transparent dark:via-gray-900/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* 🔥 Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 px-4 py-2 rounded-full text-xs sm:text-sm font-bold border border-pink-200 dark:border-pink-500/20 shadow-sm">
              <FaFire />
              Trending Collection
            </div>

            {/* Title */}
            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-900 dark:text-white">
              Featured
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                {" "}
                Products
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover our best selling premium products loved by thousands of
              customers.
            </p>
          </div>

          {/* 🔥 View All */}
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 sm:px-7 py-3 rounded-2xl font-bold shadow-[0_10px_40px_rgba(236,72,153,0.35)] hover:shadow-[0_15px_50px_rgba(236,72,153,0.45)] hover:scale-[1.03] transition-all duration-300 w-full sm:w-fit"
          >
            View All

            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* 🔥 Empty State */}
        {loading ? (
          <div className="flex gap-4 sm:gap-6 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[170px] xs:min-w-[180px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px] h-[290px] sm:h-[360px] md:h-[420px] shrink-0 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 animate-pulse backdrop-blur-xl"
              />
            ))}
          </div>
        ) : product.length === 0 ? (
          <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl p-10 sm:p-16 text-center shadow-xl">
            <div className="text-5xl sm:text-6xl">🛍️</div>

            <h3 className="mt-6 text-2xl sm:text-3xl font-black text-gray-800 dark:text-white">
              No Products Available
            </h3>

            <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Products will appear soon.
            </p>
          </div>
        ) : (
          /* 🔥 Infinite Slider */
          <div className="overflow-hidden relative">
            {/* Edge Fade */}
            <div className="absolute left-0 top-0 z-20 h-full w-10 sm:w-20 bg-gradient-to-r from-white dark:from-gray-950 to-transparent pointer-events-none" />

            <div className="absolute right-0 top-0 z-20 h-full w-10 sm:w-20 bg-gradient-to-l from-white dark:from-gray-950 to-transparent pointer-events-none" />

            <motion.div
              className="flex gap-4 sm:gap-6 w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              }}
            >
              {sliderProducts.map((product, index) => (
                <motion.div
                  key={`${product._id}-${index}`}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    min-w-[170px]
                    xs:min-w-[180px]
                    sm:min-w-[240px]
                    md:min-w-[280px]
                    lg:min-w-[320px]
                    shrink-0
                  "
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}