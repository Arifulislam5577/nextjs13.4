import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number,
    },
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || model("Product", productSchema);
export default Product;
