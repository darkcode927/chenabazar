import Link from "next/link";
import { redirect } from "next/navigation";

import { isAdmin } from "@/lib/isAdmin";

import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaTachometerAlt,
  FaStore,
  FaChartLine,
} from "react-icons/fa";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();

  if (!admin) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      
      {/* 🔥 DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-72 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white flex-col border-r border-white/10 shadow-2xl">
        
        {/* 🔥 Logo */}
        <div className="h-24 flex items-center px-8 border-b border-white/10">
          
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center shadow-lg">
            <FaStore className="text-white text-xl" />
          </div>

          <div className="ml-4">
            <h1 className="text-2xl font-black tracking-tight">
              Chena Bazar
            </h1>

            <p className="text-xs text-gray-400 mt-1">
              Admin Dashboard
            </p>
          </div>
        </div>

        {/* 🔥 Nav */}
        <nav className="flex-1 p-5 space-y-3">
          
          <Link
            href="/admin/dashboard"
            className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500 transition">
              <FaTachometerAlt className="text-pink-400 group-hover:text-white" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Dashboard
              </p>

              <p className="text-xs text-gray-400">
                Analytics & overview
              </p>
            </div>
          </Link>

          <Link
            href="/admin/orders"
            className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition">
              <FaShoppingCart className="text-orange-400 group-hover:text-white" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Orders
              </p>

              <p className="text-xs text-gray-400">
                Customer purchases
              </p>
            </div>
          </Link>

          <Link
            href="/admin/products"
            className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 transition">
              <FaBox className="text-blue-400 group-hover:text-white" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Products
              </p>

              <p className="text-xs text-gray-400">
                Manage store items
              </p>
            </div>
          </Link>

          <Link
            href="/admin/users"
            className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 transition">
              <FaUsers className="text-emerald-400 group-hover:text-white" />
            </div>

            <div>
              <p className="font-semibold text-white">
                Users
              </p>

              <p className="text-xs text-gray-400">
                Customers & admins
              </p>
            </div>
          </Link>
        </nav>

        {/* 🔥 Bottom */}
        <div className="p-5 border-t border-white/10">
          
          <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-red-500 p-5 shadow-2xl">
            
            <div className="flex items-center gap-3">
              <FaChartLine className="text-white text-xl" />

              <div>
                <h2 className="font-bold text-white">
                  Store Growth
                </h2>

                <p className="text-xs text-pink-100 mt-1">
                  Business analytics active
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 🔥 MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 🔥 TOP HEADER */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 md:px-8 h-20 flex items-center justify-between shadow-sm">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800">
              Admin Panel
            </h2>

            <p className="text-sm text-gray-500">
              Manage your business efficiently
            </p>
          </div>

          {/* 🔥 Right */}
          <div className="flex items-center gap-4">
            
            <div className="hidden md:flex flex-col items-end">
              <p className="text-sm font-semibold text-gray-800">
                Administrator
              </p>

              <p className="text-xs text-gray-500">
                Full Access
              </p>
            </div>

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white flex items-center justify-center font-bold shadow-lg">
              A
            </div>
          </div>
        </header>

        {/* 🔥 PAGE CONTENT */}
        <main className="flex-1 p-4 md:p-8 pb-28 lg:pb-8">
          {children}
        </main>
      </div>

      {/* 🔥 MOBILE BOTTOM NAV */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        
        <div className="mx-3 mb-8 pb-6 bg-white/90 backdrop-blur-2xl border border-gray-200 shadow-2xl rounded-3xl px-2 py-3">
          
          <div className="grid grid-cols-4 gap-2">
            
            <Link
              href="/admin/dashboard"
              className="flex flex-col items-center justify-center py-2 rounded-2xl hover:bg-pink-50 transition"
            >
              <div className="w-11 h-11 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <FaTachometerAlt />
              </div>

              <span className="text-[11px] font-medium mt-1 text-gray-600">
                Dashboard
              </span>
            </Link>

            <Link
              href="/admin/orders"
              className="flex flex-col items-center justify-center py-2 rounded-2xl hover:bg-orange-50 transition"
            >
              <div className="w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <FaShoppingCart />
              </div>

              <span className="text-[11px] font-medium mt-1 text-gray-600">
                Orders
              </span>
            </Link>

            <Link
              href="/admin/products"
              className="flex flex-col items-center justify-center py-2 rounded-2xl hover:bg-blue-50 transition"
            >
              <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaBox />
              </div>

              <span className="text-[11px] font-medium mt-1 text-gray-600">
                Products
              </span>
            </Link>

            <Link
              href="/admin/users"
              className="flex flex-col items-center justify-center py-2 rounded-2xl hover:bg-emerald-50 transition"
            >
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <FaUsers />
              </div>

              <span className="text-[11px] font-medium mt-1 text-gray-600">
                Users
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}