import React from "react";

export default function CheckoutFailedPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>
      <p className="mt-4 text-slate-600">
        Your payment could not be processed. Please try again or contact support.
      </p>
    </div>
  );
}
