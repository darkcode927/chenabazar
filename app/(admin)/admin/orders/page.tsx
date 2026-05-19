import Link from "next/link";

import {
  FaShoppingBag,
  FaMoneyBillWave,
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { connectDB } from "@/lib/db";
import { Order } from "@/models/Order";

export default async function OrdersPage() {
  await connectDB();

  const orders = await Order.find().sort({
    createdAt: -1,
  });

  // 🔥 Analytics
  const totalOrders = orders.length;

  const totalRevenue = orders
    .filter((o: any) => o.paymentStatus === "paid")
    .reduce((sum: number, o: any) => sum + o.totalAmount, 0);

  const pendingOrders = orders.filter(
    (o: any) => o.status === "pending"
  ).length;

  const deliveredOrders = orders.filter(
    (o: any) => o.status === "delivered"
  ).length;

  return (
    <div className="space-y-8">
      
      {/* 🔥 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        
        <div>
          <h1 className="text-4xl font-black text-gray-800 dark:text-white">
            Order Management
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage all customer orders professionally 🚀
          </p>
        </div>

        <Link
          href="/admin/dashboard"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Back to Dashboard
        </Link>
      </div>

      {/* 🔥 Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Total Orders */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
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
              <FaShoppingBag size={28} />
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-gradient-to-br from-emerald-500 to-green-500 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-sm opacity-90">
                Revenue
              </p>

              <h2 className="text-3xl font-black mt-2">
                ৳ {totalRevenue}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaMoneyBillWave size={28} />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-sm opacity-90">
                Pending Orders
              </p>

              <h2 className="text-4xl font-black mt-2">
                {pendingOrders}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaClock size={28} />
            </div>
          </div>
        </div>

        {/* Delivered */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
          
          <div className="flex items-center justify-between">
            
            <div>
              <p className="text-sm opacity-90">
                Delivered
              </p>

              <h2 className="text-4xl font-black mt-2">
                {deliveredOrders}
              </h2>
            </div>

            <div className="bg-white/20 p-4 rounded-2xl">
              <FaCheckCircle size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 Orders Table */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border dark:border-gray-700 overflow-hidden">
        
        {/* Table Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b dark:border-gray-700">
          
          <div>
            <h2 className="text-2xl font-black text-gray-800 dark:text-white">
              Recent Orders
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Latest orders from customers
            </p>
          </div>
        </div>

        {/* 🔥 Desktop Table */}
        <div className="overflow-x-auto">
          
          <table className="w-full text-sm">
            
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <tr>
                <th className="p-5 text-left font-semibold">
                  Customer
                </th>

                <th className="p-5 text-left font-semibold">
                  Tracking
                </th>

                <th className="p-5 text-left font-semibold">
                  Amount
                </th>

                <th className="p-5 text-left font-semibold">
                  Status
                </th>

                <th className="p-5 text-left font-semibold">
                  Payment
                </th>

                <th className="p-5 text-left font-semibold">
                  Date
                </th>

                <th className="p-5 text-center font-semibold">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              
              {orders.map((order: any) => (
                <tr
                  key={order._id}
                  className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  
                  {/* Customer */}
                  <td className="p-5">
                    
                    <div className="space-y-1">
                      
                      <h3 className="font-bold text-gray-800 dark:text-white">
                        {order.customer?.name}
                      </h3>

                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs">
                        <FaPhoneAlt />
                        {order.customer?.phone}
                      </div>

                      <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-xs">
                        <FaMapMarkerAlt />
                        {order.customer?.address}
                      </div>
                    </div>
                  </td>

                  {/* Tracking */}
                  <td className="p-5">
                    <span className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {order.trackingId}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="p-5">
                    <p className="font-black text-lg text-pink-600 dark:text-pink-400">
                      ৳ {order.totalAmount}
                    </p>
                  </td>

                  {/* Status */}
                  <td className="p-5">
                    <span
                      className={`px-4 py-2 rounded-full text-xs font-bold capitalize
                        
                        ${
                          order.status === "confirmed"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : order.status === "pending"
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                            : order.status === "processing"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : order.status === "shipped"
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                            : order.status === "delivered"
                            ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                            : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                        }
                      `}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* Payment */}
                  <td className="p-5">
                    <div className="space-y-2">
                      
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-bold
                          
                          ${
                            order.paymentStatus === "paid"
                              ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                              : "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                          }
                        `}
                      >
                        {order.paymentStatus}
                      </span>

                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {order.paymentMethod}
                      </p>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="p-5">
                    <div className="space-y-1">
                      
                      <p className="font-medium text-gray-700 dark:text-gray-300">
                        {new Date(
                          order.createdAt
                        ).toLocaleDateString()}
                      </p>

                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        {new Date(
                          order.createdAt
                        ).toLocaleTimeString()}
                      </p>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="p-5">
                    
                    <div className="flex items-center justify-center gap-3">
                      
                      <Link
                        href={`/track/${order.trackingId}`}
                        target="_blank"
                        className="bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-3 rounded-xl transition"
                      >
                        <FaEye />
                      </Link>

                      <button className="bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-600 dark:text-purple-400 p-3 rounded-xl transition">
                        <FaTruck />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 🔥 Empty State */}
        {orders.length === 0 && (
          <div className="p-20 text-center">
            
            <h2 className="text-2xl font-black text-gray-700 dark:text-gray-200">
              No Orders Found
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Customer orders will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}