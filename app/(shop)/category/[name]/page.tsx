"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { PRODUCT_GRID_CLASS } from "@/lib/product-grid";
import { useProducts } from "@/hooks/useProducts";

export default function CategoryPage({ params }: { params: Promise<{ name: string }> }) {
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    params.then((resolved) => setCategoryName(resolved.name));
  }, [params]);

  const query = categoryName
    ? `?category=${encodeURIComponent(categoryName)}`
    : "";

  const { products, loading } = useProducts({ query });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <h1 className="mb-6 text-2xl font-bold capitalize sm:text-3xl dark:text-white">
        {categoryName || "Category"} Products
      </h1>

      {loading ? (
        <ProductGridSkeleton count={8} />
      ) : products.length === 0 ? (
        <div className="mt-16 text-center">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            No Products Found 😕
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            This category is currently empty.
          </p>
        </div>
      ) : (
        <div className={PRODUCT_GRID_CLASS}>
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
