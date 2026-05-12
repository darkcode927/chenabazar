export default function OrdersPage() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-4xl font-black text-gray-800">
          My Orders
        </h1>

        <p className="text-gray-500 mt-2">
          Track all your purchases
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-sky-50">
            <tr>
              <th className="p-5 text-left">Order</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t hover:bg-gray-50 transition">
              <td className="p-5 font-semibold">
                #CB1024
              </td>

              <td>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Processing
                </span>
              </td>

              <td>৳ 3,499</td>

              <td>May 8, 2026</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}