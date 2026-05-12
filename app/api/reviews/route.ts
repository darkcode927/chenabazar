import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Review } from "@/models/Review";

export async function GET() {
  try {
    await connectDB();
    const reviews = await Review.find().sort({ createdAt: -1 });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const review = await Review.create(body);
    return NextResponse.json(review);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create review" },
      { status: 500 }
    );
  }
}
