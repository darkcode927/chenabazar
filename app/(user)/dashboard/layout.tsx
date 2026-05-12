"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import {
  FaHome,
  FaUser,
  FaShoppingBag,
  FaHeart,
  FaCog,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";

const navLinks = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: FaHome,
  },
  {
    href: "/dashboard/profile",
    label: "Profile",
    icon: FaUser,
  },
  {
    href: "/dashboard/orders",
    label: "Orders",
    icon: FaShoppingBag,
  },
  {
    href: "/dashboard/wishlist",
    label: "Wishlist",
    icon: FaHeart,
  },
  {
    href: "/dashboard/activity",
    label: "Activity",
    icon: FaHistory,
  },
  {
    href: "/dashboard/settings",
    label: "Settings",
    icon: FaCog,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-blue-100 flex">

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 bg-white/80 backdrop-blur-xl border-r shadow-2xl flex-col">

        <div className="p-6 border-b">
          <h1 className="text-3xl font-black bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
            Chena Bazar
          </h1>
        </div>

        <div className="p-6 flex flex-col items-center text-center border-b">
          <Image
            src={session?.user?.image || "/user.png"}
            alt="user"
            width={90}
            height={90}
            className="rounded-full border-4 border-sky-200 shadow-lg"
          />

          <h2 className="mt-4 font-bold text-lg text-gray-800">
            {session?.user?.name}
          </h2>

          <p className="text-sm text-gray-500">
            {session?.user?.email}
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;

            const active =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-semibold ${
                  active
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                }`}
              >
                <Icon />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={() => signOut()}
            className="w-full flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 text-red-600 py-4 rounded-2xl font-bold transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-4 md:p-8 pb-24">
        {children}
      </main>

      {/* Mobile Nav */}
      <div className="fixed mb-12 pb-6 bottom-0 left-0 right-0 md:hidden bg-white border-t shadow-2xl z-50">
        <div className="grid grid-cols-6">
          {navLinks.map((link) => {
            const Icon = link.icon;

            const active =
              pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center py-3 text-xs ${
                  active
                    ? "text-sky-600"
                    : "text-gray-500"
                }`}
              >
                <Icon className="text-lg mb-1" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}