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
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

const trendingProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphone",
    category: "Electronics",
    price: 5990,
    oldPrice: 7490,
    rating: 4.9,
    sold: "1.2k+ Sold",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Luxury Smart Watch",
    category: "Accessories",
    price: 8990,
    oldPrice: 10990,
    rating: 4.8,
    sold: "900+ Sold",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Gaming Mechanical Keyboard",
    category: "Gaming",
    price: 4590,
    oldPrice: 5990,
    rating: 4.9,
    sold: "2k+ Sold",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Minimal Fashion Backpack",
    category: "Fashion",
    price: 3490,
    oldPrice: 4990,
    rating: 4.7,
    sold: "650+ Sold",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
];
interface TrendingProductsProps {
  products: Product[];
}

export default function TrendingProducts({ products }: TrendingProductsProps) {
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
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-pink-50" />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <FaFire />
              Hot & Trending
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Trending Products
            </h2>

            <p className="mt-4 text-lg text-gray-500 max-w-2xl leading-relaxed">
              Discover the most popular products customers are loving right now
              across fashion, gadgets, and lifestyle.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-7 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Products
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
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Product Image */}
              <Link href={`/products/${product._id}`}>
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

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

                  {/* Sold Badge */}
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    {product.sold}
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <FaStar />
                    <span>{product.rating}</span>
                  </div>

                  <span className="text-gray-400 text-sm">Trending Choice</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-gray-900 line-clamp-1">
                  {product.name}
                </h3>

                {/* Price */}
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
                    className="flex-1 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold shadow-lg hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart />
                    Add To Cart
                  </button>

                  <Link href={`/products/${product._id}`}>
                    <button className="w-12 h-12 rounded-2xl border border-gray-200 bg-gray-50 text-gray-700 hover:bg-black hover:text-white transition-all duration-300">
                      <FaHeart />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Shine Hover Effect */}
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
