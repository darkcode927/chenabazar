"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaShippingFast,
  FaUndoAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import Link from "next/link";

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Usually 2–5 business days across Bangladesh depending on your location and product availability.",
    icon: <FaShippingFast />,
  },
  {
    q: "Can I return a product?",
    a: "Yes, you can return eligible products within 7 days of delivery with our hassle-free return policy.",
    icon: <FaUndoAlt />,
  },
  {
    q: "Do you offer cash on delivery?",
    a: "Yes, we support Cash on Delivery (COD) nationwide for most products.",
    icon: <FaMoneyBillWave />,
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/20 dark:bg-sky-500/10 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* 🔥 HERO */}
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
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 px-5 py-2 rounded-full text-sm font-bold shadow-sm border border-pink-200/50 dark:border-pink-500/20">
            <FaQuestionCircle />
            Support & Help Center
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            Frequently Asked
            <span className="block bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about delivery, payments, returns,
            and shopping experience at Chena Bazar.
          </p>
        </motion.div>

        {/* 🔥 FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={i}
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
                  delay: i * 0.08,
                }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[2rem] border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 text-white flex items-center justify-center text-lg sm:text-xl shadow-lg flex-shrink-0">
                      {faq.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h2 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white leading-snug">
                        {faq.q}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Tap to view answer
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="text-gray-500 dark:text-gray-400 text-lg flex-shrink-0"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-6 sm:pb-7">
                        <div className="ml-16 sm:ml-[4.6rem]">
                          <div className="h-px bg-gradient-to-r from-pink-500/30 to-transparent mb-5" />

                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
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
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
              Still Need Help?
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Our support team is available 24/7 to help you with orders,
              delivery, payments, and any shopping related questions.
            </p>

            <Link href="/contact">
              <button className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-black shadow-xl">
                Contact Support
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
