"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaRobot,
  FaArrowRight,
  FaStar,
  FaBolt,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { useCartStore } from "@/store/cartStore";
import { useProducts } from "@/hooks/useProducts";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";

export default function AIRecommendation() {
  const { products: product, loading } = useProducts({ limit: 4 });

  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <section className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-pink-100 dark:from-slate-950 dark:via-slate-900 dark:to-pink-950 transition-colors duration-300" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-pink-500/10 dark:bg-pink-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 h-72 w-72 bg-sky-500/10 dark:bg-sky-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* LEFT SIDE */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="inline-flex items-center gap-2 bg-pink-100 dark:bg-white/10 border border-pink-200 dark:border-white/10 px-4 py-2 rounded-full text-xs sm:text-sm text-pink-700 dark:text-pink-200 font-semibold mb-5 backdrop-blur-md shadow-sm"
            >
              <FaRobot className="text-pink-500 dark:text-pink-400" />
              AI Powered Recommendations
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight"
            >
              Recommended
              <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-400 bg-clip-text text-transparent">
                Just For You
              </span>
            </motion.h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Personalized picks based on your behavior, trends, and customer
              activity.
            </p>

            {/* Features */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
              <div className="feature">
                <FaBolt />
                Smart Matching
              </div>

              <div className="feature">
                <FaHeart />
                Personalized
              </div>

              <div className="feature">
                <FaStar />
                Top Rated
              </div>
            </div>

            {/* CTA */}
            <Link href="/products">
              <motion.button
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold shadow-xl shadow-pink-500/20 transition-all duration-300 text-sm sm:text-base"
              >
                Explore All

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:max-w-2xl">
            {loading ? (
              <ProductGridSkeleton
                count={2}
                className="!grid-cols-2"
              />
            ) : (
              <Swiper
                modules={[Autoplay]}
                spaceBetween={16}
                slidesPerView={2}
                loop={product.length > 1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },

                  1024: {
                    slidesPerView: 2.2,
                    spaceBetween: 24,
                  },
                }}
                className="!overflow-visible"
              >
                {product.map((product) => (
                  <SwiperSlide key={product._id}>
                    <motion.div
                      whileHover={{
                        y: -8,
                      }}
                      className="group relative rounded-[1.5rem] sm:rounded-[2rem] bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500"
                    >
                      {/* Image */}
                      <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.png"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        {/* Badge */}
                        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-pink-500 text-white text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-full font-bold shadow-lg">
                          AI Pick
                        </div>

                        {/* Wishlist */}
                        <button className="absolute top-3 right-3 sm:top-4 sm:right-4 h-9 w-9 sm:h-10 sm:w-10 bg-white/20 backdrop-blur-xl border border-white/10 flex items-center justify-center rounded-full text-white hover:bg-pink-500 transition-all duration-300 shadow-lg">
                          <FaHeart className="text-xs sm:text-sm" />
                        </button>

                        {/* Content */}
                        <div className="absolute bottom-0 p-3 sm:p-5 w-full">
                          {/* Rating */}
                          <div className="flex items-center text-yellow-400 text-xs sm:text-sm mb-2">
                            ★★★★★
                          </div>

                          {/* Name */}
                          <h3 className="text-sm sm:text-lg font-bold text-white line-clamp-1 leading-snug">
                            {product.name}
                          </h3>

                          {/* Price */}
                          <p className="text-lg sm:text-2xl font-black text-pink-400 mt-2">
                            ৳ {product.price}
                          </p>

                          {/* Buttons */}
                          <div className="flex gap-2 mt-4">
                            {/* View */}
                            <Link
                              href={`/products/${product._id}`}
                              className="flex-1 text-center bg-white dark:bg-gray-100 text-black py-2 rounded-xl text-xs sm:text-sm font-semibold hover:bg-gray-200 transition-all duration-300"
                            >
                              View
                            </Link>

                            {/* Add To Cart */}
                            <button
                              onClick={() =>
                                addToCart({
                                  _id: product._id,
                                  name: product.name,
                                  price: product.price,
                                  image: product.image,
                                  quantity: 1,
                                })
                              }
                              className="flex-1 flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300"
                            >
                              <FaShoppingCart className="text-xs sm:text-sm" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Hover Border */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 transition-all duration-500" />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      {/* Reusable Style */}
      <style jsx>{`
        .feature {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 10px 14px;
          border-radius: 14px;
          color: white;
          font-size: 13px;
          font-weight: 500;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .feature:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.14);
        }

        :global(.dark) .feature {
          color: white;
        }

        :global(html:not(.dark)) .feature {
          color: #111827;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(229, 231, 235, 0.8);
        }

        @media (max-width: 640px) {
          .feature {
            font-size: 12px;
            padding: 8px 12px;
          }
        }
      `}</style>
    </section>
  );
}