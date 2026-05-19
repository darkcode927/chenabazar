"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { FaShoppingCart, FaCheck, FaHeart } from "react-icons/fa";
import { theme } from "@/lib/theme";

type Props = {
  product: any;
};

export default function ProductDetails({ product }: Props) {
  const router = useRouter();
  const addToCart = useCartStore((s) => s.addToCart);

  const [added, setAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const fashionCategories = [
    "fashion",
    "tshirt",
    "shirt",
    "clothing",
    "apparel",
  ];
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

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:gap-10 sm:py-10 md:grid-cols-2 lg:gap-12">
      <div
        className={`relative aspect-square w-full overflow-hidden md:aspect-auto md:h-[480px] lg:h-[520px] ${theme.card}`}
      >
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name || "product"}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />

        <button
          type="button"
          className="absolute top-4 right-4 rounded-full bg-white/90 p-3 shadow transition hover:bg-pink-100 dark:bg-gray-800/90 dark:hover:bg-pink-900/40"
          aria-label="Wishlist"
        >
          <FaHeart className="text-gray-600 hover:text-pink-500 dark:text-gray-300" />
        </button>
      </div>

      <div className="flex flex-col justify-center space-y-4 sm:space-y-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-pink-600 dark:text-pink-400">
          {product.category}
        </p>

        <h1 className={`text-2xl sm:text-3xl md:text-4xl ${theme.heading}`}>
          {product.name}
        </h1>

        <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">
          ৳ {product.price}
        </p>

        <p className={`leading-relaxed ${theme.subtext}`}>
          {product.description || "No description available."}
        </p>

        <p className={`text-sm ${theme.subtext}`}>
          {product.stock > 0
            ? `In Stock (${product.stock})`
            : "Out of Stock"}
        </p>

        {isFashion && (
          <div className="space-y-2">
            <p className="text-sm font-semibold dark:text-gray-200">
              Choose Size
            </p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selectedSize === size
                      ? "border-pink-600 bg-pink-600 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`flex items-center justify-center gap-2 px-6 py-3 font-semibold transition ${
              added
                ? "bg-green-500 text-white"
                : theme.btnPrimary
            } ${product.stock === 0 ? "cursor-not-allowed opacity-50" : ""}`}
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

          <button
            type="button"
            onClick={handleBuyNow}
            disabled={product.stock === 0}
            className={`px-6 py-3 font-semibold transition ${
              product.stock === 0
                ? "cursor-not-allowed opacity-50"
                : theme.btnSecondary
            }`}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
