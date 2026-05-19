"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import {
  FaShoppingCart,
  FaUserCircle,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

import { useCartStore } from "@/store/cartStore";
import { useSearchStore } from "@/store/searchStore";
import CartDrawer from "@/components/cart/CartDrawer";
import ThemeToggle from "@/components/layout/ThemeToggle";
import BrandLogo from "@/components/layout/BrandLogo";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const [exploreOpen, setExploreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const openSearch = useSearchStore((s) => s.openSearch);

  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((a, b) => a + b.quantity, 0);

  const dashboardHref =
    (session as any)?.user?.role === "admin"
      ? "/admin/dashboard"
      : "/dashboard";

  const handleNavigation = (href: string) => {
    setExploreOpen(false);
    setProfileOpen(false);
    router.push(href);
  };

  const handleLogout = async () => {
    setProfileOpen(false);
    await signOut();
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl shadow-md dark:bg-gray-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

          {/* ✅ FIXED SINGLE LOGO */}
          <BrandLogo size="md" className="scale-95 sm:scale-100" />

          {/* SEARCH */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="flex w-full items-center rounded-2xl bg-gray-100 px-4 py-2 shadow-inner dark:bg-gray-800">
              <FaSearch className="text-gray-400 mr-2 text-sm" />
              <input
                onFocus={openSearch}
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-gray-800 outline-none dark:text-gray-100"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* 🔥 EXPLORE FULL MENU */}
            <div className="relative">
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-pink-500 dark:text-gray-300 transition"
              >
                Explore
                <motion.div animate={{ rotate: exploreOpen ? 180 : 0 }}>
                  <FaChevronDown className="text-xs" />
                </motion.div>
              </button>

              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 mt-3 w-72 rounded-2xl bg-white/90 backdrop-blur-xl p-4 shadow-2xl dark:bg-gray-900/90"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">

                      {/* Quick Links */}
                      <div>
                        <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">
                          Quick Links
                        </h4>
                        <ul className="space-y-1">
                          {[
                            ["All Products", "/products"],
                            ["Flash Sale", "/flash-sale"],
                            ["Contact", "/contact"],
                            ["About", "/about"],
                            ["FAQ", "/faq"],
                          ].map(([label, link]) => (
                            <li key={label}>
                              <button
                                onClick={() => handleNavigation(link)}
                                className="w-full text-left px-2 py-1 rounded-md text-gray-600 hover:text-pink-500 hover:bg-pink-50 dark:text-gray-300 dark:hover:bg-gray-800 transition"
                              >
                                {label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Explore */}
                      <div>
                        <h4 className="font-bold mb-2 text-gray-800 dark:text-gray-200">
                          Explore
                        </h4>
                        <ul className="space-y-1">
                          {[
                            ["Featured", "/#featured"],
                            ["New", "/#new"],
                            ["Flash", "/#flash"],
                            ["Trending", "/#trending"],
                          ].map(([label, link]) => (
                            <li key={label}>
                              <button
                                onClick={() => handleNavigation(link)}
                                className="w-full text-left px-2 py-1 rounded-md text-gray-600 hover:text-pink-500 hover:bg-pink-50 dark:text-gray-300 dark:hover:bg-gray-800 transition"
                              >
                                {label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MOBILE SEARCH */}
            <button
              onClick={openSearch}
              className="md:hidden text-lg text-gray-700 hover:text-pink-500 dark:text-gray-300"
            >
              <FaSearch />
            </button>

            <ThemeToggle />

            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative group"
            >
              <div className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/30 transition shadow-sm">
                <FaShoppingCart className="text-lg sm:text-xl text-gray-700 group-hover:text-pink-500 dark:text-gray-300" />
              </div>

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow">
                  {totalItems}
                </span>
              )}
            </button>

            {/* AUTH */}
            {!session ? (
              <button
                onClick={() => signIn()}
                className="hidden sm:block px-4 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-pink-500 to-red-500 shadow-lg hover:scale-105 hover:shadow-pink-500/30 transition"
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <div
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="cursor-pointer"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      width={34}
                      height={34}
                      alt="user"
                      className="rounded-full border-2 border-pink-500"
                    />
                  ) : (
                    <FaUserCircle className="text-2xl text-gray-700 dark:text-gray-300" />
                  )}
                </div>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-2 w-48 rounded-xl bg-white/90 backdrop-blur-xl shadow-xl dark:bg-gray-900/90"
                    >
                      <button
                        onClick={() => handleNavigation(dashboardHref)}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Dashboard
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}