import mongoose from "mongoose";

const productSchema = new mongoose.Schema({}, { strict: false });

export const ProductSCHEMA = mongoose.model("product", productSchema);
