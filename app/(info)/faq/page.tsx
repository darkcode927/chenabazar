"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Usually 2–5 days across Bangladesh.",
  },
  {
    q: "Can I return a product?",
    a: "Yes, within 7 days of delivery.",
  },
  {
    q: "Do you offer cash on delivery?",
    a: "Yes, we support COD nationwide.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpen(open === i ? null : i)}
              className="bg-white p-6 rounded-xl shadow cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h2 className="font-medium">{faq.q}</h2>
                <span>{open === i ? "-" : "+"}</span>
              </div>

              {open === i && (
                <p className="text-gray-500 mt-3">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}