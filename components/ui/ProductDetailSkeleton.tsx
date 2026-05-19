export default function ProductDetailSkeleton() {
  return (
    <div
      className="mx-auto max-w-6xl animate-pulse px-4 py-10"
      aria-busy="true"
      aria-label="Loading product"
    >
      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-square rounded-2xl bg-gray-200 dark:bg-gray-800 sm:aspect-[4/5] md:h-[500px] md:aspect-auto" />
        <div className="flex flex-col justify-center space-y-5">
          <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-10 w-4/5 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="h-8 w-32 rounded bg-gray-200 dark:bg-gray-800" />
          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-800" />
            <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-800" />
          </div>
          <div className="flex gap-3 pt-4">
            <div className="h-12 flex-1 rounded-xl bg-gray-200 dark:bg-gray-800" />
            <div className="h-12 flex-1 rounded-xl bg-gray-200 dark:bg-gray-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
