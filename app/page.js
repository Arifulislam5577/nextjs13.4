import Product from "@/components/Product";
import axios from "axios";

async function getData() {
  const { data } = await axios("http://localhost:3000/api/products");
  return data;
}

export default async function Home() {
  const products = await getData();
  return (
    <div className="container mx-auto mt-10 grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between">
      {products?.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
}
