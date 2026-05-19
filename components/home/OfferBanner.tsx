"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaBolt, FaArrowRight, FaFire, FaTag } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState(3600);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-white to-pink-100 dark:from-black dark:via-gray-900 dark:to-pink-950 transition-colors duration-300" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400/20 dark:bg-pink-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-400/20 dark:bg-orange-500/20 blur-3xl rounded-full" />

      {/* Floating Shapes */}
      <div className="absolute top-10 right-10 sm:right-20 w-20 h-20 bg-black/5 dark:bg-white/10 rounded-full blur-xl" />

      <div className="absolute bottom-10 left-10 sm:left-20 w-28 h-28 bg-pink-400/10 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] dark:shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center p-5 sm:p-8 md:p-10 lg:p-14">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-500/20 border border-red-200 dark:border-red-400/20 text-red-600 dark:text-red-200 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md mb-5 sm:mb-6 shadow-sm">
                <FaBolt />
                Limited Time Mega Offer
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight">
                Up To{" "}
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 dark:from-pink-400 dark:to-orange-300 bg-clip-text text-transparent">
                  70% OFF
                </span>
              </h2>

              <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 dark:text-white/90 leading-snug">
                On Fashion, Gadgets & Lifestyle
              </h3>

              {/* Description */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-white/70 leading-relaxed max-w-2xl">
                Don’t miss our biggest sale of the season. Shop trending
                products with unbeatable discounts, premium quality, and
                lightning-fast delivery.
              </p>

              {/* Features */}
              <div className="mt-7 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Free Shipping",
                  "24/7 Customer Support",
                  "Secure Payment",
                  "Easy Returns",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="flex items-center gap-3 bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-3 backdrop-blur-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0">
                      <FaTag className="text-white text-sm" />
                    </div>

                    <span className="text-gray-800 dark:text-white/90 font-medium text-sm sm:text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold shadow-2xl hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base"
                >
                  Shop Now

                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  href="/flash-sale"
                  className="inline-flex items-center justify-center gap-3 bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                >
                  <FaFire />
                  View Flash Sale
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
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
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
              className="relative"
            >
              {/* Discount Card */}
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/10 backdrop-blur-2xl p-5 sm:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.08)] dark:shadow-2xl">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-pink-500/20 blur-3xl rounded-full" />

                {/* Discount */}
                <div className="relative text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex flex-col items-center justify-center shadow-[0_20px_80px_rgba(236,72,153,0.45)]"
                  >
                    <span className="text-white text-sm sm:text-lg font-semibold">
                      SAVE
                    </span>

                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none">
                      70%
                    </h3>

                    <span className="text-white text-sm sm:text-base font-bold">
                      OFF
                    </span>
                  </motion.div>

                  {/* Text */}
                  <h4 className="mt-8 sm:mt-10 text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                    Mega Shopping Festival
                  </h4>

                  <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-white/70 leading-relaxed">
                    Exclusive discounts on thousands of products. Limited stock
                    available.
                  </p>

                  {/* Countdown */}
                  <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-3">
                    {[
                      {
                        label: "Days",
                        value: String(days).padStart(2, "0"),
                      },
                      {
                        label: "Hours",
                        value: String(hours).padStart(2, "0"),
                      },
                      {
                        label: "Min",
                        value: String(minutes).padStart(2, "0"),
                      },
                      {
                        label: "Sec",
                        value: String(seconds).padStart(2, "0"),
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-black/5 dark:bg-black/30 border border-gray-200 dark:border-white/10 rounded-xl sm:rounded-2xl py-3 sm:py-4"
                      >
                        <h5 className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white">
                          {item.value}
                        </h5>

                        <p className="text-[10px] sm:text-xs text-gray-500 dark:text-white/60 mt-1">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}