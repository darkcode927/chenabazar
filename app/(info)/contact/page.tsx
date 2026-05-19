"use client";

import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="relative overflow-hidden bg-white py-16 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white md:py-24">

      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/70 via-white to-sky-50/70 dark:from-gray-950 dark:via-gray-950 dark:to-slate-900" />

      {/* Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />

      <div className="relative max-w-7xl mx-auto px-4">

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
          viewport={{
            once: true,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100 px-5 py-2 text-sm font-bold text-pink-600 shadow-sm dark:border-pink-500/20 dark:bg-pink-500/10 dark:text-pink-300">
            Contact Chena Bazar
          </div>

          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Get In
            <span className="block bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Touch With Us
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            Have questions, feedback, or need support?
            Our team is always ready to help you anytime.
          </p>
        </motion.div>

        {/* 🔥 CONTENT */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* 🔥 INFO */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >

            <div>
              <h2 className="text-3xl font-black sm:text-4xl">
                Let’s Start A Conversation
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                Whether you need help with an order, product,
                delivery, or partnership inquiry — we’re here
                for you.
              </p>
            </div>

            <div className="space-y-5">
              <Info
                icon={<FaPhoneAlt />}
                title="Call Us"
                value="+880 1234-567890"
              />

              <Info
                icon={<FaEnvelope />}
                title="Email Address"
                value="support@chenabazar.com"
              />

              <Info
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Dhaka, Bangladesh"
              />
            </div>

            {/* Extra Card */}
            <div className="rounded-[2rem] border border-white/40 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/70">

              <h3 className="text-2xl font-black">
                Customer Support
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300">
                Our support team is available 24/7 to ensure
                you enjoy a smooth and reliable shopping
                experience.
              </p>
            </div>
          </motion.div>

          {/* 🔥 FORM */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-white/80 p-6 shadow-2xl backdrop-blur-2xl dark:border-gray-800 dark:bg-gray-900/80 md:p-10"
          >

            {/* Glow */}
            <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10" />

            <div className="relative">

              <div className="mb-8">

                <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-600 dark:bg-sky-500/10 dark:text-sky-300">
                  <FaPaperPlane />
                  Send Message
                </div>

                <h2 className="mt-5 text-3xl font-black">
                  We’d Love To Hear From You
                </h2>

                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  Fill out the form below and we’ll get back
                  to you as soon as possible.
                </p>
              </div>

              <form className="space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 text-gray-800 outline-none transition-all duration-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-pink-500 dark:focus:ring-pink-500/30"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 text-gray-800 outline-none transition-all duration-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-pink-500 dark:focus:ring-pink-500/30"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Your Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-800 outline-none transition-all duration-300 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-pink-500 dark:focus:ring-pink-500/30"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(236,72,153,0.35)]"
                >
                  Send Message

                  <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* 🔥 MAP */}
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
          className="mt-20 overflow-hidden rounded-[2rem] border border-gray-200 shadow-2xl dark:border-gray-800"
        >

          <iframe
            src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[300px] w-full md:h-[450px]"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="group flex items-center gap-5 rounded-[2rem] border border-white/40 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900/70"
    >

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <div>
        <p className="text-lg font-black text-gray-900 dark:text-white">
          {title}
        </p>

        <p className="mt-1 text-gray-600 dark:text-gray-300">
          {value}
        </p>
      </div>
    </motion.div>
  );
}