"use client";

import { useRouter } from "next/navigation";

export default function DeleteProductButton({
  productId,
}: {
  productId: string;
}) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      alert("✅ Product deleted");

      router.refresh();
    } catch (error) {
      console.error(error);

      alert("❌ Failed to delete product");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="flex-1 bg-red-50 text-red-600 py-2 rounded-xl font-semibold hover:bg-red-100 transition"
    >
      Delete
    </button>
  );
}