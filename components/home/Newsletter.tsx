"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPaperPlane,
  FaGift,
  FaCheckCircle,
} from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-400 dark:from-slate-950 dark:via-pink-950 dark:to-orange-950" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl dark:bg-pink-500/10" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-500/10" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:py-20">
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
          className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl sm:rounded-[2.5rem] dark:border-white/10 dark:bg-white/5"
        >
          {/* Decorative Blur */}
          <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/20 blur-3xl dark:bg-white/5" />

          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10" />

          <div className="relative grid items-center gap-10 p-5 sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
            {/* LEFT */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:px-5 sm:text-sm">
                <FaGift />
                Exclusive Offers & Updates
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                Subscribe To Our Newsletter
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                Get the latest product updates, flash sale
                alerts, exclusive discounts, and premium
                shopping deals directly to your inbox.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  "Exclusive weekly discounts",
                  "Early access to flash sales",
                  "Latest fashion & tech updates",
                  "Personalized shopping offers",
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
                    className="flex items-start gap-3 text-white"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                      <FaCheckCircle className="text-xs sm:text-sm" />
                    </div>

                    <span className="text-sm font-medium text-white/90 sm:text-base">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="rounded-[2rem] border border-white/40 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-slate-900/95 sm:p-8 md:p-10">
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500 to-orange-500 shadow-xl sm:mb-8 sm:h-20 sm:w-20">
                  <FaEnvelope className="text-2xl text-white sm:text-3xl" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black leading-tight text-gray-900 dark:text-white sm:text-3xl">
                  Join 25K+ Happy Customers
                </h3>

                <p className="mt-3 leading-relaxed text-gray-500 dark:text-gray-400">
                  Subscribe now and enjoy premium shopping
                  experiences with special member-only deals.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 pr-14 text-sm text-gray-800 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-400/40 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-400 sm:text-base"
                    />

                    <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                  </div>

                  <button
                    type="submit"
                    className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(236,72,153,0.35)] sm:text-lg"
                  >
                    Subscribe Now

                    <FaPaperPlane className="transition group-hover:translate-x-1" />
                  </button>
                </form>

                {/* Small Text */}
                <p className="mt-5 text-center text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}