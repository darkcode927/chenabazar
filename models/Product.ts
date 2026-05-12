import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 4.5,
    },

    sold: {
      type: String,
      default: "0 Sold",
    },
    oldPrice: Number,

    description: {
      type: String,
      required: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    brand: {
      type: String,
      required: true,
    },
    flashSale: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Product = models.Product || model("Product", ProductSchema);
