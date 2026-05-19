export default function OrderDetailsPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-black text-gray-800 dark:text-white">
        Order Details
      </h1>

      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl">

        <p className="text-lg text-gray-800 dark:text-gray-100">
          Order ID:
          <span className="font-bold ml-2">
            #CB1024
          </span>
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Your order is currently being processed.
        </p>
      </div>
    </div>
  );
}