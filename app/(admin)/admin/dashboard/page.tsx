import Link from "next/link";

import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaArrowUp,
  FaClock,
  FaPlus,
  FaEye,
} from "react-icons/fa";

import { connectDB } from "@/lib/db";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { User } from "@/models/User";

export default async function DashboardPage() {
  await connectDB();

  // 🔥 Counts
  const totalOrders = await Order.countDocuments();
  const totalProducts = await Product.countDocuments();
  const totalUsers = await User.countDocuments();

  // 🔥 Revenue
  const revenueAgg = await Order.aggregate([
    { $match: { paymentStatus: "paid" } },
    {
      $group: {
        _id: null,
        total: { $sum: "$totalAmount" },
      },
    },
  ]);

  const totalRevenue = revenueAgg[0]?.total || 0;

  // 🔥 Recent Orders
  const recentOrders = await Order.find()
    .sort({ createdAt: -1 })
    .limit(5);

  // 🔥 Recent Users
  const recentUsers = await User.find()
    .sort({ createdAt: -1 })
    .limit(5);

  return (
    <div className="space-y-10">
      
      {/* 🔥 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800 dark:text-white">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Welcome back 👋 Manage your store professionally.
          </p>
        </div>

        {/* 🔥 Quick Actions */}
        <div className="flex flex-wrap gap-3">
          
          <Link
            href="/admin/products/create"
            className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-5 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            + Add Product
          </Link>

          <Link
            href="/admin/orders"
            className="rounded-2xl border border-gray-200 bg-white px-5 py-3 font-semibold transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            View Orders
          </Link>
        </div>
      </div>

      {/* 🔥 Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Orders */}
        <div className="group bg-gradient-to-br from-pink-500 to-rose-500 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-sm opacity-90">
                Total Orders
              </p>

              <h2 className="text-4xl font-black mt-2">
                {totalOrders}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaShoppingCart size={28} />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 text-sm">
            <FaArrowUp />
            <span>Store orders growing</span>
          </div>
        </div>

        {/* Products */}
        <div className="group bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-sm opacity-90">
                Products
              </p>

              <h2 className="text-4xl font-black mt-2">
                {totalProducts}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaBoxOpen size={28} />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 text-sm">
            <FaPlus />
            <span>Manage inventory easily</span>
          </div>
        </div>

        {/* Users */}
        <div className="group bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-sm opacity-90">
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

          <div className="flex items-center gap-2 mt-6 text-sm">
            <FaArrowUp />
            <span>Community increasing</span>
          </div>
        </div>

        {/* Revenue */}
        <div className="group bg-gradient-to-br from-emerald-500 to-green-500 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-sm opacity-90">
                Revenue
              </p>

              <h2 className="text-4xl font-black mt-2">
                ৳ {totalRevenue}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaMoneyBillWave size={28} />
            </div>
          </div>

          <div className="flex items-center gap-2 mt-6 text-sm">
            <FaArrowUp />
            <span>Sales performing well</span>
          </div>
        </div>
      </div>

      {/* 🔥 Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* 🔥 Recent Orders */}
        <div className="xl:col-span-2 bg-white rounded-3xl shadow-sm border p-6">
          
          <div className="flex items-center justify-between mb-6">
            
            <div>
              <h2 className="text-2xl font-black text-gray-800">
                Recent Orders
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Latest customer purchases
              </p>
            </div>

            <Link
              href="/admin/orders"
              className="text-pink-600 font-semibold hover:underline"
            >
              View All
            </Link>
          </div>

          <div className="space-y-4">
            
            {recentOrders.map((order: any) => (
              <div
                key={order._id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5 rounded-2xl border hover:bg-gray-50 transition"
              >
                
                <div>
                  <h3 className="font-bold text-gray-800">
                    {order.customer?.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {order.customer?.phone}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {order.trackingId}
                  </p>
                </div>

                <div className="flex flex-col md:items-end gap-2">
                  
                  <p className="font-black text-lg text-pink-600">
                    ৳ {order.totalAmount}
                  </p>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold w-fit
                      ${
                        order.status === "confirmed"
                          ? "bg-green-100 text-green-600"
                          : order.status === "pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : order.status === "shipped"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Recent Users */}
        <div className="bg-white rounded-3xl shadow-sm border p-6">
          
          <div className="flex items-center justify-between mb-6">
            
            <div>
              <h2 className="text-2xl font-black text-gray-800">
                Recent Users
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Newly joined customers
              </p>
            </div>

            <FaUsers className="text-pink-500" size={22} />
          </div>

          <div className="space-y-4">
            
            {recentUsers.map((user: any) => (
              <div
                key={user._id}
                className="flex items-center justify-between p-4 border rounded-2xl hover:bg-gray-50 transition"
              >
                
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {user.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>

                <div className="bg-pink-100 text-pink-600 p-3 rounded-xl">
                  <FaEye />
                </div>
              </div>
            ))}
          </div>

          {/* 🔥 Quick Stats */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white">
            
            <div className="flex items-center gap-3">
              <FaClock size={20} />

              <div>
                <p className="text-sm opacity-90">
                  Active Store Status
                </p>

                <h3 className="font-bold text-lg">
                  Running Smoothly 🚀
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}