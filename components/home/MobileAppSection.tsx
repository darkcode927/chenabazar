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
    <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sky-50 via-white to-indigo-50 border border-sky-100 shadow-[0_20px_80px_rgba(59,130,246,0.12)] px-5 md:px-12 py-16">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-300/20 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-14 items-center">

        {/* 🔥 LEFT CONTENT */}
        <div>

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
            className="inline-flex items-center gap-2 bg-sky-100 text-sky-600 px-5 py-2 rounded-full text-sm font-bold shadow-sm"
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
            className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight"
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
            className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl"
          >
            Enjoy a premium shopping experience with faster
            checkout, real-time order tracking, exclusive
            discounts, instant notifications, and AI-powered
            recommendations directly from your mobile device.
          </motion.p>

          {/* 🔥 Features */}
          <div className="mt-10 grid sm:grid-cols-2 gap-5">

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
                whileHover={{
                  y: -5,
                }}
                className="group bg-white/80 backdrop-blur-md border border-white/30 rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300"
              >

                <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
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
            className="mt-12 flex flex-col sm:flex-row gap-5"
          >

            {/* Apple */}
            <button className="group flex items-center gap-4 bg-black hover:bg-gray-900 text-white px-7 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">

              <div className="text-3xl">
                <FaApple />
              </div>

              <div className="text-left">
                <p className="text-xs text-gray-300">
                  Download on the
                </p>

                <h4 className="font-black text-lg">
                  App Store
                </h4>
              </div>
            </button>

            {/* Google Play */}
            <button className="group flex items-center gap-4 bg-gradient-to-r from-sky-500 to-indigo-500 hover:shadow-[0_20px_60px_rgba(59,130,246,0.35)] text-white px-7 py-4 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105">

              <div className="text-3xl">
                <FaGooglePlay />
              </div>

              <div className="text-left">
                <p className="text-xs text-sky-100">
                  Get it on
                </p>

                <h4 className="font-black text-lg">
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
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-indigo-400/20 blur-3xl rounded-full" />

          {/* Phone */}
          <div className="relative w-[320px] h-[650px] bg-black rounded-[3.5rem] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.35)] border-[8px] border-gray-900 overflow-hidden">

            {/* Screen */}
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-white">

              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop"
                alt="mobile app"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Top Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-20" />

              {/* App Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-5">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-sm text-white/80">
                        Chena Bazar App
                      </p>

                      <h3 className="text-2xl font-black mt-1">
                        Premium Shopping
                      </h3>
                    </div>

                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center shadow-xl">
                      <FaMobileAlt className="text-2xl" />
                    </div>
                  </div>

                  {/* Ratings */}
                  <div className="mt-5 flex items-center gap-3">

                    <div className="flex items-center gap-1 text-yellow-400">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="text-sm text-white/80">
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
            className="absolute top-10 -left-4 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
          >

            <p className="text-xs text-gray-500">
              Flash Sale
            </p>

            <h4 className="font-black text-red-500 text-xl">
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
            className="absolute bottom-20 -right-5 bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
          >

            <p className="text-xs text-gray-500">
              Downloads
            </p>

            <h4 className="font-black text-sky-500 text-xl">
              120K+
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}