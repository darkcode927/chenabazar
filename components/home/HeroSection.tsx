"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Upgrade Your Fashion Style",
    subtitle: "Discover premium fashion collections with unbeatable prices.",
    image: "/1-hero-bg-image.jpg",
    button: "Shop Fashion",
    link: "/products",
    category: "Fashion",
  },

  {
    id: 2,
    title: "Latest Smart Gadgets",
    subtitle: "Explore futuristic electronics and trending accessories.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2070&auto=format&fit=crop",
    button: "Explore Gadgets",
    link: "/products",
    category: "Electronics",
  },

  {
    id: 3,
    title: "Timeless Luxury Watches",
    subtitle: "Elevate your style with premium and elegant timepieces.",
    image:
      "https://images.unsplash.com/photo-1777917756353-a869f2133dfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Discover More",
    link: "/products",
    category: "Watches",
  },
  {
    id: 4,
    title: "Elegant Living Starts Here",
    subtitle: "Upgrade your space with beautifully crafted modern furniture.",
    image:
      "https://images.unsplash.com/photo-1652766825080-88818e6509b6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Discover More",
    link: "/products",
    category: "Furniture",
  },
  {
    id: 5,
    title: "Latest Smartphones & Tech",
    subtitle: "Shop the newest smartphones with powerful features and sleek design.",
    image:
      "https://images.unsplash.com/photo-1695639526461-7244f263119c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Discover More",
    link: "/products",
    category: "Mobiles",
  },
  {
    id: 6,
    title: "Style Meets Function",
    subtitle: "Discover accessories that enhance your lifestyle and performance.",
    image:
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    button: "Discover More",
    link: "/products",
    category: "Accessories",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[75vh] overflow-hidden  shadow-2xl">
      {/* 🔥 Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            current === index
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-2xl text-white">
                {/* Category */}
                <span className="inline-block bg-pink-500/90 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  {slide.category}
                </span>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href={slide.link}
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl"
                  >
                    {slide.button}
                  </Link>

                  <Link
                    href="/categories"
                    className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
                  >
                    Browse Categories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 🔥 Slider Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index ? "w-10 bg-white" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
