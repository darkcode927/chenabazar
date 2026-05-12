"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("");
  const router = useRouter();

  const handleTrack = () => {
    if (!trackingId.trim()) {
      alert("Please enter Tracking ID");
      return;
    }

    console.log("Tracking:", trackingId); // 🔍 debug

    router.push(`/track/${trackingId}`);
  };

  return (
    <div className="max-w-xl mx-auto p-6 text-center space-y-4">
      <h1 className="text-3xl font-bold">Track Your Order 📦</h1>

      <input
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        className="border p-3 w-full rounded"
      />

      <button
        onClick={handleTrack}
        className="bg-pink-600 text-white px-6 py-2 rounded"
      >
        Track Order
      </button>
    </div>
  );
}