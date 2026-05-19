"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaBolt } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";
import { useProducts } from "@/hooks/useProducts";

export default function NewArrivals() {
  const { products, loading } = useProducts({ limit: 8 });
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-pink-50" />

      <div className="absolute -top-24 -left-20 w-72 h-72 bg-pink-200/40 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/40 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              <FaBolt />
              JUST ARRIVED
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              New Arrivals
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl text-lg">
              Discover the latest products freshly added to Chena Bazar.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:bg-pink-600 transition-all duration-300 shadow-xl"
          >
            Explore Collection
            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-96 rounded-[32px] bg-white/60 animate-pulse border"
              />
            ))}
          </div>
        ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/80 backdrop-blur-xl border rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <Link href={`/products/${product._id}`}>
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Category */}
                  <div className="absolute top-4 left-4 bg-white/90 px-4 py-1.5 rounded-full text-xs font-bold">
                    {product.category}
                  </div>

                  {/* NEW Badge */}
                  <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>

                  {/* 🔥 Flash Badge */}
                  {product.flashSale && (
                    <span className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 text-xs rounded-full">
                      🔥 Flash
                    </span>
                  )}
                </div>
              </Link>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black text-gray-900 line-clamp-1">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <p className="text-2xl font-black text-pink-600">
                    ৳ {product.price}
                  </p>

                  <span className="text-sm text-green-600 font-semibold">
                    {/* {product.stock > 0 ? "In Stock" : "Out"} */}

                    {product.stock && product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-2xl font-semibold hover:scale-[1.02] transition"
                  >
                    Add to Cart
                  </button>

                  <button className="px-5 bg-gray-100 rounded-2xl">
                    ♡
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}