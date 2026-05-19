"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaQuoteRight,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Verified Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    review:
      "Absolutely amazing shopping experience! The delivery was super fast and the product quality exceeded my expectations.",
  },
  {
    id: 2,
    name: "Jamil Hassan",
    role: "Premium Customer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    review:
      "Chena Bazar feels like a real premium e-commerce platform. Smooth UI, trusted payment, and excellent customer support.",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Fashion Enthusiast",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    review:
      "I love the trendy collections and beautiful product presentation. Shopping here feels modern and luxurious.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50/70 to-purple-50/70 dark:from-gray-950 dark:via-pink-950/10 dark:to-purple-950/10 transition-colors duration-300" />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-500/20 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-sm">
            <FaCheckCircle />
            Trusted By Customers
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            What Our Customers Say
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Thousands of happy customers trust Chena Bazar
            for quality products, secure shopping, and fast
            delivery.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-gray-200/70 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl dark:shadow-black/30 hover:shadow-2xl transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative p-5 sm:p-6 lg:p-8">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="flex gap-1 text-yellow-400 text-sm sm:text-base">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-lg">
                    <FaQuoteRight className="text-lg sm:text-xl" />
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg">
                  “{item.review}”
                </p>

                {/* User */}
                <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-pink-100 dark:border-pink-500/20 shadow-md shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-base sm:text-lg text-gray-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-pink-600 dark:text-pink-400 font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-2xl" />
              </div>

              {/* Bottom Border Glow */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="mt-14 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            {
              title: "50K+",
              subtitle: "Happy Customers",
            },
            {
              title: "99%",
              subtitle: "Positive Reviews",
            },
            {
              title: "24/7",
              subtitle: "Customer Support",
            },
            {
              title: "Fast",
              subtitle: "Nationwide Delivery",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-[24px] sm:rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/70 dark:border-gray-800 shadow-lg dark:shadow-black/20 p-5 sm:p-8 text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {item.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}