import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    // 🧾 Order Items
    items: [
      {
        productId: {
          type: String,
          required: true,
        },
        name: String,
        price: Number,
        quantity: Number,
      },
    ],

    // 💰 Pricing
    totalAmount: {
      type: Number,
      required: true,
    },

    // 🔐 Payment Info
    transactionId: {
      type: String,
      unique: true, // 🔥 prevent duplicate
    },

    paymentMethod: String, // bkash / card / nagad

    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "failed"],
      default: "unpaid",
    },

    // 📦 Order Status
    status: {
      type: String,
      enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    // 👤 Customer Info
    customer: {
      name: String,
      phone: String,
      address: String,
    },

    // 🔍 Tracking
    trackingId: {
      type: String,
      default: () => "TRK_" + Date.now(),
    },
  },
  { timestamps: true }
);

export const Order =
  models.Order || model("Order", OrderSchema);