"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  FaCamera,
  FaEdit,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaSave,
  FaShoppingBag,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";

export default function ProfilePage() {
  const { data: session } = useSession();

  const [editing, setEditing] = useState(false);

  const [form, setForm] = useState({
    name: session?.user?.name || "",
    email: session?.user?.email || "",
    phone: "+8801XXXXXXXXX",
    address: "Dhaka, Bangladesh",
  });

  const handleSave = async () => {
    try {
      // 🔥 Later connect API here
      alert("✅ Profile Updated Successfully");

      setEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-8">
      {/* 🔥 TOP HERO */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 p-[1px] shadow-2xl">
        <div className="relative rounded-[2rem] bg-white dark:bg-gray-900">
          {/* Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -left-10 h-60 w-60 rounded-full bg-sky-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          </div>

          <div className="relative z-10 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* 🔥 Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 blur-xl opacity-40 group-hover:opacity-70 transition duration-300" />

                <div className="relative">
                  <Image
                    src={session?.user?.image || "/user.png"}
                    alt="user"
                    width={150}
                    height={150}
                    className="rounded-full border-[6px] border-white dark:border-gray-800 shadow-2xl object-cover"
                  />

                  {/* Upload Button */}
                  <label className="absolute bottom-2 right-2 h-11 w-11 rounded-full bg-sky-600 hover:bg-sky-700 transition flex items-center justify-center text-white shadow-lg cursor-pointer">
                    <FaCamera />

                    <input
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* 🔥 User Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                  <h1 className="text-4xl font-black text-gray-800 dark:text-white">
                    {session?.user?.name}
                  </h1>

                  <span className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 dark:from-sky-900/40 dark:to-cyan-900/40 px-5 py-2 text-sm font-bold text-sky-700 dark:text-sky-300 shadow-sm">
                    <FaShieldAlt />
                    Verified Account
                  </span>
                </div>

                <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
                  Manage your profile, orders, settings &
                  account preferences.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="rounded-2xl border dark:border-gray-700 bg-sky-50 dark:bg-sky-900/20 p-5 hover:shadow-lg transition">
                    <div className="flex justify-center lg:justify-start">
                      <FaShoppingBag className="text-sky-600 text-xl" />
                    </div>

                    <h3 className="mt-3 text-2xl font-black text-gray-800 dark:text-white">
                      12
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Orders
                    </p>
                  </div>

                  <div className="rounded-2xl border dark:border-gray-700 bg-pink-50 dark:bg-pink-900/20 p-5 hover:shadow-lg transition">
                    <div className="flex justify-center lg:justify-start">
                      <FaHeart className="text-pink-600 text-xl" />
                    </div>

                    <h3 className="mt-3 text-2xl font-black text-gray-800 dark:text-white">
                      8
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Wishlist
                    </p>
                  </div>

                  <div className="rounded-2xl border dark:border-gray-700 bg-green-50 dark:bg-green-900/20 p-5 hover:shadow-lg transition">
                    <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                      Gold
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Membership
                    </p>
                  </div>

                  <div className="rounded-2xl border dark:border-gray-700 bg-yellow-50 dark:bg-yellow-900/20 p-5 hover:shadow-lg transition">
                    <h3 className="text-2xl font-black text-gray-800 dark:text-white">
                      98%
                    </h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Activity
                    </p>
                  </div>
                </div>
              </div>

              {/* 🔥 Edit Button */}
              <div>
                {!editing ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-4 font-bold text-white shadow-xl hover:scale-105 transition duration-300"
                  >
                    <FaEdit />
                    Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-4 font-bold text-white shadow-xl hover:scale-105 transition duration-300"
                  >
                    <FaSave />
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 PROFILE DETAILS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEFT */}
        <div className="xl:col-span-2 bg-white dark:bg-gray-900 rounded-[2rem] border dark:border-gray-700 shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-gray-800 dark:text-white">
                Personal Information
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Update your personal details &
                contact information.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                Full Name
              </label>

              <input
                disabled={!editing}
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white px-5 py-4 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/40 transition disabled:opacity-80"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  disabled
                  value={form.email}
                  className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white pl-12 pr-5 py-4 outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                Phone Number
              </label>

              <div className="relative">
                <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  disabled={!editing}
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white pl-12 pr-5 py-4 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/40 transition"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-gray-300">
                Address
              </label>

              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  disabled={!editing}
                  value={form.address}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      address: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white pl-12 pr-5 py-4 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100 dark:focus:ring-sky-900/40 transition"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* 🔥 Account Status */}
          <div className="bg-white dark:bg-gray-900 rounded-[2rem] border dark:border-gray-700 shadow-xl p-7">
            <h3 className="text-2xl font-black text-gray-800 dark:text-white">
              Account Status
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Account Type
                </span>

                <span className="font-bold text-sky-600 dark:text-sky-400">
                  Premium User
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Verification
                </span>

                <span className="rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-bold text-green-600 dark:text-green-400">
                  Verified
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Joined
                </span>

                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  May 2026
                </span>
              </div>
            </div>
          </div>

          {/* 🔥 Security */}
          <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-[2rem] p-7 text-white shadow-2xl">
            <h3 className="text-2xl font-black">
              Security Center
            </h3>

            <p className="mt-3 text-sky-100">
              Your account is protected with secure
              authentication and encrypted sessions.
            </p>

            <button className="mt-6 w-full rounded-2xl bg-white/20 backdrop-blur-md py-4 font-bold hover:bg-white/30 transition">
              Manage Security
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}