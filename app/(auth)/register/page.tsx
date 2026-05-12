"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (!res.ok) return alert("Register failed");

    // 🔥 AUTO LOGIN AFTER REGISTER
    const signInRes = await signIn("credentials", {
      email: form.email.toLowerCase(),
      password: form.password,
      redirect: false,
    });

    if (signInRes?.error) {
      alert(signInRes.error);
      return;
    }

    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-red-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-5">

        <h1 className="text-2xl font-bold text-center">
          Create Account
        </h1>

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

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
          onClick={handleRegister}
          className="w-full bg-pink-600 text-white py-3 rounded"
        >
          Register
        </button>

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-2 border py-3 rounded"
        >
          <FcGoogle />
          Sign up with Google
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-pink-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}