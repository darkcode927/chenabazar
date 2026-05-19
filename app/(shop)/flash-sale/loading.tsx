import ProductGridSkeleton from "@/components/ui/ProductGridSkeleton";

export default function FlashSaleLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 h-9 w-40 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
      <ProductGridSkeleton count={8} />
    </div>
  );
}
