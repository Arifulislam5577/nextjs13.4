import Product from "@/models/ProductModel";
import mongoose from "mongoose";
import { productData } from "./db";

mongoose.connect(process.env.DATABASE_URL, () => {
  if (process.env.NODE_ENV !== "PRODUCTION") {
    console.log(`Database connection successful`);
  }
});

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("product deleted");
    await Product.insertMany(productData);
    console.log("product added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
