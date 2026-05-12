import Image from "next/image";
import {
  FaUsers,
  FaUserShield,
  FaUserCheck,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export default async function UsersPage() {
  await connectDB();

  const users = await User.find().sort({
    createdAt: -1,
  });

  const totalUsers = users.length;

  const adminUsers = users.filter(
    (u: any) => u.role === "admin"
  ).length;

  const normalUsers = totalUsers - adminUsers;

  return (
    <div className="space-y-8">
      
      {/* 🔥 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800">
            User Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customers, admins & user activities
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold">
          Total Users: {totalUsers}
        </div>
      </div>

      {/* 🔥 Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total Users */}
        <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition-all duration-300">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">
                Total Users
              </p>

              <h2 className="text-4xl font-black mt-2">
                {totalUsers}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaUsers size={28} />
            </div>
          </div>
        </div>

        {/* Admins */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition-all duration-300">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">
                Admin Users
              </p>

              <h2 className="text-4xl font-black mt-2">
                {adminUsers}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaUserShield size={28} />
            </div>
          </div>
        </div>

        {/* Customers */}
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-3xl p-6 shadow-xl hover:scale-[1.02] transition-all duration-300">
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">
                Customers
              </p>

              <h2 className="text-4xl font-black mt-2">
                {normalUsers}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaUserCheck size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Users Table */}
      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        
        {/* Table Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b bg-gray-50">
          
          <div>
            <h2 className="text-xl font-black text-gray-800">
              All Users
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Recent registered users
            </p>
          </div>

          <div className="text-sm text-gray-400">
            {users.length} users found
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          
          <table className="w-full">
            <thead className="bg-gray-100 text-gray-600 text-sm">
              <tr>
                <th className="px-6 py-4 text-left">
                  User
                </th>

                <th className="px-6 py-4 text-left">
                  Email
                </th>

                <th className="px-6 py-4 text-left">
                  Role
                </th>

                <th className="px-6 py-4 text-left">
                  Joined
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user: any) => (
                <tr
                  key={user._id}
                  className="border-t hover:bg-pink-50/40 transition-all duration-200"
                >
                  
                  {/* User */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      
                      {user.image ? (
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={50}
                          height={50}
                          className="rounded-full object-cover border"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white flex items-center justify-center font-bold text-lg">
                          {user.name?.charAt(0)}
                        </div>
                      )}

                      <div>
                        <h3 className="font-bold text-gray-800">
                          {user.name || "Unknown"}
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          ID: {user._id.toString().slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaEnvelope className="text-pink-500" />

                      <span>{user.email}</span>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-5">
                    {user.role === "admin" ? (
                      <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <FaUserShield />
                        Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <FaUserCheck />
                        Customer
                      </span>
                    )}
                  </td>

                  {/* Joined */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-gray-500">
                      <FaCalendarAlt />

                      <span>
                        {new Date(
                          user.createdAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🔥 Mobile Cards */}
        <div className="lg:hidden p-4 space-y-4">
          
          {users.map((user: any) => (
            <div
              key={user._id}
              className="border rounded-2xl p-5 hover:shadow-lg transition"
            >
              
              <div className="flex items-center gap-4">
                
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={55}
                    height={55}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white flex items-center justify-center font-bold text-xl">
                    {user.name?.charAt(0)}
                  </div>
                )}

                <div>
                  <h2 className="font-bold text-gray-800">
                    {user.name}
                  </h2>

                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-5">
                
                {user.role === "admin" ? (
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Admin
                  </span>
                ) : (
                  <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Customer
                  </span>
                )}

                <span className="text-sm text-gray-400">
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}