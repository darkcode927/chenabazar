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
    <section className="relative overflow-hidden">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold">
          <FaCheckCircle />
          Trusted Global Brands
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-black text-gray-900">
          Shop From
          <span className="block text-pink-500">
            Top Premium Brands
          </span>
        </h2>
      </div>

      {/* Brands */}
      <div className="grid md:grid-cols-2 gap-8">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-3xl overflow-hidden shadow-xl"
          >
            <Link href={`/products?brand=${brand.name}`}>
              
              <div className="relative h-[420px] cursor-pointer">
                <Image
                  src={brand.image}
                  alt={brand.title}
                  fill
                  className="object-cover group-hover:scale-110 transition"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Content */}
                <div className="absolute bottom-0 p-8 text-white">
                  
                  <div className="flex gap-1 text-yellow-400 mb-2">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>

                  <h3 className="text-3xl font-black">
                    {brand.title}
                  </h3>

                  <p className="text-gray-200 mt-2">
                    {brand.description}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore Collection
                    <FaArrowRight />
                  </div>
                </div>
              </div>

            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-20 text-center">
        <Link href="/products">
          <button className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-pink-700">
            Browse All Products
          </button>
        </Link>
      </div>
    </section>
  );
}