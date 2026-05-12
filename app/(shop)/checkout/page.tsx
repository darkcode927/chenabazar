"use client";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function CheckoutPage() {
  const { items } = useCartStore();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  // 🔥 PAYMENT HANDLER
  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/payment/init", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((i) => ({
            productId: i._id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            size: i.size,
          })),
          totalAmount: total,
          customer: form,
        }),
      });

      // 🔥 SAFE TEXT
      const text = await res.text();
      console.log("RAW:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (err) {
        alert("Invalid JSON from server");
        return;
      }

      // 🔥 EXTRACT URL (IMPORTANT FIX)
      let redirectUrl = null;

      if (data.GatewayPageURL) {
        redirectUrl = data.GatewayPageURL;
      } else if (data.redirectGatewayURL) {
        redirectUrl = data.redirectGatewayURL;
      } else if (data.sessionkey) {
        // 🔥 fallback (manual build)
        redirectUrl = `https://sandbox.sslcommerz.com/EasyCheckOut/testbox/${data.sessionkey}`;
      }

      console.log("Redirect URL:", redirectUrl);

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert("Redirect URL not found");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Checkout</h1>

      {/* 🔷 Form */}
      <div className="space-y-4">
        <input
          placeholder="Full Name"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          placeholder="Delivery Address"
          className="border p-3 w-full rounded"
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>

      {/* 🔷 Order Summary */}
      <div className="border rounded-lg p-4 space-y-2 bg-gray-50">
        <h2 className="font-semibold text-lg">Order Summary</h2>

        {items.map((item, index) => (
          <div key={`${item._id}-${index}`} className="flex flex-col gap-1 text-sm border-b pb-2 mb-2 last:border-0 last:pb-0 last:mb-0">
            <div className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>৳ {item.price * item.quantity}</span>
            </div>
            {item.size && (
              <div className="text-xs text-gray-500">Size: {item.size}</div>
            )}
          </div>
        ))}

        <hr />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>৳ {total}</span>
        </div>
      </div>

      {/* 🔷 Pay Button */}
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`w-full py-3 rounded text-white font-semibold transition ${
          loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
