import { notFound } from "next/navigation";

async function getOrder(id: string) {
  if (!id) return null;
  const res = await fetch(`http://localhost:3000/api/orders/track/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}

export default async function TrackDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) {
    return (
      <div className="text-center p-10 text-red-500">Invalid Tracking ID</div>
    );
  }
  const order = await getOrder(id);

  if (!order) {
    return (
      <div className="text-center p-10 text-red-500">❌ Order not found</div>
    );
  }

  const statusColor =
    order.status === "confirmed"
      ? "text-green-600"
      : order.status === "pending"
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Tracking ID: {order.trackingId}</h1>

      {/* Status */}
      <div className="p-4 bg-gray-100 rounded">
        <p className={`font-semibold ${statusColor}`}>Status: {order.status}</p>
        <p>Payment: {order.paymentStatus}</p>
      </div>

      {/* Customer */}
      <div className="p-4 border rounded">
        <h2 className="font-semibold">Customer Info</h2>
        <p>{order.customer.name}</p>
        <p>{order.customer.phone}</p>
        <p>{order.customer.address}</p>
      </div>

      {/* Items */}
      <div className="p-4 border rounded">
        <h2 className="font-semibold">Items</h2>

        {order.items?.length === 0 ? (
          <p>No items found</p>
        ) : (
          order.items.map((item: any, i: number) => (
            <div key={i} className="flex justify-between py-1">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>৳ {item.price * item.quantity}</span>
            </div>
          ))
        )}
      </div>

      {/* Total */}
      <div className="text-right font-bold text-lg">
        Total: ৳ {order.totalAmount}
      </div>
    </div>
  );
}
