import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true, // Adding an index for quicker searches
    },
    cartItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
          index: true, // Indexing to improve query performance
        },
        size: {
          type: String,
          required: true,
          enum: ["XS","S", "M", "L", "XL","2XL","3XL"], // Validation to ensure only valid sizes are entered
        },
        qty: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"], // Validation to ensure positive quantities
        },
      },
    ],
  },
  { timestamps: true }
);

const cartModel = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default cartModel;
