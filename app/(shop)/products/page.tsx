import { Suspense } from "react";
import ProductsClient from "./ProductsClient";
import PageLoader from "@/components/ui/PageLoader";

export default function ProductsPage() {
  return (
    <Suspense fallback={<PageLoader label="Loading products..." />}>
      <ProductsClient />
    </Suspense>
  );
}
