import { PRODUCT_GRID_CLASS } from "@/lib/product-grid";

type ProductGridSkeletonProps = {
  count?: number;
  className?: string;
};

export default function ProductGridSkeleton({
  count = 4,
  className = "",
}: ProductGridSkeletonProps) {
  return (
    <div
      className={`${PRODUCT_GRID_CLASS} ${className}`.trim()}
      aria-busy="true"
      aria-label="Loading products"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white/70 animate-pulse dark:border-gray-800 dark:bg-gray-900/70"
        >
          <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="h-8 rounded-lg bg-gray-200 dark:bg-gray-800" />
          </div>
        </div>
      ))}
    </div>
  );
}
