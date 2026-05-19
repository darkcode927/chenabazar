/** Shared Tailwind classes for light/dark across the app */
export const theme = {
  page:
    "min-h-screen text-gray-900 dark:text-gray-100",
  shopPage:
    "min-h-screen bg-gradient-to-b from-pink-50/80 via-white to-gray-50 text-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-gray-100",
  card:
    "rounded-2xl border border-gray-200/80 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900/90",
  cardElevated:
    "rounded-2xl border border-gray-200/80 bg-white/90 shadow-lg backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95",
  heading: "font-black text-gray-900 dark:text-white",
  subtext: "text-gray-500 dark:text-gray-400",
  input:
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500",
  btnPrimary:
    "rounded-xl bg-gradient-to-r from-pink-500 to-red-500 px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-pink-500/25 active:scale-[0.98]",
  btnSecondary:
    "rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-800 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800",
  adminShell: "flex min-h-screen bg-[#f5f7fb] dark:bg-gray-950",
  adminHeader:
    "sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white/80 px-4 shadow-sm backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80 md:px-8",
  adminMain: "flex-1 p-4 md:p-8 pb-28 lg:pb-8",
  userShell:
    "flex min-h-screen bg-gradient-to-br from-slate-100 via-sky-50/80 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950",
  userSidebar:
    "hidden w-72 flex-col border-r border-gray-200/80 bg-white/85 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/90 md:flex",
  footer:
    "mt-20 border-t border-gray-200 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white dark:border-gray-800",
} as const;
