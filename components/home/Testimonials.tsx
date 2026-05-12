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
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-purple-50" />

      {/* Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <FaCheckCircle />
            Trusted By Customers
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            What Our Customers Say
          </h2>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Thousands of happy customers trust Chena Bazar
            for quality products, secure shopping, and fast
            delivery.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-300/20 rounded-full blur-3xl" />

              {/* Content */}
              <div className="relative p-8">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-lg">
                    <FaQuoteRight className="text-xl" />
                  </div>
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-relaxed text-lg">
                  “{item.review}”
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-8">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-pink-100 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-black text-lg text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-sm text-pink-600 font-semibold">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
                <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-2xl" />
              </div>
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
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
              className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg p-8 text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-4xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500 font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}