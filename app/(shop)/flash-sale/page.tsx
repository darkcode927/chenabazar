"use client";

import ProductCard from "@/components/product/ProductCard";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { PRODUCT_GRID_CLASS } from "@/lib/product-grid";
import { useProducts } from "@/hooks/useProducts";

export default function FlashSalePage() {
  const { products, loading } = useProducts({ query: "?flash=true" });

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="mb-6 text-2xl font-black text-red-500 sm:text-3xl">
          🔥 Flash Sale
        </h1>
        <ProductGridSkeleton count={8} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10">
      <h1 className="mb-6 text-2xl font-black text-red-500 sm:text-3xl dark:text-red-400">
        🔥 Flash Sale
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          No flash sale products available.
        </p>
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
