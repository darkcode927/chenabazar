import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";

export default function ProductsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 h-9 w-48 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <ProductGridSkeleton count={8} />
    </div>
  );
}
