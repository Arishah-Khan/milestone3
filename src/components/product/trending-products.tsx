import { BASE_API_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description: string;
  price: {
    newPrice: number;
    oldPrice: number;
  };
  image: string;
  rating: number;
}

export default async function Home() {
  try {
    const res = await fetch(`${BASE_API_URL}/api/product`);

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const products: Product[] = await res.json();

    if(!BASE_API_URL){
      return null;
    }

    return (
      <div className="min-h-screen bg-[#f8f8f8] py-12 px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-start pl-3 mb-8">
          Trending Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-2 sm:gap-6">
          {products.map((product) => (
          <div
          key={product.id}
          className="bg-white shadow-md rounded-lg p-2 sm:p-4 flex flex-col items-center text-center w-full"
        >
          <Link
            href={`/product/${product.id}`}
            className="w-full h-full flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="rounded-md mb-4 w-auto object-contain h-20 sm:h-40"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1 sm:mb-2 truncate">
              {product.title}
            </h2>
            <div className="flex justify-center items-center mb-1 sm:mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-500 ${
                    i < Math.floor(product.rating)
                      ? 'fas fa-star'
                      : i < product.rating
                      ? 'fas fa-star-half-alt'
                      : 'far fa-star'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="text-black font-bold text-base sm:text-xl">
                ${product.price.newPrice.toFixed(2)}
              </div>
              <div className="text-gray-500 text-sm sm:text-lg line-through">
                ${product.price.oldPrice.toFixed(2)}
              </div>
            </div>
            <div className="mt-2 sm:mt-4 w-full px-2 py-1 sm:px-4 sm:py-2 bg-[#434377] text-white rounded transition duration-300 ease-in-out hover:bg-[#343466] hover:shadow-lg text-center">
              Add To Cart
            </div>
          </Link>
        </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="text-red-500 text-center">Error loading products.</div>
    );
  }
}
