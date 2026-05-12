"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
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

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const [exploreOpen, setExploreOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const openSearch = useSearchStore((s) => s.openSearch);

  const items = useCartStore((s) => s.items);
  const totalItems = items.reduce((a, b) => a + b.quantity, 0);

  const dashboardHref =
    (session as any)?.user?.role === "admin"
      ? "/admin/dashboard"
      : "/dashboard";

  // Close dropdowns when navigating
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
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* 🔥 LEFT: LOGO */}
          <Link
            href="/"
            className="text-2xl font-black bg-linear-to-r from-pink-500 to-red-500 bg-clip-text text-transparent"
          >
            Chena Bazar
          </Link>

          {/* 🔥 CENTER: SEARCH (DESKTOP) */}
          <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-xl w-100">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              onFocus={openSearch}
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          {/* 🔥 RIGHT SIDE */}
          <div className="flex items-center gap-6">

            {/* 🔥 EXPLORE DROPDOWN */}
            <div 
              ref={exploreRef}
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
              className="relative"
            >
              <button
                onClick={() => setExploreOpen(!exploreOpen)}
                className="flex items-center gap-2 font-semibold text-gray-700 hover:text-pink-500 transition"
              >
                Explore 
                <motion.div
                  animate={{ rotate: exploreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaChevronDown className="text-sm" />
                </motion.div>
              </button>

              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-xl p-4 z-50"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">

                      {/* Quick Links */}
                      <div>
                        <h4 className="font-bold mb-2">Quick Links</h4>
                        <ul className="space-y-1">
                          <li>
                            <button
                              onClick={() => handleNavigation("/products")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              All Products
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavigation("/flash-sale")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              Flash Sale
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavigation("/contact")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              Contact
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavigation("/about")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              About
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavigation("/faq")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              FAQ
                            </button>
                          </li>
                        </ul>
                      </div>

                      {/* Explore */}
                      <div>
                        <h4 className="font-bold mb-2">Explore</h4>
                        <ul className="space-y-1">
                          <li>
                            <button
                              onClick={() => handleNavigation("/#featured")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              Featured
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavigation("/#new")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              New
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavigation("/#flash")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              Flash
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleNavigation("/#trending")}
                              className="text-gray-700 hover:text-pink-500 transition w-full text-left"
                            >
                              Trending
                            </button>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🔥 MOBILE SEARCH */}
            <button
              onClick={openSearch}
              className="md:hidden text-xl text-gray-700 hover:text-pink-500"
            >
              <FaSearch />
            </button>

            {/* 🔥 CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative group"
            >
              <FaShoppingCart className="text-2xl text-gray-700 group-hover:text-pink-500 transition" />

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            {/* 🔥 AUTH */}
            {!session ? (
              <button
                onClick={() => signIn()}
                className="bg-linear-to-r from-pink-500 to-red-500 text-white px-5 py-2 rounded-xl"
              >
                Login
              </button>
            ) : (
              <div 
                ref={profileRef}
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
                className="relative"
              >

                <div 
                  onClick={() => setProfileOpen(!profileOpen)} 
                  className="cursor-pointer hover:opacity-80 transition"
                >
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      width={36}
                      height={36}
                      alt="user"
                      className="rounded-full"
                    />
                  ) : (
                    <FaUserCircle className="text-3xl text-gray-700 hover:text-pink-500" />
                  )}
                </div>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-52 bg-white shadow-xl rounded-xl p-3 z-50"
                    >
                      <button
                        onClick={() => handleNavigation(dashboardHref)}
                        className="block w-full text-left px-4 py-2 font-semibold text-gray-700 hover:bg-pink-50 hover:text-pink-500 transition rounded-lg"
                      >
                        Dashboard
                      </button>

                      <button
                        onClick={handleLogout}
                        className="block w-full text-left mt-2 px-4 py-2 font-semibold text-red-500 hover:bg-red-50 transition rounded-lg"
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

      {/* 🔥 CART DRAWER */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}