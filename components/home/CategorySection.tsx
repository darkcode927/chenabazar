"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaArrowRight,
  FaTshirt,
  FaLaptop,
  FaClock,
  FaCouch,
  FaMobileAlt,
  FaShoppingBag,
} from "react-icons/fa";

const categories = [
  {
    title: "Fashion",
    subtitle: "Trending outfits & styles",
    icon: <FaTshirt />,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-pink-500 to-rose-500",
    products: "2.5K+ Products",
  },
  {
    title: "Electronics",
    subtitle: "Smart gadgets & devices",
    icon: <FaLaptop />,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-sky-500 to-cyan-500",
    products: "1.8K+ Products",
  },
  {
    title: "Watches",
    subtitle: "Luxury & modern watches",
    icon: <FaClock />,
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-orange-500 to-yellow-500",
    products: "850+ Products",
  },
  {
    title: "Furniture",
    subtitle: "Modern home essentials",
    icon: <FaCouch />,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-emerald-500 to-green-500",
    products: "600+ Products",
  },
  {
    title: "Mobiles",
    subtitle: "Latest smartphones & tech",
    icon: <FaMobileAlt />,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-violet-500 to-purple-500",
    products: "1.2K+ Products",
  },
  {
    title: "Accessories",
    subtitle: "Premium lifestyle collection",
    icon: <FaShoppingBag />,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-fuchsia-500 to-pink-500",
    products: "900+ Products",
  },
];

export default function CategorySection() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden py-16 sm:py-20 bg-white dark:bg-gray-950"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/40 dark:bg-pink-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/40 dark:bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold"
          >
            SHOP BY CATEGORY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            Explore Our
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Popular Categories
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-500 dark:text-gray-400"
          >
            Discover premium collections across fashion, electronics,
            accessories, and more.
          </motion.p>
        </div>

        {/* GRID (🔥 2 cards mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/30 dark:bg-gray-900/40 border border-white/20 dark:border-gray-800 shadow-xl"
            >
              <div className="relative h-[240px] sm:h-[320px] md:h-[380px] overflow-hidden">

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:brightness-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Badge */}
                <div
                  className={`absolute top-3 left-3 bg-gradient-to-r ${category.gradient} text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow`}
                >
                  {category.products}
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">

                  <div
                    className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white text-sm sm:text-lg shadow-lg group-hover:scale-110 transition`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="mt-3 text-lg sm:text-2xl font-black text-white">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm text-gray-200">
                    {category.subtitle}
                  </p>

                  <Link
                    href={`/category/${category.title.toLowerCase()}`}
                    className="group/btn mt-3 inline-flex items-center gap-1 bg-white text-black hover:bg-pink-500 hover:text-white transition px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold shadow"
                  >
                    Explore
                    <FaArrowRight className="group-hover/btn translate-x-1 transition" />
                  </Link>

                </div>
              </div>

              {/* Bottom hover line */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black p-6 sm:p-10 shadow-2xl">

            <div className="absolute top-0 left-0 h-52 w-52 bg-pink-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 h-52 w-52 bg-sky-500/20 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                  Discover Premium Collections
                </h3>
                <p className="mt-2 text-sm text-gray-300 max-w-xl">
                  Browse thousands of products from trending categories curated
                  for modern shoppers.
                </p>
              </div>

              <Link href="/products">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition text-white px-5 py-2.5 rounded-xl font-bold shadow">
                  Browse All
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}