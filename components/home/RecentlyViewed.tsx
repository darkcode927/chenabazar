"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaClock,
  FaHeart,
  FaShoppingCart,
  FaArrowRight,
  FaEye,
  FaStar,
} from "react-icons/fa";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function RecentlyViewed() {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(products);
    setAdded(true);

    // Reset after 1.5s
    setTimeout(() => setAdded(false), 1500);
  };
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-pink-50" />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold text-sm mb-5">
              <FaClock />
              Recently Viewed
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Continue Shopping
            </h2>

            <p className="mt-4 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Pick up where you left off and explore your recently viewed
              products with exclusive offers.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-7 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Browse More
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
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
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}

              <Link href={`/products/${product._id}`}>
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70" />

                  {/* Category */}
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3">
                    <button className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-pink-500 transition">
                      <FaHeart />
                    </button>

                    <button className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-sky-500 transition">
                      <FaEye />
                    </button>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold">
                    <FaStar className="text-yellow-400" />
                    {product.rating}
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 line-clamp-1">
                  {product.name}
                </h3>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-3xl font-black text-pink-600">
                    ৳ {product.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ৳ {product.oldPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add To Cart
                  </button>

                  <button className="w-12 h-12 rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 hover:bg-black hover:text-white transition-all duration-300">
                    <FaHeart />
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
