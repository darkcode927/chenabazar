import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { isAdmin } from "@/lib/isAdmin";

// 🔥 GET ALL PRODUCTS + FILTER + SORT
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const sort = searchParams.get("sort");
    const search = searchParams.get("search");
    const flash = searchParams.get("flash"); 
    const brand = searchParams.get("brand");

    let query: any = {};

    // 🔥 CATEGORY FILTER (SAFE)
    if (category) {
      query.category = category.toLowerCase();
    }

    // 🔥 SEARCH (NAME BASED)
    if (search) {
      query.name = {
        $regex: search,
        $options: "i", // case-insensitive
      };
    }
    
    if (flash === "true") {
      query.flashSale = true;
    }
    
    if (brand) {
      query.brand = brand.toLowerCase();
    }

    let productsQuery = Product.find(query);

    // 🔥 SORTING
    if (sort === "low") {
      productsQuery = productsQuery.sort({ price: 1 });
    } else if (sort === "high") {
      productsQuery = productsQuery.sort({ price: -1 });
    } else {
      // default (same as your old code)
      productsQuery = productsQuery.sort({ createdAt: -1 });
    }

    const products = await productsQuery;

    return NextResponse.json(products);
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

// 🔥 CREATE PRODUCT (ADMIN ONLY)
export async function POST(req: Request) {
  try {
    // 🔐 ADMIN CHECK
    const admin = await isAdmin();

    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized Access" },
        { status: 401 },
      );
    }

    await connectDB();

    const body = await req.json();

    // 🔥 BULK INSERT
    if (Array.isArray(body)) {
      const createdProducts = await Product.insertMany(body);

      return NextResponse.json({
        success: true,
        message: "Products created successfully",
        data: createdProducts,
      });
    }

    // 🔥 SINGLE PRODUCT
    const {
      name,
      price,
      image,
      category,
      description,
      stock,
      brand,
      discountPrice,
      isFeatured,
      isTrending,
      flashSale,
    } = body;

    // 🔥 VALIDATION
    if (!name || !price || !image || !category || !brand) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 },
      );
    }

    // 🔥 CREATE PRODUCT
    const product = await Product.create({
      name,
      price,
      image,
      category: category.toLowerCase(),
      description: description || "No description available.",
      stock: stock || 0,
      brand,
      oldPrice: discountPrice || undefined,
      featured: isFeatured || false,
      isTrending: isTrending || false,
      flashSale: flashSale || false,
    });

    return NextResponse.json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);

    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create product" },
      { status: 500 },
    );
  }
}
