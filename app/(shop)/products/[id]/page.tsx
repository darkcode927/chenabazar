// app/(shop)/products/[id]/page.tsx

"use client";

import { useEffect, useState } from "react";
import ProductDetails from "@/components/product/ProductDetails";
import { useParams } from "next/navigation";

export default function ProductPage() {
    const params = useParams();
  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return <ProductDetails product={product} />;
}