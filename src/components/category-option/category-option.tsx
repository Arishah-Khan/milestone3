"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  slug: string;
  title: string;
  price: {
    newPrice: number;
    oldPrice: number;
  };
  image: string;
  category: string;
  rating: number;
}

const categories = [
  "All",
  "Laptop",
  "Mobile Phone",
  "Headphones",
  "Tablet",
  "Smart Watch",
  "Air Conditioner",
  "Bluetooth Speaker",
  "Washing Machine",
  "Microwave Oven",
];

export default function CategoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Fetch products on component mount
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/category"); // API endpoint

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    loadProducts();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  return (
    <>
    
        <title>Category Products</title>
        <meta name="description" content="Browse products by category" />
    
      <div className="min-h-screen bg-[#f8f8f8] py-12 px-1 sm:px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-start pl-3 mb-8">
          Category Products
        </h2>
        <div className="relative flex items-center mb-12">
          {/* Left Arrow Button */}
          <button
            onClick={() => {
              const container = document.querySelector(".carousel-container");
              container?.scrollBy({ left: -200, behavior: "smooth" });
            }}
            className="absolute left-0 z-10 bg-[#434377] text-white hover:bg-[#343466] p-3 rounded-full shadow-md focus:outline-none flex items-center justify-center -translate-x-1 md:-translate-x-2"
          >
            {/* Left Arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="carousel-container flex gap-2 md:gap-4 overflow-hidden w-full px-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-2 py-1 md:px-4 md:py-2 rounded whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-[#434377] text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                } transition duration-300 ease-in-out`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => {
              const container = document.querySelector(".carousel-container");
              container?.scrollBy({ left: 200, behavior: "smooth" });
            }}
            className="absolute right-0 z-10 bg-[#434377] text-white hover:bg-[#343466] p-3 rounded-full shadow-md focus:outline-none flex items-center justify-center translate-x-2"
          >
            {/* Right Arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4 sm:gap-6 px-2">
          {filteredProducts.map((category) => (
            <div
              key={category.slug}
              className="bg-white shadow-md rounded-lg p-1 sm:p-4 flex flex-col items-center text-center w-full"
            >
              <Link
                href={`/category/${category.slug}`}
                className="w-full h-full flex flex-col items-center"
              >
                <Image
                  src={category.image || "/placeholder.png"}
                  alt={category.title || "No title"}
                  width={200}
                  height={200}
                  className="rounded-md mb-4 w-auto object-contain h-20 sm:h-40"
                />
                <h2 className="flex justify-center items-center text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 w-full break-words">
                  {category.title}
                </h2>

                <div className="flex justify-center items-center mb-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-500 ${
                        i < Math.floor(category.rating)
                          ? "fas fa-star"
                          : i < category.rating
                          ? "fas fa-star-half-alt"
                          : "far fa-star"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div className="text-black font-bold text-sm sm:text-xl">
                    {/* Default to 0 if newPrice is undefined */}
                    ${category.price?.newPrice?.toFixed(2) || "0.00"}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-lg line-through">
                    {/* Default to 0 if oldPrice is undefined */}
                    ${category.price?.oldPrice?.toFixed(2) || "0.00"}
                  </div>
                </div>

                <Link
                  href={`/category/${category.slug}`}
                  className="mt-2 sm:mt-4 w-full px-1 text-xs sm:text-base py-1 sm:px-4 sm:py-2 bg-[#434377] text-white rounded transition duration-300 ease-in-out hover:bg-[#343466] hover:shadow-lg"
                >
                  Add To Cart
                </Link>
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No products found in this category.
          </div>
        )}
      </div>
    </>
  );
}
