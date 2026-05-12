import Image from "next/image";
import Link from "next/link";

import {
  FaBoxOpen,
  FaLayerGroup,
  FaPlus,
  FaStar,
  FaEdit,
  FaEye,
} from "react-icons/fa";

import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";

import DeleteProductButton from "@/components/admin/DeleteProductButton";

export default async function AdminProductsPage() {
  await connectDB();

  const products = await Product.find().sort({
    createdAt: -1,
  });

  const totalCategories = new Set(
    products.map((p: any) => p.category)
  ).size;

  return (
    <div className="space-y-10">
      
      {/* 🔥 TOP HERO */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 p-8 md:p-10 shadow-2xl">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-black/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          {/* Left */}
          <div className="max-w-2xl">
            
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <FaBoxOpen />
              Product Control Center
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white mt-5 leading-tight">
              Manage Your
              <span className="block">
                E-Commerce Products
              </span>
            </h1>

            <p className="text-pink-100 mt-4 text-lg leading-relaxed">
              Upload products, edit pricing, manage categories,
              and control your entire inventory system from one place.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            <Link
              href="/admin/products/create"
              className="group bg-white text-gray-900 px-7 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaPlus className="group-hover:rotate-90 transition duration-300" />
              Add Product
            </Link>

            <Link
              href="/"
              className="bg-black/20 backdrop-blur-xl border border-white/20 text-white px-7 py-4 rounded-2xl font-semibold hover:bg-black/30 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaEye />
              View Store
            </Link>
          </div>
        </div>
      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        
        {/* Total Products */}
        <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-gray-100 p-7 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60" />

          <div className="relative z-10 flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Total Products
              </p>

              <h2 className="text-4xl font-black mt-3 text-gray-800">
                {products.length}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <FaBoxOpen className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-gray-100 p-7 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60" />

          <div className="relative z-10 flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Categories
              </p>

              <h2 className="text-4xl font-black mt-3 text-gray-800">
                {totalCategories}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <FaLayerGroup className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Latest */}
        <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-gray-100 p-7 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-60" />

          <div className="relative z-10 flex items-start justify-between">
            
            <div className="min-w-0">
              <p className="text-gray-500 font-medium">
                Latest Product
              </p>

              <h2 className="text-xl font-black mt-3 text-gray-800 truncate">
                {products[0]?.name || "No Product"}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <FaStar className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Active Store */}
        <div className="group relative overflow-hidden bg-white rounded-[2rem] border border-gray-100 p-7 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl opacity-60" />

          <div className="relative z-10 flex items-start justify-between">
            
            <div>
              <p className="text-gray-500 font-medium">
                Store Status
              </p>

              <h2 className="text-2xl font-black mt-3 text-emerald-600">
                Active
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <FaEye className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* 🔥 PRODUCTS */}
      {products.length === 0 ? (
        <div className="bg-white rounded-[2rem] border border-dashed border-gray-300 p-20 text-center shadow-sm">
          
          <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center mx-auto">
            <FaBoxOpen className="text-4xl text-pink-500" />
          </div>

          <h2 className="text-3xl font-black text-gray-800 mt-6">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Start building your professional online store.
          </p>

          <Link
            href="/admin/products/create"
            className="inline-flex items-center gap-3 mt-8 bg-gradient-to-r from-pink-500 to-red-500 text-white px-7 py-4 rounded-2xl font-bold shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaPlus />
            Add First Product
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
          
          {products.map((product: any) => (
            <div
              key={product._id}
              className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              
              {/* 🔥 IMAGE */}
              <div className="relative h-72 overflow-hidden">
                
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Category */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-xl border border-white/20 text-white text-xs px-4 py-2 rounded-full capitalize font-semibold">
                  {product.category}
                </div>

                {/* Floating Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
                  
                  <Link
                    href={`/admin/products/edit/${product._id}`}
                    className="w-11 h-11 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-xl hover:scale-110 transition"
                  >
                    <FaEdit />
                  </Link>
                </div>

                {/* Product ID */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-xl text-white text-xs px-3 py-1 rounded-full">
                  #{product._id.toString().slice(-6)}
                </div>
              </div>

              {/* 🔥 INFO */}
              <div className="p-6 space-y-4">
                
                <div>
                  <h2 className="text-xl font-black text-gray-800 line-clamp-1">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-1 capitalize">
                    Premium {product.category} collection
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  
                  <div>
                    <p className="text-sm text-gray-400">
                      Product Price
                    </p>

                    <h3 className="text-3xl font-black text-pink-600 mt-1">
                      ৳ {product.price}
                    </h3>
                  </div>

                  <div className="bg-pink-50 text-pink-600 px-3 py-2 rounded-2xl text-sm font-bold">
                    In Stock
                  </div>
                </div>

                {/* 🔥 ACTION BUTTONS */}
                <div className="flex gap-3 pt-3">
                  
                  <Link
                    href={`/admin/products/edit/${product._id}`}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <FaEdit />
                    Edit
                  </Link>

                  <DeleteProductButton
                    productId={product._id.toString()}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}