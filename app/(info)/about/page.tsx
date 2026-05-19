"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">

      {/* 🔥 HERO */}
      <section className="relative overflow-hidden py-20 md:py-28">

        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-950 dark:to-slate-900" />

        {/* Glow */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />

        <div className="relative max-w-6xl mx-auto px-4 text-center">

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
            viewport={{
              once: true,
            }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100 px-5 py-2 text-sm font-bold text-pink-600 shadow-sm dark:border-pink-500/20 dark:bg-pink-500/10 dark:text-pink-300"
          >
            About Chena Bazar
          </motion.div>

          <motion.h1
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
            className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl"
          >
            Your Trusted
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Online Marketplace
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl"
          >
            Delivering quality, convenience, and value with a
            modern shopping experience designed for customers
            across Bangladesh.
          </motion.p>
        </div>
      </section>

      {/* 🔥 STORY */}
      <section className="relative py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4">

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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="grid items-center gap-10 lg:grid-cols-2"
          >

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">

              <div className="relative h-[280px] sm:h-[400px] lg:h-[500px]">

                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1400&auto=format&fit=crop"
                  alt="Our Story"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div>

              <div className="inline-flex rounded-full bg-pink-100 px-5 py-2 text-sm font-bold text-pink-600 dark:bg-pink-500/10 dark:text-pink-300">
                Our Story
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Building A Better Shopping Experience
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Chena Bazar started with a vision to make
                online shopping in Bangladesh more reliable,
                affordable, and enjoyable.
              </p>

              <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                We combine premium-quality products,
                customer-first service, fast delivery, and a
                smooth digital experience to create a trusted
                platform shoppers can depend on every day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔥 MISSION */}
      <section className="relative py-16 md:py-24 bg-gray-50/80 dark:bg-gray-900/40">

        <div className="max-w-7xl mx-auto px-4">

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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="grid items-center gap-10 lg:grid-cols-2"
          >

            {/* Content */}
            <div className="order-2 lg:order-1">

              <div className="inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-bold text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                Our Mission
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Customer Satisfaction Comes First
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Our mission is to empower customers with a
                seamless shopping experience by offering
                high-quality products at competitive prices
                with fast and secure delivery.
              </p>

              <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                We focus on trust, innovation, convenience,
                and long-term customer relationships while
                continuously improving our platform and
                services.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">

              <div className="relative h-[280px] sm:h-[400px] lg:h-[500px]">

                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
                  alt="Our Mission"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🔥 VISION */}
      <section className="relative py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4">

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
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="grid items-center gap-10 lg:grid-cols-2"
          >

            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">

              <div className="relative h-[280px] sm:h-[400px] lg:h-[500px]">

                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop"
                  alt="Our Vision"
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div>

              <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
                Our Vision
              </div>

              <h2 className="mt-6 text-3xl font-black sm:text-4xl">
                Shaping The Future Of E-Commerce
              </h2>

              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Our vision is to become Bangladesh’s most
                trusted and innovative e-commerce platform by
                continuously improving customer experiences
                and embracing modern technology.
              </p>

              <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                We aim to create a shopping ecosystem where
                quality, trust, speed, and customer happiness
                always remain the top priority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}