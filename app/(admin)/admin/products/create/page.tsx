"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    discountPrice: "",
    category: "",
    brand: "",
    stock: "",
    image: "",
    description: "",
    isFeatured: false,
    isTrending: false,
    flashSale: false,
  });

  // 🔥 IMAGE UPLOAD
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);

      const data = new FormData();
      data.append("file", file);
      data.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
      );

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImage = await res.json();

      setForm((prev) => ({
        ...prev,
        image: uploadedImage.secure_url,
      }));
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 CREATE PRODUCT
  const handleCreateProduct = async () => {
    // ✅ VALIDATION
    if (
      !form.name ||
      !form.price ||
      !form.category ||
      !form.image ||
      !form.brand ||
      !form.description
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/products", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          price: Number(form.price),
          discountPrice: form.discountPrice
            ? Number(form.discountPrice)
            : null,
          category: form.category,
          brand: form.brand,
          description: form.description,
          stock: form.stock ? Number(form.stock) : 0,
          image: form.image,
          isFeatured: form.isFeatured,
          isTrending: form.isTrending,
          flashSale: form.flashSale,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.error || "Failed to create product");
      }

      alert("✅ Product Created");

      router.push("/admin/products");
      router.refresh();
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Product create failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* 🔥 Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-800 dark:text-white">
          Create Product
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Add new product to your store
        </p>
      </div>

      {/* 🔥 Form */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Product Name *
          </label>

          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3 focus:ring-2 focus:ring-pink-500 outline-none"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Price *
          </label>

          <input
            type="number"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3 outline-none"
          />
        </div>

        {/* Discount Price */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Discount Price
          </label>

          <input
            type="number"
            value={form.discountPrice}
            onChange={(e) =>
              setForm({
                ...form,
                discountPrice: e.target.value,
              })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3 outline-none"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Category *
          </label>

          <select
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3 outline-none"
          >
            <option value="">Select Category</option>
            <option value="fashion">Fashion</option>
            <option value="electronics">Electronics</option>
            <option value="mobile">Mobile</option>
            <option value="watches">Watches</option>
            <option value="furniture">Furniture</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Description *
          </label>

          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3 min-h-35 outline-none"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Brand
          </label>

          <input
            type="text"
            value={form.brand}
            onChange={(e) =>
              setForm({ ...form, brand: e.target.value })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3 outline-none"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Stock
          </label>

          <input
            type="number"
            value={form.stock}
            onChange={(e) =>
              setForm({ ...form, stock: e.target.value })
            }
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3 outline-none"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Product Image *
          </label>

          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-2xl px-4 py-3"
          />

          {loading && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Uploading...
            </p>
          )}

          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="w-40 h-40 object-cover rounded-2xl mt-4 border border-gray-200 dark:border-gray-700"
            />
          )}
        </div>

        {/* Toggles */}
        <div className="flex flex-wrap gap-4 text-gray-800 dark:text-gray-200">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.isFeatured}
              onChange={(e) =>
                setForm({
                  ...form,
                  isFeatured: e.target.checked,
                })
              }
            />
            Featured
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.isTrending}
              onChange={(e) =>
                setForm({
                  ...form,
                  isTrending: e.target.checked,
                })
              }
            />
            Trending
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.flashSale}
              onChange={(e) =>
                setForm({
                  ...form,
                  flashSale: e.target.checked,
                })
              }
            />
            Flash Sale
          </label>
        </div>

        {/* Submit */}
        <button
          onClick={handleCreateProduct}
          disabled={loading}
          className="w-full bg-linear-to-r from-pink-500 to-red-500 text-white py-4 rounded-2xl font-bold disabled:opacity-50"
        >
          {loading ? "Processing..." : "Create Product"}
        </button>
      </div>
    </div>
  );
}