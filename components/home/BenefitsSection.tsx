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
    bg: "bg-pink-50 dark:bg-pink-500/10",
    iconBg: "bg-pink-500",
  },

  {
    icon: <FaShieldAlt />,
    title: "Secure Payments",
    description:
      "Your transactions are encrypted and fully protected with secure checkout.",
    gradient: "from-sky-500 to-cyan-500",
    bg: "bg-sky-50 dark:bg-sky-500/10",
    iconBg: "bg-sky-500",
  },

  {
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    description:
      "Simple return policy with hassle-free refund and exchange process.",
    gradient: "from-orange-500 to-yellow-500",
    bg: "bg-orange-50 dark:bg-orange-500/10",
    iconBg: "bg-orange-500",
  },

  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Dedicated customer support team always ready to assist you anytime.",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    iconBg: "bg-violet-500",
  },

  {
    icon: <FaLock />,
    title: "Privacy Protected",
    description:
      "Your personal data remains safe with enterprise-grade protection.",
    gradient: "from-emerald-500 to-green-500",
    bg: "bg-emerald-50 dark:bg-emerald-500/10",
    iconBg: "bg-emerald-500",
  },

  {
    icon: <FaGift />,
    title: "Exclusive Offers",
    description:
      "Unlock special discounts, flash sales, and members-only deals.",
    gradient: "from-fuchsia-500 to-pink-500",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
    iconBg: "bg-fuchsia-500",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-100/60 dark:bg-pink-500/10 blur-3xl rounded-full opacity-60" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-100/60 dark:bg-sky-500/10 blur-3xl rounded-full opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* 🔥 Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span
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
            viewport={{
              once: true,
            }}
            className="inline-block bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-500/20 px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-sm"
          >
            WHY SHOP WITH US
          </motion.span>

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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight"
          >
            Built For Modern
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Online Shopping
            </span>
          </motion.h2>

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
            viewport={{
              once: true,
            }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Experience premium shopping with fast delivery, secure payments,
            customer-first support, and trusted service.
          </motion.p>
        </div>

        {/* 🔥 Benefit Cards */}
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
              }}
              className={`group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] border border-white/40 dark:border-gray-800 ${benefit.bg} backdrop-blur-xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl dark:shadow-black/30 transition-all duration-500`}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition duration-500`}
              />

              {/* 🔥 Icon */}
              <div
                className={`relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-2xl sm:rounded-3xl ${benefit.iconBg} text-white flex items-center justify-center text-2xl sm:text-3xl shadow-xl group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
              >
                {benefit.icon}
              </div>

              {/* 🔥 Content */}
              <div className="relative mt-5 sm:mt-6 lg:mt-8 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 dark:text-white leading-snug">
                  {benefit.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
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
          viewport={{
            once: true,
          }}
          className="mt-14 sm:mt-20"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-900 via-black to-slate-900 dark:from-gray-900 dark:via-black dark:to-gray-950 text-white px-5 sm:px-8 md:px-12 py-8 sm:py-10 shadow-2xl">
            {/* Glow */}
            <div className="absolute top-0 left-0 h-48 w-48 bg-pink-500/20 blur-3xl rounded-full" />

            <div className="absolute bottom-0 right-0 h-48 w-48 bg-sky-500/20 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black">
                  Trusted by Thousands
                </h3>

                <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
                  Join our growing community of happy shoppers.
                </p>
              </div>

              <Link href="/products">
                <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 hover:scale-[1.03] transition-all duration-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold shadow-xl whitespace-nowrap text-sm sm:text-base">
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}