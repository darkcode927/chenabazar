import Link from "next/link";

type BrandLogoProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
};

const iconSize = { sm: 36, md: 44, lg: 52 };
const textSize = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

export default function BrandLogo({
  href = "/",
  size = "md",
  showText = true,
  className = "",
}: BrandLogoProps) {
  const px = iconSize[size];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 ${className}`.trim()}
    >
      <span
        className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 shadow-lg shadow-pink-500/30 ring-2 ring-white/20 transition group-hover:scale-105 dark:ring-pink-500/20"
        style={{ width: px, height: px }}
      >
        <svg
          viewBox="0 0 48 48"
          className="h-[58%] w-[58%] text-white"
          fill="currentColor"
          aria-hidden
        >
          <path d="M14 18h20l-2 14H16L14 18zm4-6h12l2 6H16l2-6zm-8 8h28v4H10v-4z" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-pink-600">
          CB
        </span>
      </span>

      {showText && (
        <span className="flex flex-col leading-tight">
          <span
            className={`bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text font-black text-transparent ${textSize[size]}`}
          >
            Chena Bazar
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 sm:text-xs">
            Smart Shopping
          </span>
        </span>
      )}
    </Link>
  );
}
