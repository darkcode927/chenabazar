"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
  FaLock,
  FaGift,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaShippingFast />,
    title: "Free Fast Delivery",
    description:
      "Enjoy lightning-fast nationwide delivery on all eligible orders.",
    gradient: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    iconBg: "bg-pink-500",
  },

  {
    icon: <FaShieldAlt />,
    title: "Secure Payments",
    description:
      "Your transactions are encrypted and fully protected with secure checkout.",
    gradient: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50",
    iconBg: "bg-sky-500",
  },

  {
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    description:
      "Simple return policy with hassle-free refund and exchange process.",
    gradient: "from-orange-500 to-yellow-500",
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
  },

  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Dedicated customer support team always ready to assist you anytime.",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    iconBg: "bg-violet-500",
  },

  {
    icon: <FaLock />,
    title: "Privacy Protected",
    description:
      "Your personal data remains safe with enterprise-grade protection.",
    gradient: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-500",
  },

  {
    icon: <FaGift />,
    title: "Exclusive Offers",
    description:
      "Unlock special discounts, flash sales, and members-only deals.",
    gradient: "from-fuchsia-500 to-pink-500",
    bg: "bg-fuchsia-50",
    iconBg: "bg-fuchsia-500",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100 blur-3xl rounded-full opacity-50" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100 blur-3xl rounded-full opacity-50" />

      <div className="relative z-10">
        {/* 🔥 Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold"
          >
            WHY SHOP WITH US
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl md:text-5xl font-black text-gray-900 leading-tight"
          >
            Built For Modern
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Online Shopping
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-lg text-gray-500 leading-relaxed"
          >
            Experience premium shopping with fast delivery, secure payments,
            customer-first support, and trusted service.
          </motion.p>
        </div>

        {/* 🔥 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/40 ${benefit.bg} backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition duration-500`}
              />

              {/* 🔥 Icon */}
              <div
                className={`relative h-20 w-20 rounded-3xl ${benefit.iconBg} text-white flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
              >
                {benefit.icon}
              </div>

              {/* 🔥 Content */}
              <div className="relative mt-8">
                <h3 className="text-2xl font-black text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* 🔥 Hover Border */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${benefit.gradient} group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </div>

        {/* 🔥 Bottom CTA */}
        <motion.div
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
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-slate-900 to-black text-white px-8 md:px-12 py-8 rounded-[2rem] shadow-2xl">
            <div className="text-left">
              <h3 className="text-3xl font-black">Trusted by Thousands</h3>

              <p className="text-gray-300 mt-2">
                Join our growing community of happy shoppers.
              </p>
            </div>

            <Link href="/products">
              <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-xl">
                Start Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
