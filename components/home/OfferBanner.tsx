"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBolt,
  FaArrowRight,
  FaFire,
  FaTag,
} from "react-icons/fa";
import { useState } from "react";

export default function OfferBanner() {
  const [timeLeft, setTimeLeft] = useState(3600);
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-pink-700" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/30 blur-3xl rounded-full" />

      {/* Floating Shapes */}
      <div className="absolute top-10 right-20 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 left-20 w-28 h-28 bg-pink-400/10 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center p-8 md:p-14">
            {/* LEFT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/20 text-red-200 px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md mb-6">
                <FaBolt />
                Limited Time Mega Offer
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Up To{" "}
                <span className="bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text text-transparent">
                  70% OFF
                </span>
              </h2>

              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white/90">
                On Fashion, Gadgets & Lifestyle
              </h3>

              {/* Description */}
              <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl">
                Don’t miss our biggest sale of the season.
                Shop trending products with unbeatable
                discounts, premium quality, and lightning-fast
                delivery.
              </p>

              {/* Features */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
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
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center shadow-lg">
                      <FaTag className="text-white text-sm" />
                    </div>

                    <span className="text-white/90 font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Shop Now

                  <FaArrowRight className="group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  href="/flash-sale"
                  className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all duration-300"
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
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Discount Card */}
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl">
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
                    className="w-44 h-44 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex flex-col items-center justify-center shadow-[0_20px_80px_rgba(236,72,153,0.45)]"
                  >
                    <span className="text-white text-lg font-semibold">
                      SAVE
                    </span>

                    <h3 className="text-6xl font-black text-white leading-none">
                      70%
                    </h3>

                    <span className="text-white font-bold">
                      OFF
                    </span>
                  </motion.div>

                  {/* Text */}
                  <h4 className="mt-10 text-3xl font-black text-white">
                    Mega Shopping Festival
                  </h4>

                  <p className="mt-4 text-white/70 leading-relaxed">
                    Exclusive discounts on thousands of
                    products. Limited stock available.
                  </p>

                  {/* Countdown */}
                  <div className="mt-8 grid grid-cols-4 gap-3">
                    {[
                      {
                        label: "Days",
                        value: "02",
                      },
                      {
                        label: "Hours",
                        value: "18",
                      },
                      {
                        label: "Min",
                        value: "45",
                      },
                      {
                        label: "Sec",
                        value: "12",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-black/30 border border-white/10 rounded-2xl py-4"
                      >
                        <h5 className="text-2xl font-black text-white">
                          {item.value}
                        </h5>

                        <p className="text-xs text-white/60 mt-1">
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