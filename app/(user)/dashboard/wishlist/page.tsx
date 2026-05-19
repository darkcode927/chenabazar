export default function WishlistPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-black text-gray-800 dark:text-white">
        Wishlist ❤️
      </h1>

      <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-xl text-center">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          No Wishlist Items
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Save products you love here
        </p>
      </div>
    </div>
  );
}