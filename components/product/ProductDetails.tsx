"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { FaShoppingCart, FaCheck, FaHeart } from "react-icons/fa";

type Props = {
  product: any;
};

export default function ProductDetails({ product }: Props) {
  const router = useRouter();
  const addToCart = useCartStore((s) => s.addToCart);

  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const fashionCategories = ["fashion", "tshirt", "shirt", "clothing", "apparel"];
  const isFashion = fashionCategories.includes(
    String(product.category).toLowerCase(),
  );

  const sizes = ["S", "M", "L", "XL"];

  const handleAddToCart = () => {
    if (isFashion && !selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    addToCart(product, selectedSize || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    if (isFashion && !selectedSize) {
      alert("Please select a size before buying.");
      return;
    }

    addToCart(product, selectedSize || undefined);
    router.push("/checkout");
  };

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      
      {/* 🖼 Image Section */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name || "product"}
          fill
          className="object-cover"
        />

        {/* Wishlist */}
        <button className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow hover:bg-pink-100 transition">
          <FaHeart className="text-gray-600 hover:text-pink-500" />
        </button>
      </div>

      {/* 📄 Content Section */}
      <div className="flex flex-col justify-center space-y-5">
        
        {/* Category */}
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          {product.category}
        </p>

        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-black text-gray-900">
          {product.name}
        </h1>

        {/* Price */}
        <p className="text-2xl font-bold text-pink-600">
          ৳ {product.price}
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {product.description || "No description available."}
        </p>

        {/* Stock */}
        <p className="text-sm text-gray-500">
          {product.stock > 0
            ? `In Stock (${product.stock})`
            : "Out of Stock"}
        </p>

        {/* Fashion size selector */}
        {isFashion && (
          <div className="space-y-2">
            <p className="text-sm font-semibold">Choose Size</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border font-semibold transition ${
                    selectedSize === size
                      ? "bg-pink-600 text-white border-pink-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 pt-4 flex-wrap">

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition ${
              added
                ? "bg-green-500 text-white"
                : "bg-pink-600 text-white hover:bg-pink-700"
            } ${product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
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

          {/* Buy Now */}
          <button
            type="button"
            onClick={handleBuyNow}
            disabled={product.stock === 0}
            className={`px-6 py-3 rounded-xl border font-semibold transition ${
              product.stock === 0
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}