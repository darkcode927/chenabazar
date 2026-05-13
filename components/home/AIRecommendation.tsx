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

import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";

type AIRecommendationProps = {
  product: Product[];
};

export default function AIRecommendation({
  product,
}: AIRecommendationProps) {
  const addToCart = useCartStore((s) => s.addToCart);

  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-pink-950 p-6 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-pink-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-sky-500/20 blur-3xl rounded-full" />

      {/* 🔥 Header */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm text-pink-200 font-semibold mb-5"
          >
            <FaRobot className="text-pink-400" />
            AI Powered Recommendations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white"
          >
            Recommended
            <span className="block bg-gradient-to-r from-pink-400 via-red-400 to-orange-300 bg-clip-text text-transparent">
              Just For You
            </span>
          </motion.h2>

          <p className="mt-6 text-gray-300 text-lg">
            Personalized picks based on your behavior, trends, and customer activity.
          </p>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="feature"><FaBolt /> Smart Matching</div>
            <div className="feature"><FaHeart /> Personalized</div>
            <div className="feature"><FaStar /> Top Rated</div>
          </div>

          {/* CTA */}
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold"
            >
              Explore All
              <FaArrowRight />
            </motion.button>
          </Link>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="w-full lg:max-w-2xl">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2}
            loop
            autoplay={{ delay: 2500 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2.2 },
            }}
          >
            {product.map((product) => (
              <SwiperSlide key={product._id}>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/10 overflow-hidden"
                >

                  {/* IMAGE */}
                  <div className="relative h-72">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    {/* BADGE */}
                    <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs px-4 py-2 rounded-full font-bold">
                      AI Pick
                    </div>

                    {/* WISHLIST */}
                    <button className="absolute top-4 right-4 h-10 w-10 bg-white/20 flex items-center justify-center rounded-full hover:bg-pink-500 transition">
                      <FaHeart />
                    </button>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 p-5 w-full">

                      <div className="flex items-center text-yellow-400 text-sm mb-2">
                        ★★★★★
                      </div>

                      <h3 className="text-lg font-bold text-white line-clamp-1">
                        {product.name}
                      </h3>

                      <p className="text-2xl font-black text-pink-400 mt-2">
                        ৳ {product.price}
                      </p>

                      {/* ACTION BUTTONS */}
                      <div className="flex gap-2 mt-4">

                        {/* VIEW */}
                        <Link
                          href={`/products/${product._id}`}
                          className="flex-1 text-center bg-white text-black py-2 rounded-xl text-sm font-semibold hover:bg-gray-200"
                        >
                          View
                        </Link>

                        {/* ADD TO CART */}
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
                          className="flex-1 flex items-center justify-center gap-2 bg-pink-500 text-white py-2 rounded-xl text-sm font-semibold hover:bg-pink-600"
                        >
                          <FaShoppingCart />
                        </button>

                      </div>
                    </div>
                  </div>
                </motion.div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 🔥 reusable style */}
      <style jsx>{`
        .feature {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.1);
          padding: 10px 14px;
          border-radius: 14px;
          color: white;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
}