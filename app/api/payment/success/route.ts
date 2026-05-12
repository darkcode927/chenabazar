import { NextResponse } from "next/server";
import { Order } from "@/models/Order";
import { connectDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const val_id = data.get("val_id");
    const orderId = data.get("value_a");

    // 🔴 validation
    if (!val_id || !orderId) {
      return NextResponse.redirect("http://localhost:3000/fail");
    }

    // 🔥 VERIFY FROM SSL
    const verifyRes = await fetch(
      `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${val_id}&store_id=${process.env.STORE_ID}&store_passwd=${process.env.STORE_PASSWD}&format=json`
    );

    const verifyData = await verifyRes.json();

    console.log("VERIFY:", verifyData);

    await connectDB();

    // 🔥 Duplicate transaction check
    const existing = await Order.findOne({
      transactionId: verifyData.tran_id,
    });

    if (existing) {
      return NextResponse.redirect("http://localhost:3000/success");
    }

    // 🔐 VALID PAYMENT CHECK
    if (verifyData.status === "VALID") {
      await Order.findByIdAndUpdate(orderId, {
        transactionId: verifyData.tran_id,
        paymentMethod: verifyData.card_type,
        paymentStatus: "paid",
        status: "confirmed",
      });

      return NextResponse.redirect("http://localhost:3000/success");
    }

    // ❌ INVALID PAYMENT
    await Order.findByIdAndUpdate(orderId, {
      paymentStatus: "failed",
      status: "cancelled",
    });

    return NextResponse.redirect("http://localhost:3000/fail");

  } catch (error) {
    console.error("PAYMENT VERIFY ERROR:", error);

    return NextResponse.redirect("http://localhost:3000/fail");
  }
}