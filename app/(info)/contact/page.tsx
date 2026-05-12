"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-500 mt-4">
            Have questions? We’re here to help you anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* INFO */}
          <div className="space-y-6">
            <Info icon={<FaPhoneAlt />} title="Call Us" value="+880 1234-567890" />
            <Info icon={<FaEnvelope />} title="Email" value="support@chenabazar.com" />
            <Info icon={<FaMapMarkerAlt />} title="Location" value="Dhaka, Bangladesh" />
          </div>

          {/* FORM */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold mb-6">Send a Message</h2>

            <form className="space-y-5">

              <input placeholder="Name" className="input" />
              <input placeholder="Email" className="input" />
              <textarea rows={5} placeholder="Message" className="input" />

              <button className="btn-primary w-full">
                Send Message
              </button>

            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow">
          <iframe
            src="https://maps.google.com/maps?q=dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px]"
          />
        </div>

      </div>
    </div>
  );
}

function Info({ icon, title, value }: any) {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-[var(--color-primary)] text-white p-3 rounded-full">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-500">{value}</p>
      </div>
    </div>
  );
}