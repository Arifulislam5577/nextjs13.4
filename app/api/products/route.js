import Product from "@/models/ProductModel";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const products = await Product.find();
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (error) {
    throw new Error("Product Not Found");
  }
};
