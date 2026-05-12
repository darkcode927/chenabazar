"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaArrowRight,
  FaTshirt,
  FaLaptop,
  FaClock,
  FaCouch,
  FaMobileAlt,
  FaShoppingBag,
} from "react-icons/fa";
import Link from "next/link";

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
    <section id="categories" className="relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-50" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-50" />

      <div className="relative z-10">
        {/* 🔥 Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold"
          >
            SHOP BY CATEGORY
          </motion.span>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight"
          >
            Explore Our
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Popular Categories
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-6 text-lg text-gray-500 leading-relaxed"
          >
            Discover premium collections across fashion, electronics,
            accessories, and more.
          </motion.p>
        </div>

        {/* 🔥 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
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
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[2rem] shadow-2xl"
            >
              {/* 🔥 Image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* 🔥 Top Badge */}
                <div
                  className={`absolute top-5 left-5 bg-gradient-to-r ${category.gradient} text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl`}
                >
                  {category.products}
                </div>

                {/* 🔥 Content */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  {/* Icon */}
                  <div
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white text-2xl shadow-2xl`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="mt-6 text-4xl font-black text-white">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-gray-200 text-lg">
                    {category.subtitle}
                  </p>

                  {/* Button */}
                  <Link
                    href={`/category/${category.title.toLowerCase()}`}
                    className="group/btn mt-6 inline-flex items-center gap-3 bg-white text-black hover:bg-pink-500 hover:text-white transition-all duration-300 px-6 py-3 rounded-2xl font-bold shadow-xl"
                  >
                    Explore Category
                    <FaArrowRight className="group-hover/btn translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>

              {/* 🔥 Hover Border */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* 🔥 Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-black to-slate-900 p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            {/* Glow */}
            <div className="absolute top-0 left-0 h-72 w-72 bg-pink-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-0 right-0 h-72 w-72 bg-sky-500/20 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-black text-white">
                  Discover Premium Collections
                </h3>

                <p className="mt-5 text-lg text-gray-300 max-w-2xl">
                  Browse thousands of products from trending categories curated
                  for modern shoppers.
                </p>
              </div>

              <Link href="/products">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-black shadow-2xl whitespace-nowrap">
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
