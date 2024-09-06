import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true, },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true },
    showcases: [{ type: String, enum: ["Bestsellers", "Recommended", "New Arrivals", "Featured"] }], 
}, { minimize: false })

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;