export default function OrdersPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-4xl font-black text-gray-800 dark:text-white">
          My Orders
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Track all your purchases
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-sky-50 dark:bg-gray-800">
            <tr>
              <th className="p-5 text-left text-gray-800 dark:text-gray-100">
                Order
              </th>

              <th className="text-gray-800 dark:text-gray-100">
                Status
              </th>

              <th className="text-gray-800 dark:text-gray-100">
                Total
              </th>

              <th className="text-gray-800 dark:text-gray-100">
                Date
              </th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              <td className="p-5 font-semibold text-gray-800 dark:text-gray-100">
                #CB1024
              </td>

              <td>
                <span className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 px-3 py-1 rounded-full text-sm">
                  Processing
                </span>
              </td>

              <td className="text-gray-800 dark:text-gray-100">
                ৳ 3,499
              </td>

              <td className="text-gray-800 dark:text-gray-100">
                May 8, 2026
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}