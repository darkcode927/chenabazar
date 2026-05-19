"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import {
  FaApple,
  FaGooglePlay,
  FaMobileAlt,
  FaBell,
  FaShippingFast,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

export default function MobileAppSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-sky-100/70 bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-4 py-14 shadow-[0_20px_80px_rgba(59,130,246,0.12)] dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 sm:px-6 md:px-10 lg:px-12 lg:py-20">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl dark:bg-indigo-500/10" />

      <div className="relative z-10 grid items-center gap-14 lg:grid-cols-2">
        {/* 🔥 LEFT CONTENT */}
        <div className="order-2 lg:order-1">
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
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-sky-100/80 px-4 py-2 text-xs font-bold text-sky-700 shadow-sm backdrop-blur-xl dark:border-sky-500/20 dark:bg-sky-500/10 dark:text-sky-300 sm:px-5 sm:text-sm"
          >
            <FaMobileAlt />
            Mobile Shopping Experience
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
            viewport={{ once: true }}
            className="mt-5 text-3xl font-black leading-tight text-gray-900 dark:text-white sm:text-4xl md:mt-6 md:text-5xl lg:text-6xl"
          >
            Shop Faster
            <span className="block bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              With Our App 📱
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
            viewport={{ once: true }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:mt-6"
          >
            Enjoy a premium shopping experience with faster
            checkout, real-time order tracking, exclusive
            discounts, instant notifications, and AI-powered
            recommendations directly from your mobile device.
          </motion.p>

          {/* 🔥 Features */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:mt-10">
            {[
              {
                icon: <FaShippingFast />,
                title: "Fast Delivery",
                desc: "Track your order live",
              },
              {
                icon: <FaBell />,
                title: "Instant Alerts",
                desc: "Sale & order notifications",
              },
              {
                icon: <FaShieldAlt />,
                title: "Secure Checkout",
                desc: "100% safe payment system",
              },
              {
                icon: <FaStar />,
                title: "Exclusive Deals",
                desc: "Special app-only discounts",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                }}
                className="group rounded-[1.5rem] border border-white/40 bg-white/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-lg text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-lg font-black text-gray-900 dark:text-white sm:mt-5 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 🔥 App Buttons */}
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
            viewport={{ once: true }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5 md:mt-12"
          >
            {/* Apple */}
            <button className="group flex items-center justify-center gap-4 rounded-2xl bg-black px-6 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-gray-900 sm:justify-start sm:px-7">
              <div className="text-3xl">
                <FaApple />
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-300">
                  Download on the
                </p>

                <h4 className="text-lg font-black">
                  App Store
                </h4>
              </div>
            </button>

            {/* Google Play */}
            <button className="group flex items-center justify-center gap-4 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-4 text-white shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(59,130,246,0.35)] sm:justify-start sm:px-7">
              <div className="text-3xl">
                <FaGooglePlay />
              </div>

              <div className="text-left">
                <p className="text-xs text-sky-100">
                  Get it on
                </p>

                <h4 className="text-lg font-black">
                  Google Play
                </h4>
              </div>
            </button>
          </motion.div>
        </div>

        {/* 🔥 RIGHT PHONE MOCKUP */}
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
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="relative order-1 flex justify-center lg:order-2"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-indigo-400/20 blur-3xl" />

          {/* Phone */}
          <div className="relative h-[520px] w-[260px] overflow-hidden rounded-[3rem] border-[6px] border-gray-900 bg-black p-2 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:h-[600px] sm:w-[300px] sm:border-[8px] lg:h-[650px] lg:w-[320px]">
            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 sm:rounded-[3rem]">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
                alt="mobile app"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Top Notch */}
              <div className="absolute top-3 left-1/2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black sm:h-7 sm:w-32" />

              {/* App Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6">
                <div className="rounded-[1.75rem] border border-white/20 bg-white/15 p-4 backdrop-blur-xl sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/80 sm:text-sm">
                        Chena Bazar App
                      </p>

                      <h3 className="mt-1 text-xl font-black sm:text-2xl">
                        Premium Shopping
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 shadow-xl sm:h-14 sm:w-14">
                      <FaMobileAlt className="text-xl sm:text-2xl" />
                    </div>
                  </div>

                  {/* Ratings */}
                  <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-3">
                    <div className="flex items-center gap-1 text-sm text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="text-xs text-white/80 sm:text-sm">
                      4.9 App Rating
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute left-0 top-6 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-slate-900 sm:left-2 sm:top-10 sm:p-4"
          >
            <p className="text-[10px] text-gray-500 dark:text-gray-400 sm:text-xs">
              Flash Sale
            </p>

            <h4 className="text-lg font-black text-red-500 sm:text-xl">
              70% OFF
            </h4>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute bottom-16 right-0 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-slate-900 sm:-right-2 sm:bottom-20 sm:p-4"
          >
            <p className="text-[10px] text-gray-500 dark:text-gray-400 sm:text-xs">
              Downloads
            </p>

            <h4 className="text-lg font-black text-sky-500 sm:text-xl">
              120K+
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}