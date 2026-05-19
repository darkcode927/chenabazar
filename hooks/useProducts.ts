"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";

type UseProductsOptions = {
  /** e.g. "?flash=true" — separate cache key from default list */
  query?: string;
  limit?: number;
};

let defaultListPromise: Promise<Product[]> | null = null;

function fetchProductList(query: string): Promise<Product[]> {
  if (query === "" && defaultListPromise) {
    return defaultListPromise;
  }

  const request = fetch(`/api/products${query}`)
    .then((res) => res.json())
    .then((data: Product[] | { error?: string }) =>
      Array.isArray(data) ? data : [],
    )
    .catch(() => [] as Product[]);

  if (query === "") {
    defaultListPromise = request;
    request.finally(() => {
      defaultListPromise = null;
    });
  }

  return request;
}

export function useProducts({
  query = "",
  limit,
}: UseProductsOptions = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchProductList(query)
      .then((data) => {
        if (cancelled) return;
        const list = limit != null ? data.slice(0, limit) : data;
        setProducts(list);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query, limit]);

  return { products, loading };
}
