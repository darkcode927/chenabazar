"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import ProductCard from "@/components/product/ProductCard";

import {
  FaArrowRight,
  FaFire,
} from "react-icons/fa";
import { useProducts } from "@/hooks/useProducts";

export default function FeaturedProducts() {
  const { products: allProducts, loading } = useProducts();
  const featured = allProducts.filter((p) => p.featured).slice(0, 4);
  const product =
    featured.length > 0 ? featured : allProducts.slice(0, 4);
  const sliderProducts = [...product, ...product];

  return (
    <section className="relative overflow-hidden py-10">

      {/* 🔥 Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/40 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/40 blur-3xl rounded-full" />

      <div className="relative z-10">

        {/* 🔥 Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">

          <div>

            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-bold">
              <FaFire />
              Trending Collection
            </div>

            <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight text-gray-900">
              Featured
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                {" "}Products
              </span>
            </h2>

            <p className="mt-4 text-gray-500 max-w-2xl">
              Discover our best selling premium products
              loved by thousands of customers.
            </p>
          </div>

          {/* 🔥 View All */}
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition-all duration-300 text-white px-7 py-3 rounded-2xl font-bold shadow-[0_10px_40px_rgba(236,72,153,0.35)]"
          >
            View All
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* 🔥 Empty State */}
        {loading ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="flex gap-6 overflow-hidden"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="min-w-[280px] h-96 rounded-3xl bg-white/60 animate-pulse border"
              />
            ))}
          </motion.div>
        ) : product.length === 0 ? (
          <div className="bg-white rounded-3xl border p-16 text-center shadow-xl">

            <div className="text-6xl">
              🛍️
            </div>

            <h3 className="mt-6 text-3xl font-black text-gray-800">
              No Products Available
            </h3>

            <p className="mt-3 text-gray-500">
              Products will appear soon.
            </p>
          </div>
        ) : (

          /* 🔥 Infinite Slider */
          <div className="overflow-hidden">

            <motion.div
              className="flex gap-6 w-max"
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
                    y: -10,
                    scale: 1.02,
                  }}
                  className="min-w-[280px] sm:min-w-[320px]"
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