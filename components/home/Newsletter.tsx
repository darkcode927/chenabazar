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
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-500 to-orange-400" />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/30 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 py-20">
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
          className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl"
        >
          {/* Decorative Blur */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink-300/20 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 md:p-14">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md mb-6">
                <FaGift />
                Exclusive Offers & Updates
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Subscribe To Our Newsletter
              </h2>

              <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl">
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
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <FaCheckCircle className="text-sm" />
                    </div>

                    <span className="text-white/90 font-medium">
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
              className="relative"
            >
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-2xl">
                {/* Icon */}
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center shadow-xl mb-8">
                  <FaEnvelope className="text-white text-3xl" />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black text-gray-900">
                  Join 25K+ Happy Customers
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  Subscribe now and enjoy premium shopping
                  experiences with special member-only deals.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-5">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full h-14 rounded-2xl border border-gray-200 bg-gray-50 px-5 pr-14 text-gray-800 outline-none focus:ring-2 focus:ring-pink-400 transition"
                    />

                    <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>

                  <button
                    type="submit"
                    className="group w-full h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Subscribe Now

                    <FaPaperPlane className="group-hover:translate-x-1 transition" />
                  </button>
                </form>

                {/* Small Text */}
                <p className="mt-5 text-sm text-gray-400 text-center">
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