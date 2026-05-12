"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/ProductCard";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);

  const category = searchParams?.get("category") || "";
  const search = searchParams?.get("search") || "";

  useEffect(() => {
    let query = "";

    if (category) {
      query = `?category=${encodeURIComponent(category)}`;
    }

    if (search) {
      query = query
        ? `${query}&search=${encodeURIComponent(search)}`
        : `?search=${encodeURIComponent(search)}`;
    }

    fetch(`/api/products${query}`)
      .then((res) => res.json())
      .then(setProducts);
  }, [category, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}