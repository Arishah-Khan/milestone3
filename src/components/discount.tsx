import Image from "next/image";
import React from "react";

function Discount() {
  return (
    <div>
      <div className="bg-white p-8 md:p-4  grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-4">
        <div className="order-2 md:order-1 flex justify-center items-center">
          <Image
            src="/images/discount.png"
            alt="watch"
            width="300"
            height="300"
            className="mb-4 w-[300px] h-[200px] md:w-[600px] md:h-[300px]"
          />
        </div>
        <div className="flex flex-col  order-1 md:order-2 gap-4">
          <h4 className="text-center md:text-left">
            <span className=" bg-[#434377]  text-white px-4 py-2 rounded">Hurry Up!</span>
          
          </h4>
          <h3 className="text-2xl text-center md:text-left sm:text-3xl lg:text-4xl font-semibold text-black">
            Up to 25% discount <br/> check it out
          </h3>
          <span className="text-lg font-bold text-[#434377] text-center md:text-left">
          
            <span className="mt-1 border-b-2 border-[#434377] ">Shop Now</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Discount;
