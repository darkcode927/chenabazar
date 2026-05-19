"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/layout/BrandLogo";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaHome,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

/* ================================
   🔥 STICKY MOBILE NAV
================================ */
function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-gray-200 bg-white py-3 text-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100 md:hidden">
      <Link href="/" className="flex flex-col items-center text-xs">
        <FaHome />
        Home
      </Link>
      <Link href="/products" className="flex flex-col items-center text-xs">
        <FaShoppingCart />
        Shop
      </Link>
      <Link href="/cart" className="flex flex-col items-center text-xs">
        <FaShoppingCart />
        Cart
      </Link>
      <Link href="/dashboard" className="flex flex-col items-center text-xs">
        <FaUser />
        Account
      </Link>
    </div>
  );
}

/* ================================
   🔥 MAIN FOOTER
================================ */
export default function Footer() {
  const [categories, setCategories] = useState<string[]>([]);

  // 🔥 Fetch categories from DB
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: { category: string }[]) => {
        const unique = [...new Set(data.map((p) => p.category))];
        setCategories(unique);
      });
  }, []);

  return (
    <>
      <footer className="mt-20 border-t border-gray-800 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white dark:from-black dark:via-gray-950 dark:to-gray-900">
        {/* 🔥 TOP GRID */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* 🏷 BRAND */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4 [&_span]:!text-white">
              <BrandLogo size="md" href="/" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Premium online shopping platform for fashion, gadgets & lifestyle
              products.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-5">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="mailto:your@email.com">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* 🛍 DYNAMIC CATEGORIES */}
          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link href={`/category/${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔗 QUICK LINKS */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/flash-sale">Flash Sale</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* 🔥 EXPLORE */}
          <div>
            <h3 className="font-bold mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/#featured">Featured</Link>
              </li>
              <li>
                <Link href="/#new">New Arrivals</Link>
              </li>
              <li>
                <Link href="/#flash">Flash Sale</Link>
              </li>
              <li>
                <Link href="/#trending">Trending</Link>
              </li>
            </ul>
          </div>

          {/* 📩 NEWSLETTER */}
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Get latest deals & updates
            </p>

            <div className="flex">
              <input
                placeholder="Email"
                className="w-full px-3 py-2 bg-gray-800 text-white rounded-l-lg outline-none"
              />
              <button className="bg-pink-500 px-4 rounded-r-lg">Join</button>
            </div>
          </div>
        </div>

        {/* 💳 PAYMENT METHODS */}
        <div className="border-t border-gray-800 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Chena Bazar
            </p>

            <div className="flex gap-4 mb-2.5 pb-8 mr-1.5 pr-2 text-sm">
              <span className="bg-white text-black px-3 py-1 rounded">
                bKash
              </span>
              <span className="bg-orange-500 px-3 py-1 rounded">Nagad</span>
              <span className="bg-blue-500 px-3 py-1 rounded">Visa</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 🔥 MOBILE NAV */}
      <MobileBottomNav />
    </>
  );
}
