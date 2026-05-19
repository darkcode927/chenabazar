"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/components/product/ProductCard";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";

import { PRODUCT_GRID_CLASS } from "@/lib/product-grid";
import { useProducts } from "@/hooks/useProducts";

import {
  FaBoxOpen,
  FaFire,
  FaArrowRight,
} from "react-icons/fa";

import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: Promise<{
    name: string;
  }>;
}) {
  const [categoryName, setCategoryName] =
    useState("");

  useEffect(() => {
    params.then((resolved) =>
      setCategoryName(
        resolved.name,
      ),
    );
  }, [params]);

  const query = categoryName
    ? `?category=${encodeURIComponent(
        categoryName,
      )}`
    : "";

  const { products, loading } =
    useProducts({
      query,
    });

  return (
    <div
      className="
        relative overflow-hidden
        min-h-screen
        px-4 py-8 sm:px-6 sm:py-12
      "
    >
      {/* 🔥 Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* 🔥 HEADER */}
        <div
          className="
            mb-10 overflow-hidden
            rounded-[2rem]
            border border-gray-200
            bg-white/80
            p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            backdrop-blur-2xl
            sm:p-8
            dark:border-white/10
            dark:bg-gray-900/70
          "
        >
          <div
            className="
              flex flex-col gap-6
              sm:flex-row sm:items-center
              sm:justify-between
            "
          >
            {/* LEFT */}
            <div>
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-pink-100
                  px-4 py-2
                  text-sm font-bold
                  text-pink-600
                  dark:bg-pink-500/10
                  dark:text-pink-400
                "
              >
                <FaFire />
                Explore Collection
              </div>

              <h1
                className="
                  mt-5 text-3xl font-black
                  capitalize tracking-tight
                  text-gray-900
                  sm:text-5xl
                  dark:text-white
                "
              >
                {categoryName ||
                  "Category"}{" "}
                Products
              </h1>

              <p
                className="
                  mt-4 max-w-2xl
                  text-base leading-relaxed
                  text-gray-500
                  sm:text-lg
                  dark:text-gray-400
                "
              >
                Discover premium products,
                trending collections, and
                top-quality items from our{" "}
                {categoryName ||
                  "selected"}{" "}
                category.
              </p>
            </div>

            {/* RIGHT */}
            {!loading &&
              products.length > 0 && (
                <div
                  className="
                    rounded-3xl
                    border border-gray-200
                    bg-gray-50/80
                    px-6 py-5
                    text-center
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <p
                    className="
                      text-sm font-medium
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Total Products
                  </p>

                  <h3
                    className="
                      mt-2 text-4xl
                      font-black
                      text-pink-600
                      dark:text-pink-400
                    "
                  >
                    {products.length}
                  </h3>
                </div>
              )}
          </div>
        </div>

        {/* 🔥 PRODUCTS */}
        {loading ? (
          <ProductGridSkeleton count={8} />
        ) : products.length === 0 ? (
          <div
            className="
              mt-16 overflow-hidden
              rounded-[2rem]
              border border-gray-200
              bg-white/80
              px-6 py-16 text-center
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              backdrop-blur-2xl
              dark:border-white/10
              dark:bg-gray-900/70
            "
          >
            {/* Icon */}
            <div
              className="
                mx-auto flex h-24 w-24
                items-center justify-center
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-orange-500
                text-4xl text-white
                shadow-xl
              "
            >
              <FaBoxOpen />
            </div>

            <h2
              className="
                mt-8 text-3xl
                font-black
                text-gray-900
                dark:text-white
              "
            >
              No Products Found
            </h2>

            <p
              className="
                mx-auto mt-4 max-w-lg
                text-lg leading-relaxed
                text-gray-500
                dark:text-gray-400
              "
            >
              This category is currently
              empty. New products may be
              added soon, so stay tuned.
            </p>

            <Link
              href="/products"
              className="
                group mt-8 inline-flex
                items-center gap-3
                rounded-2xl
                bg-gradient-to-r
                from-pink-500
                via-rose-500
                to-orange-500
                px-8 py-4
                font-black text-white
                shadow-[0_15px_50px_rgba(236,72,153,0.35)]
                transition-all duration-300
                hover:scale-105
              "
            >
              Browse All Products

              <FaArrowRight
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        ) : (
          <>
            {/* 🔥 TOP INFO */}
            <div
              className="
                mb-8 flex flex-col gap-4
                sm:flex-row sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  text-sm font-medium
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Showing{" "}
                <span
                  className="
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {products.length}
                </span>{" "}
                products in{" "}
                <span
                  className="
                    capitalize font-bold
                    text-pink-600
                    dark:text-pink-400
                  "
                >
                  {categoryName}
                </span>
              </p>

              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-gray-200
                  bg-white/80
                  px-4 py-2
                  text-sm font-semibold
                  text-gray-700
                  shadow-sm
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-300
                "
              >
                <FaFire className="text-pink-500" />
                Trending Collection
              </div>
            </div>

            {/* 🔥 GRID */}
            <div
              className={`${PRODUCT_GRID_CLASS} gap-5`}
            >
              {products.map((p) => (
                <ProductCard
                  key={p._id}
                  product={p}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}