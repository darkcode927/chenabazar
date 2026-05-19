"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";

const brands = [
  {
    name: "nike",
    title: "Nike",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    description:
      "Performance-driven fashion and sportswear loved worldwide.",
  },
  {
    name: "apple",
    title: "Apple",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    description:
      "Premium smart devices and accessories with sleek innovation.",
  },
  {
    name: "zara",
    title: "Zara",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Modern fashion collections crafted for trend lovers.",
  },
  {
    name: "rolex",
    title: "Rolex",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
    description:
      "Luxury watches that represent elegance and timeless style.",
  },
];

export default function BrandShowcase() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 dark:bg-pink-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 dark:bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200/70 dark:border-pink-500/20 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm">
            <FaCheckCircle />
            Trusted Global Brands
          </span>

          <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            Shop From
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
              Top Premium Brands
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Explore collections from world-famous premium brands with modern
            fashion, luxury accessories, and cutting-edge technology.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-gray-200/70 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition-all duration-500"
            >
              <Link href={`/products?brand=${brand.name}`}>
                <div className="relative h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer overflow-hidden">
                  {/* Image */}
                  <Image
                    src={brand.image}
                    alt={brand.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Top Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-8">
                    {/* Rating */}
                    <div className="flex gap-1 text-yellow-400 mb-2 sm:mb-3 text-xs sm:text-sm">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    {/* Brand Name */}
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight">
                      {brand.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-[11px] sm:text-sm md:text-base text-gray-200 leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {brand.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                      Explore Collection

                      <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Bottom Hover Border */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 group-hover:w-full transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <Link href="/products">
            <button className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base">
              Browse All Products

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}