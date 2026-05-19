"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

import BrandLogo from "@/components/layout/BrandLogo";
import Spinner from "@/components/ui/Spinner";
import { theme } from "@/lib/theme";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setLoading(false);
        return alert("Register failed");
      }

      // 🔥 AUTO LOGIN AFTER REGISTER
      const signInRes = await signIn("credentials", {
        email: form.email.toLowerCase(),
        password: form.password,
        redirect: false,
      });

      if (signInRes?.error) {
        setLoading(false);
        alert(signInRes.error);
        return;
      }

      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      setLoading(false);
    }
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
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl dark:bg-pink-500/10" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl dark:bg-orange-500/10" />

      {/* 🔥 Card */}
      <div
        className="
          relative z-10
          w-full max-w-md
          rounded-[2rem]
          border border-white/40
          bg-white/80
          p-6 sm:p-8
          shadow-[0_20px_80px_rgba(236,72,153,0.15)]
          backdrop-blur-2xl
          dark:border-white/10
          dark:bg-gray-900/80
        "
      >
        {/* 🔥 Logo */}
        <div className="flex justify-center">
          <BrandLogo
            size="lg"
            href="/"
          />
        </div>

        {/* 🔥 Heading */}
        <div className="mt-6 text-center">
          <h1
            className={`
              text-3xl font-black tracking-tight
              ${theme.heading}
            `}
          >
            Create Account
          </h1>

          <p
            className={`
              mt-3 text-sm leading-relaxed
              ${theme.subtext}
            `}
          >
            Join Chena Bazar and enjoy premium
            shopping experiences with exclusive
            offers and fast delivery.
          </p>
        </div>

        {/* 🔥 Form */}
        <div className="mt-8 space-y-5">
          {/* Full Name */}
          <div className="relative">
            <FaUser
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                text-gray-400 dark:text-gray-500
              "
            />

            <input
              placeholder="Full Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="
                h-14 w-full rounded-2xl
                border border-gray-200
                bg-white/80
                pl-12 pr-4
                text-gray-900
                outline-none
                transition-all duration-300
                placeholder:text-gray-400
                focus:border-pink-400
                focus:ring-4 focus:ring-pink-200/50
                dark:border-white/10
                dark:bg-gray-950/60
                dark:text-white
                dark:placeholder:text-gray-500
                dark:focus:border-pink-500
                dark:focus:ring-pink-500/20
              "
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                text-gray-400 dark:text-gray-500
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="
                h-14 w-full rounded-2xl
                border border-gray-200
                bg-white/80
                pl-12 pr-4
                text-gray-900
                outline-none
                transition-all duration-300
                placeholder:text-gray-400
                focus:border-pink-400
                focus:ring-4 focus:ring-pink-200/50
                dark:border-white/10
                dark:bg-gray-950/60
                dark:text-white
                dark:placeholder:text-gray-500
                dark:focus:border-pink-500
                dark:focus:ring-pink-500/20
              "
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock
              className="
                absolute left-4 top-1/2 -translate-y-1/2
                text-gray-400 dark:text-gray-500
              "
            />

            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
              className="
                h-14 w-full rounded-2xl
                border border-gray-200
                bg-white/80
                pl-12 pr-4
                text-gray-900
                outline-none
                transition-all duration-300
                placeholder:text-gray-400
                focus:border-pink-400
                focus:ring-4 focus:ring-pink-200/50
                dark:border-white/10
                dark:bg-gray-950/60
                dark:text-white
                dark:placeholder:text-gray-500
                dark:focus:border-pink-500
                dark:focus:ring-pink-500/20
              "
            />
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="
              group flex h-14 w-full items-center
              justify-center gap-3 rounded-2xl
              bg-gradient-to-r
              from-pink-500
              via-rose-500
              to-orange-500
              text-white
              font-black
              shadow-[0_15px_50px_rgba(236,72,153,0.35)]
              transition-all duration-300
              hover:scale-[1.02]
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
              <>
                Create Account

                <FaArrowRight
                  className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </>
            )}
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
                OR
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            onClick={() => signIn("google")}
            className="
              flex h-14 w-full items-center
              justify-center gap-3 rounded-2xl
              border border-gray-200
              bg-white
              text-gray-800
              font-semibold
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
              dark:border-white/10
              dark:bg-gray-950/60
              dark:text-white
              dark:hover:bg-white/5
            "
          >
            <FcGoogle size={22} />

            Continue with Google
          </button>
        </div>

        {/* 🔥 Footer */}
        <p
          className={`
            mt-8 text-center text-sm
            ${theme.subtext}
          `}
        >
          Already have an account?{" "}
          <span
            onClick={() =>
              router.push("/login")
            }
            className="
              cursor-pointer font-bold
              text-pink-600 transition-colors
              hover:text-pink-500
              dark:text-pink-400
            "
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}