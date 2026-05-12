"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-red-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5">

        <h1 className="text-2xl font-bold text-center">
          Login to Chena Bazar
        </h1>

        <input
          placeholder="Email"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* 🔥 GOOGLE LOGIN */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 border py-3 rounded hover:bg-gray-100"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-pink-600 cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}