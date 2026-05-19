"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaBolt } from "react-icons/fa";

import { useCartStore } from "@/store/cartStore";
import { useProducts } from "@/hooks/useProducts";

import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { PRODUCT_GRID_CLASS } from "@/lib/product-grid";

export default function NewArrivals() {
  const { products, loading } = useProducts({ limit: 8 });

  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300" />

      {/* Glow Effects */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-pink-200/30 dark:bg-pink-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 dark:bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200/60 dark:border-pink-500/20 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 shadow-sm">
              <FaBolt />
              JUST ARRIVED
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              New Arrivals
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl leading-relaxed">
              Discover the latest products freshly added to Chena Bazar.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-3 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl font-semibold hover:bg-pink-600 dark:hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-xl w-full sm:w-fit"
          >
            Explore Collection

            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Product Grid */}
        {loading ? (
          <ProductGridSkeleton count={8} />
        ) : (
          <div
            className={`${PRODUCT_GRID_CLASS} grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6`}
          >
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/70 dark:border-gray-800 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)] hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <Link href={`/products/${product._id}`}>
                  <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.png"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Category */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 dark:bg-black/60 backdrop-blur-md text-gray-800 dark:text-white px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg">
                      {product.category}
                    </div>

                    {/* NEW Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-lg">
                      NEW
                    </div>

                    {/* Flash Badge */}
                    {product.flashSale && (
                      <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-red-500 text-white px-3 py-1 text-[10px] sm:text-xs rounded-full font-semibold shadow-lg">
                        🔥 Flash
                      </span>
                    )}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-3 sm:p-5 md:p-6">
                  {/* Title */}
                  <h3 className="text-sm sm:text-lg md:text-xl font-black text-gray-900 dark:text-white line-clamp-1 leading-snug">
                    {product.name}
                  </h3>

                  {/* Price + Stock */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-3">
                    <p className="text-lg sm:text-2xl font-black text-pink-600 dark:text-pink-400">
                      ৳ {product.price}
                    </p>

                    <span
                      className={`text-xs sm:text-sm font-semibold ${
                        product.stock && product.stock > 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-500 dark:text-red-400"
                      }`}
                    >
                      {product.stock && product.stock > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 sm:gap-3 mt-5 sm:mt-6">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-pink-500/20"
                    >
                      Add to Cart
                    </button>

                    <button className="px-3 sm:px-5 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl sm:rounded-2xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                      ♡
                    </button>
                  </div>
                </div>

                {/* Hover Bottom Border */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}