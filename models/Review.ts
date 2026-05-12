import mongoose, { Schema, model, models } from "mongoose";

const ReviewSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: String,
  },
  { timestamps: true }
);

export const Review = models.Review || model("Review", ReviewSchema);
