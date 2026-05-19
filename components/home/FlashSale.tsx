"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import ProductCard from "@/components/product/ProductCard";

import {
  FaBolt,
  FaClock,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

import { useProducts } from "@/hooks/useProducts";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { PRODUCT_GRID_CLASS } from "@/lib/product-grid";

export default function FlashSale() {
  const { products: allProducts, loading } = useProducts();

  const flashItems = allProducts
    .filter((p) => p.flashSale)
    .slice(0, 4);

  const product =
    flashItems.length > 0
      ? flashItems
      : allProducts.slice(0, 4);

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
    <section
      className="
        relative overflow-hidden rounded-[2.5rem]
        border border-red-100/70 dark:border-red-900/30 
        bg-gradient-to-br
        from-red-50
        via-pink-50
        to-orange-50
        dark:from-gray-950
        dark:via-gray-900
        dark:to-black
        shadow-[0_20px_80px_rgba(239,68,68,0.12)]
        dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        px-4 sm:px-6 md:px-10
        py-12 md:py-14
      "
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-300/20 dark:bg-red-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">

        {/* 🔥 Top Header */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 mb-14">

          {/* LEFT */}
          <div className="max-w-3xl">

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
              className="
                inline-flex items-center gap-2
                bg-red-100 dark:bg-red-500/10
                text-red-600 dark:text-red-400
                px-5 py-2 rounded-full
                text-sm font-bold
                shadow-sm border border-red-200/50 dark:border-red-500/20
              "
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
              className="
                mt-6
                text-4xl md:text-5xl
                font-black
                text-gray-900 dark:text-white
                leading-tight
              "
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
              className="
                mt-5
                text-base sm:text-lg
                text-gray-600 dark:text-gray-400
                max-w-2xl
                leading-relaxed
              "
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
            className="
              w-full xl:w-auto
              bg-white/80 dark:bg-gray-900/80
              backdrop-blur-xl
              rounded-[2rem]
              p-5 sm:p-6
              shadow-2xl
              border border-white/60 dark:border-gray-800
              min-w-full sm:min-w-[320px]
            "
          >
            <div className="flex items-center gap-3 mb-6">

              <div className="
                h-14 w-14 rounded-2xl
                bg-gradient-to-r from-red-500 to-pink-500
                flex items-center justify-center
                text-white text-xl
                shadow-xl
              ">
                <FaClock />
              </div>

              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                  Sale Ends In
                </p>

                <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                  Countdown Timer
                </h3>
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center justify-between gap-2 sm:gap-3">

              {/* Hours */}
              <div className="
                flex-1 rounded-2xl
                bg-black dark:bg-gray-950
                text-white
                py-4 sm:py-5
                text-center
                shadow-xl
                border border-white/5
              ">
                <h4 className="text-2xl sm:text-3xl font-black">
                  {String(timeLeft.hours).padStart(2, "0")}
                </h4>

                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mt-1">
                  Hours
                </p>
              </div>

              <span className="text-2xl sm:text-3xl font-black text-red-500">
                :
              </span>

              {/* Minutes */}
              <div className="
                flex-1 rounded-2xl
                bg-black dark:bg-gray-950
                text-white
                py-4 sm:py-5
                text-center
                shadow-xl
                border border-white/5
              ">
                <h4 className="text-2xl sm:text-3xl font-black">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </h4>

                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mt-1">
                  Minutes
                </p>
              </div>

              <span className="text-2xl sm:text-3xl font-black text-red-500">
                :
              </span>

              {/* Seconds */}
              <div className="
                flex-1 rounded-2xl
                bg-black dark:bg-gray-950
                text-white
                py-4 sm:py-5
                text-center
                shadow-xl
                border border-white/5
              ">
                <h4 className="text-2xl sm:text-3xl font-black">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </h4>

                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-300 mt-1">
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
          className="
            mb-12 overflow-hidden rounded-[2rem]
            bg-gradient-to-r
            from-red-500
            via-pink-500
            to-orange-500
            p-6 sm:p-8
            shadow-[0_20px_60px_rgba(239,68,68,0.25)]
          "
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

            <div className="text-white">

              <div className="
                inline-flex items-center gap-2
                bg-white/20
                backdrop-blur-md
                px-4 py-2
                rounded-full
                text-sm font-bold
                mb-5
                border border-white/20
              ">
                <FaBolt />
                Exclusive Offer
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
                Up To 70% OFF
              </h3>

              <p className="mt-4 text-red-100 text-base sm:text-lg max-w-2xl">
                Shop trending products with incredible discounts before the
                flash sale ends.
              </p>
            </div>

            <Link href="/products">
              <button
                className="
                  group
                  bg-white hover:bg-black
                  text-black hover:text-white
                  transition-all duration-300
                  hover:scale-105
                  px-7 py-4
                  rounded-2xl
                  font-black
                  shadow-2xl
                  inline-flex items-center gap-3
                  w-fit
                "
              >
                Shop Now

                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* 🔥 Products */}
        {loading ? (
          <ProductGridSkeleton count={4} />
        ) : product.length === 0 ? (
          <div
            className="
              rounded-[2rem]
              border border-red-100 dark:border-red-900/30
              bg-white dark:bg-gray-900
              p-10 sm:p-16
              text-center
              shadow-xl
            "
          >
            <div className="
              mx-auto h-24 w-24
              rounded-full
              bg-red-100 dark:bg-red-500/10
              flex items-center justify-center
              text-red-500
              text-4xl
            ">
              <FaFire />
            </div>

            <h3 className="mt-8 text-3xl font-black text-gray-800 dark:text-white">
              No Flash Sale Products
            </h3>

            <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
              Flash sale products will appear here soon.
            </p>
          </div>
        ) : (
          <motion.div className={PRODUCT_GRID_CLASS}>
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
                className="will-change-transform"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}