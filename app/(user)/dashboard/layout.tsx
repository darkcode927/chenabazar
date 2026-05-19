"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import BrandLogo from "@/components/layout/BrandLogo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { theme } from "@/lib/theme";

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
  { href: "/dashboard", label: "Dashboard", icon: FaHome },
  { href: "/dashboard/profile", label: "Profile", icon: FaUser },
  { href: "/dashboard/orders", label: "Orders", icon: FaShoppingBag },
  { href: "/dashboard/wishlist", label: "Wishlist", icon: FaHeart },
  { href: "/dashboard/activity", label: "Activity", icon: FaHistory },
  { href: "/dashboard/settings", label: "Settings", icon: FaCog },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className={theme.userShell}>
      <aside className={theme.userSidebar}>
        <div className="flex items-center justify-between border-b border-gray-200/80 p-5 dark:border-gray-800">
          <BrandLogo size="sm" href="/dashboard" />
          <ThemeToggle />
        </div>

        <div className="flex flex-col items-center border-b border-gray-200/80 p-6 text-center dark:border-gray-800">
          <Image
            src={session?.user?.image || "/user.png"}
            alt="user"
            width={90}
            height={90}
            className="rounded-full border-4 border-sky-200 shadow-lg dark:border-sky-800"
          />
          <h2 className={`mt-4 text-lg font-bold ${theme.heading}`}>
            {session?.user?.name}
          </h2>
          <p className={`text-sm ${theme.subtext}`}>{session?.user?.email}</p>
        </div>

        <nav className="flex-1 space-y-2 p-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-sky-50 hover:text-sky-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-sky-400"
                }`}
              >
                <Icon />
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-gray-200/80 p-4 dark:border-gray-800">
          <button
            type="button"
            onClick={() => signOut()}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-50 py-4 font-bold text-red-600 transition hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-4 pb-24 md:p-8">{children}</main>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-950 md:hidden">
        <div className="grid grid-cols-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center py-3 text-[10px] ${
                  active
                    ? "text-sky-600 dark:text-sky-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                <Icon className="mb-1 text-lg" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
