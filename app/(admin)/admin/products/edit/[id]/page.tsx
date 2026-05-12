"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

export default function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [productId, setProductId] =
    useState("");

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  // 🔥 GET PRODUCT
  useEffect(() => {
    const fetchProduct = async () => {
      const { id } = await params;

      setProductId(id);

      const res = await fetch(
        `/api/products`
      );

      const products = await res.json();

      const product = products.find(
        (p: any) => p._id === id
      );

      if (product) {
        setForm({
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.image,
        });
      }
    };

    fetchProduct();
  }, [params]);

  // 🔥 IMAGE UPLOAD
  const handleImageUpload = async (
    e: any
  ) => {
    const file = e.target.files[0];

    if (!file) return;

    const data = new FormData();

    data.append("file", file);

    data.append(
      "upload_preset",
      process.env
        .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const uploaded =
      await res.json();

    setForm({
      ...form,
      image: uploaded.secure_url,
    });
  };

  // 🔥 UPDATE PRODUCT
  const handleUpdate = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `/api/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...form,
            price: Number(form.price),
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Update failed"
        );
      }

      alert(
        "✅ Product Updated"
      );

      router.push(
        "/admin/products"
      );

      router.refresh();
    } catch (error) {
      alert(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl border shadow-sm p-8 space-y-6">
        
        <h1 className="text-3xl font-black">
          Edit Product
        </h1>

        <input
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          placeholder="Product Name"
          className="w-full border rounded-2xl p-4"
        />

        <input
          value={form.price}
          onChange={(e) =>
            setForm({
              ...form,
              price: e.target.value,
            })
          }
          placeholder="Price"
          className="w-full border rounded-2xl p-4"
        />

        <input
          value={form.category}
          onChange={(e) =>
            setForm({
              ...form,
              category:
                e.target.value,
            })
          }
          placeholder="Category"
          className="w-full border rounded-2xl p-4"
        />

        <input
          type="file"
          onChange={
            handleImageUpload
          }
          className="w-full border rounded-2xl p-4"
        />

        {form.image && (
          <img
            src={form.image}
            className="w-40 h-40 rounded-2xl object-cover"
          />
        )}

        <button
          onClick={
            handleUpdate
          }
          disabled={loading}
          className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-4 rounded-2xl font-bold"
        >
          {loading
            ? "Updating..."
            : "Update Product"}
        </button>
      </div>
    </div>
  );
}