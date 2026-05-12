export default function ActivityPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-black text-gray-800">
        Recent Activity
      </h1>

      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-5">

        <div className="border-l-4 border-sky-500 pl-4">
          <p className="font-semibold">
            Ordered Digital Watch
          </p>

          <p className="text-sm text-gray-500">
            2 hours ago
          </p>
        </div>

        <div className="border-l-4 border-pink-500 pl-4">
          <p className="font-semibold">
            Added Cargo Pant to wishlist
          </p>

          <p className="text-sm text-gray-500">
            Yesterday
          </p>
        </div>

      </div>
    </div>
  );
}