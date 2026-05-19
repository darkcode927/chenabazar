"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";

import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

import BrandLogo from "@/components/layout/BrandLogo";
import Spinner from "@/components/ui/Spinner";
import { theme } from "@/lib/theme";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const res = await signIn("credentials", {
      email: form.email.toLowerCase(),
      password: form.password,
      redirect: false,
    });

    if (res?.error) {
      alert(res.error);

      setLoading(false);

      return;
    }

    router.replace("/");
  };

  return (
    <div
      className="
        relative flex min-h-screen items-center justify-center
        overflow-hidden
        bg-gradient-to-br
        from-pink-100
        via-white
        to-orange-50
        px-4 py-10
        dark:from-gray-950
        dark:via-gray-900
        dark:to-black
      "
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl dark:bg-pink-500/10" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl dark:bg-orange-500/10" />

      {/* 🔥 Card */}
      <div
        className={`
          relative z-10
          w-full max-w-md
          rounded-[2rem]
          border border-white/50 dark:border-white/10
          bg-white/80 dark:bg-gray-900/80
          backdrop-blur-2xl
          p-6 sm:p-8
          shadow-[0_20px_80px_rgba(0,0,0,0.12)]
          dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
        `}
      >
        {/* 🔥 Logo */}
        <div className="flex justify-center">
          <BrandLogo size="lg" href="/" />
        </div>

        {/* 🔥 Heading */}
        <div className="mt-6 text-center">
          <h1
            className="
              text-3xl sm:text-4xl
              font-black
              text-gray-900 dark:text-white
            "
          >
            Welcome Back
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400">
            Login to continue shopping on Chena Bazar
          </p>
        </div>

        {/* 🔥 Form */}
        <div className="mt-8 space-y-5">
          {/* Email */}
          <div className="relative">
            <FaEnvelope
              className="
                absolute left-5 top-1/2 -translate-y-1/2
                text-gray-400 dark:text-gray-500
              "
            />

            <input
              type="email"
              placeholder="Email address"
              className="
                h-14 w-full rounded-2xl
                border border-gray-200 dark:border-white/10
                bg-white dark:bg-gray-950/50
                pl-12 pr-4
                text-gray-900 dark:text-white
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                outline-none
                transition-all duration-300
                focus:border-pink-500
                focus:ring-4 focus:ring-pink-500/20
              "
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock
              className="
                absolute left-5 top-1/2 -translate-y-1/2
                text-gray-400 dark:text-gray-500
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
                h-14 w-full rounded-2xl
                border border-gray-200 dark:border-white/10
                bg-white dark:bg-gray-950/50
                pl-12 pr-4
                text-gray-900 dark:text-white
                placeholder:text-gray-400 dark:placeholder:text-gray-500
                outline-none
                transition-all duration-300
                focus:border-pink-500
                focus:ring-4 focus:ring-pink-500/20
              "
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />
          </div>

          {/* 🔥 Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="
              group flex h-14 w-full items-center justify-center gap-3
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              via-rose-500
              to-orange-500
              text-white
              font-bold
              shadow-xl
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_20px_50px_rgba(236,72,153,0.35)]
              disabled:cursor-not-allowed
              disabled:opacity-70
            "
          >
            {loading ? (
              <Spinner
                size="sm"
                className="border-white border-t-transparent"
              />
            ) : (
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            )}

            {loading ? "Signing in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-white/10" />
            </div>

            <div className="relative flex justify-center">
              <span
                className="
                  bg-white px-4 text-sm text-gray-500
                  dark:bg-gray-900 dark:text-gray-400
                "
              >
                or continue with
              </span>
            </div>
          </div>

          {/* 🔥 Google Button */}
          <button
            type="button"
            onClick={() => signIn("google")}
            className="
              flex h-14 w-full items-center justify-center gap-3
              rounded-2xl
              border border-gray-200 dark:border-white/10
              bg-white dark:bg-gray-950/50
              text-gray-800 dark:text-white
              font-semibold
              shadow-sm
              transition-all duration-300
              hover:bg-gray-50
              dark:hover:bg-white/5
              hover:shadow-lg
            "
          >
            <FcGoogle size={24} />

            Continue with Google
          </button>
        </div>

        {/* 🔥 Footer */}
        <p
          className="
            mt-8 text-center text-sm
            text-gray-500 dark:text-gray-400
          "
        >
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="
              font-bold
              text-pink-600 dark:text-pink-400
              hover:underline
            "
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}