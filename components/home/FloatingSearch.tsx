"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaMicrophone,
  FaTimes,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

import { useSearchStore } from "@/store/searchStore";
import { useRouter } from "next/navigation";

const trendingSearches = [
  "Wireless Headphone",
  "Gaming Mouse",
  "Smart Watch",
  "Sneakers",
  "Hoodie",
  "T-Shirt",
  "Pant",
  "Backpack",
];

const categories = [
  "Fashion",
  "Electronics",
  "Furniture",
  "Watches",
  "Mobile",
  "Accessories",
];

export default function FloatingSearch() {
  const { open, closeSearch } = useSearchStore();
  const [query, setQuery] = useState("");
  const router = useRouter();

  // 🔥 Search Handler
  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/products?search=${encodeURIComponent(query.trim())}`);
    closeSearch();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-999 bg-black/50 backdrop-blur-md flex items-center justify-center px-3"
        >
          {/* 🔥 Container */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-white dark:bg-gray-900 shadow-2xl"
          >
            {/* 🔥 Header (SMALLER) */}
            <div className="sticky top-0 z-20 bg-linear-to-r from-pink-500 to-red-500 px-5 py-5 text-white rounded-t-3xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold opacity-90">
                    <FaFire />
                    Smart Search
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black mt-1">
                    Find Products
                  </h2>
                </div>

                <button
                  onClick={closeSearch}
                  className="h-10 w-10 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* 🔥 Body */}
            <div className="p-5 space-y-6">
              {/* 🔍 Search Box */}
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search products..."
                  className="w-full h-12 md:h-14 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 pl-12 pr-28 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-100 dark:focus:ring-pink-900 outline-none"
                />

                {/* Right Buttons */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                  <button className="h-9 w-9 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 flex items-center justify-center">
                    <FaMicrophone />
                  </button>

                  <button
                    onClick={handleSearch}
                    className="bg-linear-to-r from-pink-500 to-red-500 text-white h-9 px-4 rounded-lg flex items-center gap-1 text-sm font-semibold"
                  >
                    Search
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              {/* 🔥 Trending */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-gray-900 dark:text-white">
                  <FaFire className="text-pink-500" />
                  Trending
                </h3>

                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setQuery(item);
                        router.push(`/products?search=${item}`);
                        closeSearch();
                      }}
                      className="px-4 py-2 text-sm rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-pink-500 hover:text-white transition"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* 🔥 Categories */}
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                  Categories
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        router.push(`/products?category=${encodeURIComponent(cat.toLowerCase())}`);
                        closeSearch();
                      }}
                      className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4 hover:shadow-md cursor-pointer transition"
                    >
                      <div className="h-10 w-10 bg-pink-100 dark:bg-pink-900/40 group-hover:bg-pink-500 text-pink-600 dark:text-pink-400 group-hover:text-white rounded-lg flex items-center justify-center mb-2">
                        <FaSearch />
                      </div>

                      <h4 className="font-semibold text-sm text-gray-800 dark:text-white">
                        {cat}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}