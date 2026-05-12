"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/product/ProductCard";

export default function CategoryPage({ params }: any) {
  const [categoryName, setCategoryName] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 FIX: params handle properly
  useEffect(() => {
    async function loadParams() {
      const resolvedParams = await params;
      setCategoryName(resolvedParams.name);
    }

    loadParams();
  }, [params]);

  // 🔥 fetch products
  useEffect(() => {
    if (!categoryName) return;

    setLoading(true);

    fetch(`/api/products?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {categoryName} Products
      </h1>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-10 text-gray-500">Loading...</p>
      )}

      {/* Empty */}
      {!loading && products.length === 0 && (
        <div className="text-center mt-16">
          <h2 className="text-xl font-semibold text-gray-700">
            No Products Found 😕
          </h2>
          <p className="text-gray-500 mt-2">
            This category is currently empty.
          </p>
        </div>
      )}

      {/* Products */}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}