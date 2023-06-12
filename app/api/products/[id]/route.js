import Product from "@/models/ProductModel";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const product = await Product.findById(params.id);
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    throw new Error("Product Not Found");
  }
};
