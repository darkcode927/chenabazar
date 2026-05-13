"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import ProductCard from "@/components/product/ProductCard";

import { Product } from "@/types";

import { FaBolt, FaClock, FaFire, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface FlashSaleProps {
  product: Product[];
}

export default function FlashSale({ product }: FlashSaleProps) {
  // 🔥 Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours--;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 border border-red-100 shadow-[0_20px_80px_rgba(239,68,68,0.12)] px-5 md:px-10 py-14">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-300/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl" />

      <div className="relative z-10">
        {/* 🔥 Top Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 mb-14">
          {/* Left */}
          <div>
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
              transition={{
                duration: 0.4,
              }}
              className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-5 py-2 rounded-full text-sm font-bold shadow-sm"
            >
              <FaFire />
              Limited Time Offer
            </motion.div>

            {/* Heading */}
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
                duration: 0.5,
              }}
              className="mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight"
            >
              Flash Sale
              <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Mega Discounts 🔥
              </span>
            </motion.h2>

            {/* Description */}
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
              className="mt-5 text-lg text-gray-500 max-w-2xl leading-relaxed"
            >
              Hurry up and grab your favorite products before the sale ends.
              Massive discounts available for a limited time only.
            </motion.p>
          </div>

          {/* 🔥 Countdown Card */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-white rounded-[2rem] p-6 shadow-2xl border border-red-100 min-w-[320px]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-xl">
                <FaClock />
              </div>

              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Sale Ends In
                </p>

                <h3 className="text-2xl font-black text-gray-900">
                  Countdown Timer
                </h3>
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center justify-between gap-3">
              {/* Hours */}
              <div className="flex-1 rounded-2xl bg-black text-white py-5 text-center shadow-xl">
                <h4 className="text-3xl font-black">
                  {String(timeLeft.hours).padStart(2, "0")}
                </h4>

                <p className="text-xs uppercase tracking-widest text-gray-300 mt-1">
                  Hours
                </p>
              </div>

              <span className="text-3xl font-black text-red-500">:</span>

              {/* Minutes */}
              <div className="flex-1 rounded-2xl bg-black text-white py-5 text-center shadow-xl">
                <h4 className="text-3xl font-black">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </h4>

                <p className="text-xs uppercase tracking-widest text-gray-300 mt-1">
                  Minutes
                </p>
              </div>

              <span className="text-3xl font-black text-red-500">:</span>

              {/* Seconds */}
              <div className="flex-1 rounded-2xl bg-black text-white py-5 text-center shadow-xl">
                <h4 className="text-3xl font-black">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </h4>

                <p className="text-xs uppercase tracking-widest text-gray-300 mt-1">
                  Seconds
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🔥 Sale Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 p-8 shadow-[0_20px_60px_rgba(239,68,68,0.25)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-5">
                <FaBolt />
                Exclusive Offer
              </div>

              <h3 className="text-4xl md:text-5xl font-black">Up To 70% OFF</h3>

              <p className="mt-4 text-red-100 text-lg max-w-2xl">
                Shop trending products with incredible discounts before the
                flash sale ends.
              </p>
            </div>

            <Link href="/products">
              <button className="group bg-white hover:bg-black text-black hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl font-black shadow-2xl inline-flex items-center gap-3 w-fit">
                Shop Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 🔥 Products */}
        {product.length === 0 ? (
          <div className="bg-white rounded-[2rem] p-16 text-center shadow-xl border border-red-100">
            <div className="mx-auto h-24 w-24 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-4xl">
              <FaFire />
            </div>

            <h3 className="mt-8 text-3xl font-black text-gray-800">
              No Flash Sale Products
            </h3>

            <p className="mt-4 text-gray-500 text-lg">
              Flash sale products will appear here soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {product.map((product, index) => (
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
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -10,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
