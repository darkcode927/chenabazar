import { NextResponse } from "next/server";

import { Order } from "@/models/Order";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { items, totalAmount, customer } = body;

    // 🔐 Basic validation
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    if (!customer?.name || !customer?.phone || !customer?.address) {
      return NextResponse.json(
        { error: "Customer info missing" },
        { status: 400 }
      );
    }

    await connectDB();

    // 🔥 STEP 1: Create order FIRST (IMPORTANT)
    const order = await Order.create({
      items,
      totalAmount,
      customer,
      status: "pending",
      paymentStatus: "unpaid",
    });

    // 🔥 unique transaction id
    const tran_id = `TXN_${Date.now()}`;

    const data: Record<string, string> = {
      store_id: process.env.STORE_ID!,
      store_passwd: process.env.STORE_PASSWD!,
      total_amount: totalAmount.toString(),
      currency: "BDT",
      tran_id,

      // 🔥 URLs
      success_url: "http://localhost:3000/api/payment/success",
      fail_url: "http://localhost:3000/api/payment/fail",
      cancel_url: "http://localhost:3000/cancel",

      // 📦 product info
      product_name: "Chena Bazar Order",
      product_category: "Ecommerce",
      product_profile: "general",

      // 👤 customer
      cus_name: customer.name,
      cus_email: "test@email.com",
      cus_add1: customer.address,
      cus_phone: customer.phone,

      shipping_method: "NO",

      // 🔥 IMPORTANT: pass orderId
      value_a: order._id.toString(),
    };

    const response = await fetch(
      `${process.env.SSL_BASE_URL}/gwprocess/v4/api.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      }
    );

    const text = await response.text();

    console.log("SSL RAW RESPONSE:", text);

    try {
      const json = JSON.parse(text);

      return NextResponse.json(json);
    } catch (err) {
      return NextResponse.json(
        {
          error: "Invalid JSON from SSLCommerz",
          raw: text,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("INIT ERROR:", error);

    return NextResponse.json(
      { error: "Payment init failed" },
      { status: 500 }
    );
  }
}