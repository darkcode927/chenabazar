"use client";

import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";
import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";
import { PRODUCT_GRID_CLASS } from "@/lib/product-grid";
import { useProducts } from "@/hooks/useProducts";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") || "";
  const search = searchParams?.get("search") || "";

  let query = "";
  if (category) query = `?category=${encodeURIComponent(category)}`;
  if (search) {
    query = query
      ? `${query}&search=${encodeURIComponent(search)}`
      : `?search=${encodeURIComponent(search)}`;
  }

  const { products, loading } = useProducts({ query });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 min-h-[50vh]">
      <h1 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl dark:text-white">
        All Products
      </h1>

      {loading ? (
        <ProductGridSkeleton count={8} />
      ) : products.length === 0 ? (
        <p className="py-16 text-center text-gray-500 dark:text-gray-400">
          No products found.
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
