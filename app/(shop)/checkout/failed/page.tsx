"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTimesCircle,
  FaRedoAlt,
  FaHeadset,
  FaArrowLeft,
} from "react-icons/fa";

export default function CheckoutFailedPage() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-black flex items-center justify-center px-4 py-16">
      
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 h-80 w-80 bg-red-300/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 h-80 w-80 bg-orange-300/20 blur-3xl rounded-full" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          relative z-10
          w-full max-w-2xl
          rounded-[2rem]
          border border-white/20 dark:border-white/10
          bg-white/80 dark:bg-white/5
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.12)]
          p-8 md:p-12
          text-center
        "
      >
        
        {/* 🔥 Icon */}
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-[0_20px_60px_rgba(239,68,68,0.35)]">
          <FaTimesCircle className="text-5xl" />
        </div>

        {/* 🔥 Heading */}
        <h1 className="mt-8 text-4xl md:text-5xl font-black text-gray-900 dark:text-white">
          Payment Failed
        </h1>

        {/* 🔥 Description */}
        <p className="mt-5 text-lg leading-relaxed text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
          Your payment could not be processed.
          Please try again or contact support
          if the problem continues.
        </p>

        {/* 🔥 Info Cards */}
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          
          <div
            className="
              rounded-2xl
              border border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-white/5
              p-5
            "
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-500/10 text-red-500 text-xl">
              <FaRedoAlt />
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              Retry Payment
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Try completing your payment again securely.
            </p>
          </div>

          <div
            className="
              rounded-2xl
              border border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-white/5
              p-5
            "
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 text-xl">
              <FaHeadset />
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
              Need Help?
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Contact our support team for assistance anytime.
            </p>
          </div>
        </div>

        {/* 🔥 Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            href="/checkout"
            className="
              inline-flex items-center justify-center gap-3
              rounded-2xl
              bg-gradient-to-r from-red-500 to-orange-500
              hover:scale-105
              transition-all duration-300
              px-8 py-4
              text-white font-black
              shadow-xl
            "
          >
            <FaRedoAlt />
            Try Again
          </Link>

          <Link
            href="/"
            className="
              inline-flex items-center justify-center gap-3
              rounded-2xl
              border border-gray-300 dark:border-white/10
              bg-white dark:bg-white/5
              hover:bg-gray-100 dark:hover:bg-white/10
              transition-all duration-300
              px-8 py-4
              text-gray-900 dark:text-white
              font-bold
            "
          >
            <FaArrowLeft />
            Back To Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}