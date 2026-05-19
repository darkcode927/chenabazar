import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { isAdmin } from "@/lib/isAdmin";
import BrandLogo from "@/components/layout/BrandLogo";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { theme } from "@/lib/theme";

import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaTachometerAlt,
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
    <div className={theme.adminShell}>
      <aside className="hidden w-72 flex-col border-r border-white/10 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white shadow-2xl lg:flex dark:border-gray-800">
        <div className="flex h-24 items-center border-b border-white/10 px-6">
          <BrandLogo href="/admin/dashboard" size="md" />
        </div>

        <nav className="flex-1 space-y-3 p-5">
          <AdminNavLink
            href="/admin/dashboard"
            icon={<FaTachometerAlt />}
            title="Dashboard"
            desc="Analytics & overview"
            color="pink"
          />
          <AdminNavLink
            href="/admin/orders"
            icon={<FaShoppingCart />}
            title="Orders"
            desc="Customer purchases"
            color="orange"
          />
          <AdminNavLink
            href="/admin/products"
            icon={<FaBox />}
            title="Products"
            desc="Manage store items"
            color="blue"
          />
          <AdminNavLink
            href="/admin/users"
            icon={<FaUsers />}
            title="Users"
            desc="Customers & admins"
            color="emerald"
          />
        </nav>

        <div className="border-t border-white/10 p-5">
          <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-red-500 p-5 shadow-2xl">
            <div className="flex items-center gap-3">
              <FaChartLine className="text-xl text-white" />
              <div>
                <h2 className="font-bold text-white">Store Growth</h2>
                <p className="mt-1 text-xs text-pink-100">
                  Business analytics active
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className={theme.adminHeader}>
          <div>
            <h2 className={`text-xl font-black md:text-2xl ${theme.heading}`}>
              Admin Panel
            </h2>
            <p className={`text-sm ${theme.subtext}`}>
              Manage your business efficiently
            </p>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden flex-col items-end md:flex">
              <p className="text-sm font-semibold dark:text-gray-200">
                Administrator
              </p>
              <p className={`text-xs ${theme.subtext}`}>Full Access</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 font-bold text-white shadow-lg">
              A
            </div>
          </div>
        </header>

        <main className={theme.adminMain}>{children}</main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="mx-3 mb-8 rounded-3xl border border-gray-200 bg-white/90 px-2 py-3 shadow-2xl backdrop-blur-2xl dark:border-gray-700 dark:bg-gray-900/95">
          <div className="grid grid-cols-4 gap-2">
            <MobileAdminLink href="/admin/dashboard" icon={<FaTachometerAlt />} label="Dashboard" bg="pink" />
            <MobileAdminLink href="/admin/orders" icon={<FaShoppingCart />} label="Orders" bg="orange" />
            <MobileAdminLink href="/admin/products" icon={<FaBox />} label="Products" bg="blue" />
            <MobileAdminLink href="/admin/users" icon={<FaUsers />} label="Users" bg="emerald" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminNavLink({
  href,
  icon,
  title,
  desc,
  color,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  desc: string;
  color: "pink" | "orange" | "blue" | "emerald";
}) {
  const colors = {
    pink: "bg-pink-500/10 text-pink-400 group-hover:bg-pink-500",
    orange: "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500",
    blue: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500",
    emerald: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500",
  };

  return (
    <Link
      href={href}
      className="group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-white/10"
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl transition group-hover:text-white ${colors[color]}`}
      >
        {icon}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </Link>
  );
}

function MobileAdminLink({
  href,
  icon,
  label,
  bg,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  bg: "pink" | "orange" | "blue" | "emerald";
}) {
  const bgMap = {
    pink: "bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400",
    orange: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    emerald: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  };

  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center rounded-2xl py-2 transition hover:bg-pink-50 dark:hover:bg-gray-800"
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${bgMap[bg]}`}>
        {icon}
      </div>
      <span className="mt-1 text-[11px] font-medium text-gray-600 dark:text-gray-400">
        {label}
      </span>
    </Link>
  );
}
