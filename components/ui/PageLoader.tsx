import Spinner from "./Spinner";

type PageLoaderProps = {
  label?: string;
  fullScreen?: boolean;
};

export default function PageLoader({
  label = "Loading, please wait...",
  fullScreen = false,
}: PageLoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 px-4 ${
        fullScreen ? "min-h-[70vh]" : "min-h-[40vh] py-16"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-pink-500/20" />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 shadow-xl shadow-pink-500/30">
          <Spinner size="md" className="border-white border-t-transparent" />
        </div>
      </div>
      <div className="text-center">
        <p className="text-base font-semibold text-gray-800 dark:text-gray-100">
          {label}
        </p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Chena Bazar
        </p>
      </div>
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 animate-bounce rounded-full bg-pink-500"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
