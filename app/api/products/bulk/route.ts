import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.json();

    if (!Array.isArray(data)) {
      return NextResponse.json(
        { error: "Data must be array" },
        { status: 400 }
      );
    }

    // 🔥 SAFE MAPPING (important)
    const products = data.map((item, index) => ({
      name: item.name || `Product ${index + 1}`,
      price: Number(item.price) || 0,
      discountPrice: Number(item.discountPrice) || 0,
      category: item.category || "others",
      brand: item.brand || "generic",
      stock: Number(item.stock) || 0,
      image: item.image || "https://picsum.photos/300",
      
      // 🔥 FIX: required field
      description:
        item.description ||
        `${item.name || "Product"} - Premium quality product`,

      isFeatured: item.isFeatured || false,
      isTrending: item.isTrending || false,
      flashSale: item.flashSale || false,

      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    // 🔥 IMPORTANT: partial insert allowed
    const result = await Product.insertMany(products, {
      ordered: false,
    });

    return NextResponse.json({
      message: "Bulk insert success",
      inserted: result.length,
    });
  } catch (error: unknown) {
    let message = "Unknown error";

    if (error instanceof Error) {
      message = error.message;
    }

    console.error("❌ BULK ERROR:", message);

    return NextResponse.json(
      {
        error: "Bulk insert failed",
        details: message,
      },
      { status: 500 }
    );
  }
}