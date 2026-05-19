type SpinnerProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClass = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-[3px]",
  lg: "h-12 w-12 border-4",
};

export default function Spinner({ size = "md", className = "" }: SpinnerProps) {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-pink-500 border-t-transparent ${sizeClass[size]} ${className}`.trim()}
      role="status"
      aria-label="Loading"
    />
  );
}
