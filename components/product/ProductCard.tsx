"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { FaShoppingCart, FaEye, FaHeart, FaCheck } from "react-icons/fa";

type Props = {
  product: any;
};

export default function ProductCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    // Reset after 1.5s
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-2xl transition duration-300">
      {/* ❤️ Wishlist */}
      <button className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-pink-100 transition">
        <FaHeart className="text-gray-500 hover:text-pink-500" />
      </button>

      {/* 🖼 Image */}
      <Link href={`/products/${product._id}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.image?.trim() ? product.image : "/placeholder.png"}
            alt={product.name || "Product Image"}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />

          {/* 🔥 FLASH SALE BADGE */}
          {product.flashSale && (
            <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs rounded-full z-10 shadow">
              🔥 Flash Sale
            </span>
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
            <button
              onClick={handleAddToCart}
              className="bg-white p-3 rounded-full shadow hover:bg-pink-600 hover:text-white transition"
            >
              <FaShoppingCart />
            </button>

            <div className="bg-white p-3 rounded-full shadow">
              <FaEye />
            </div>
          </div>
        </div>
      </Link>

      {/* 📄 Content */}
      <div className="p-4 space-y-2">
        {/* Name */}
        <h2 className="font-semibold text-lg line-clamp-1 group-hover:text-pink-600 transition">
          {product.name}
        </h2>

        {/* Category */}
        <p className="text-xs text-gray-500 capitalize">{product.category}</p>

        {/* Price */}
        <p className="text-pink-600 font-bold text-xl">৳ {product.price}</p>

        {/* Bottom Actions */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition ${
              added
                ? "bg-green-500 text-white"
                : "bg-pink-600 text-white hover:bg-pink-700"
            }`}
          >
            {added ? (
              <>
                <FaCheck /> Added
              </>
            ) : (
              <>
                <FaShoppingCart /> Add to Cart
              </>
            )}
          </button>

          <Link
            href={`/products/${product._id}`}
            className="flex items-center justify-center px-3 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            <FaEye />
          </Link>
        </div>
      </div>
    </div>
  );
}
