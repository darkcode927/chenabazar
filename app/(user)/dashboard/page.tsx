import {
  FaShoppingBag,
  FaHeart,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";

export default function UserDashboardPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account and orders
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition">
          <FaShoppingBag className="text-4xl text-sky-500 mb-4" />

          <h2 className="text-3xl font-black">12</h2>

          <p className="text-gray-500">Orders</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition">
          <FaHeart className="text-4xl text-pink-500 mb-4" />

          <h2 className="text-3xl font-black">8</h2>

          <p className="text-gray-500">Wishlist</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition">
          <FaMoneyBillWave className="text-4xl text-green-500 mb-4" />

          <h2 className="text-3xl font-black">৳ 24,500</h2>

          <p className="text-gray-500">Spent</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl hover:-translate-y-1 transition">
          <FaStar className="text-4xl text-yellow-500 mb-4" />

          <h2 className="text-3xl font-black">Gold</h2>

          <p className="text-gray-500">Membership</p>
        </div>

      </div>
    </div>
  );
}