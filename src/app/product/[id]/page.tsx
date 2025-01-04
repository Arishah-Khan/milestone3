import { BASE_API_URL } from "@/lib/constants";
import Image from "next/image";
import React from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: { newPrice: number; oldPrice: number };
  image: string;
  rating: number;
  reviews: number;
  category: string;
  benefits: string[];
}

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } =await params;

  try {
    const res = await fetch(`${BASE_API_URL}/api/product/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch product data");
    }

    const result = await res.json();
    const product: Product = result.data;

    if(!BASE_API_URL){
      return null;
    }

    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-4">{product.title}</h1>
        <div className="flex flex-col md:flex-row items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div className="md:ml-8">
            <p className="text-lg text-gray-700 mb-2">{product.description}</p>
            <p className="font-semibold text-xl text-gray-900 mb-4">
              <span className="text-green-600">${product.price.newPrice}</span>{" "}
              <span className="line-through text-gray-500">${product.price.oldPrice}</span>
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              <strong>Rating:</strong> {product.rating} ⭐ ({product.reviews} reviews)
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <strong className="block mb-2">Benefits:</strong>
              {product.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600">{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="text-center text-red-500">
        Error loading product details.
      </div>
    );
  }
}

export default Page;
