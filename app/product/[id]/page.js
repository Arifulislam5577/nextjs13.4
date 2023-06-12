/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React from "react";

async function getData(id) {
  const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);
  return data;
}

const SingleProduct = async ({ params }) => {
  const product = await getData(params.id);
  return (
    <section className="product py-10 min-h-screen">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
          <div className="col-span-1 text-center flex justify-center ">
            <img src={product.image} className="h-96 " alt={product.title} />
          </div>
          <div className="col-span-1">
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p className="text-gray-500 my-5">{product.description}</p>
            <h3 className="text-slate-700 font-bold mb-5">
              Rating - {product.rating?.rate} from {product.rating?.count}{" "}
              reviews
            </h3>
            <h3 className="text-slate-700 font-bold mb-5">
              Price - ${product.price}
            </h3>
            <button className="p-3 w-2/3 bg-slate-900 text-gray-50 hover:bg-slate-800 uppercase transition-all">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
