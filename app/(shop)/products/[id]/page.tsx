"use client";

import { useEffect, useState } from "react";
import ProductDetails from "@/components/product/ProductDetails";
import ProductDetailSkeleton from "@/components/ui/ProductDetailSkeleton";
import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  if (error || !product) {
    return (
      <p className="py-20 text-center text-gray-500 dark:text-gray-400">
        Product not found.
      </p>
    );
  }

  return <ProductDetails product={product} />;
}
