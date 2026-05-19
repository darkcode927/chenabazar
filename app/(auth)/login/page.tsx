"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-white to-orange-50 px-4 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className={`w-full max-w-md space-y-5 p-8 ${theme.cardElevated}`}>
        <div className="flex justify-center">
          <BrandLogo size="lg" href="/" />
        </div>

        <h1 className={`text-center text-2xl font-bold ${theme.heading}`}>
          Login to Chena Bazar
        </h1>

        <input
          placeholder="Email"
          className={theme.input}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className={theme.input}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="button"
          onClick={handleLogin}
          disabled={loading}
          className={`flex w-full items-center justify-center gap-2 ${theme.btnPrimary} disabled:opacity-60`}
        >
          {loading ? <Spinner size="sm" className="border-white border-t-transparent" /> : null}
          {loading ? "Signing in..." : "Login"}
        </button>

        <button
          type="button"
          onClick={() => signIn("google")}
          className={`flex w-full items-center justify-center gap-2 ${theme.btnSecondary}`}
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className={`text-center text-sm ${theme.subtext}`}>
          Don&apos;t have an account?{" "}
          <a href="/register" className="font-semibold text-pink-600 dark:text-pink-400">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
