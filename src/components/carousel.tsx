import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Import your Carousel components

import Image from "next/image"; // Import Next.js Image component for optimized image loading

const products = [
  {
    id: 1,
    title: "Latest Mobile Phone",
    description:
      "Discover the latest features, advanced technology, and exceptional performance with our new range of mobile phones. Shop now to get the best deals!",
    image: "/images/mobile.png", // Path to the mobile image
  },
  {
    id: 2,
    title: "Smart Watch",
    description:
      "Stay connected and track your fitness with our new collection of smartwatches. The perfect blend of technology and style.",
    image: "/images/watch.png", // Path to the smart watch image
  },
  {
    id: 3,
    title: "Smart Refrigerator",
    description:
      "Upgrade your kitchen with the latest smart refrigerators. Experience advanced cooling technology and energy efficiency in one appliance.",
    image: "/images/refrigerator.png", // Path to the smart refrigerator image
  },
];

const AddToCart = () => {
  return (
    <div className="relative">
      {" "}
      {/* Wrap the carousel in a relative div to manage overflow */}
      {/* Carousel container */}
      <Carousel>
        <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 bg-[#434377] text-[#f8f8f8] z-30 transform -translate-y-1/2">
          <button className="bg-gray-200 rounded-full p-2">Previous</button>
        </CarouselPrevious>
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center px-6 bg-white gap-2">
                <div className="pl-4 md:pl-8 order-2 md:order-1 py-8">
                  <h2 className=" text-2xl sm:text-3xl  md:text-4xl lg:text-6xl font-bold mb-4 max-w-[500px] transition-all duration-300 ease-in-out hover:text-[#434377] hover:scale-105">
                    {product.title}
                  </h2>
                  <p className="text-base md:text-lg mb-4">{product.description}</p>
                  <button className="bg-[#434377] text-[#f8f8f8] px-6 py-3 rounded-md flex items-center transition-all duration-300 ease-in-out hover:bg-[#2f2fa9] hover:text-[#f8f8f8] ">
                    Shop Now
                  </button>
                </div>

                <div className="flex justify-center items-center order-1 md:order-2">
                  <Image
                    src={product.image} // Dynamically set the image path
                    alt={product.title}
                    width={600}
                    height={500}
                    className="object-contain pt-2 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel controls */}
        <CarouselNext className="absolute right-2 md:right-4 top-1/2 bg-[#434377] text-[#f8f8f8] transform -translate-y-1/2">
          <button className=" rounded-full p-2">Next</button>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default AddToCart;
