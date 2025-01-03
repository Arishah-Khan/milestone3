import Image from 'next/image'
import React from 'react'

function Add() {
  return (
    <div className="flex flex-wrap justify-center  items-center gap-4 p-4 my-8">
      {/* Card 1 */}
      <div className="bg-[#eaebef]  p-4 rounded-lg shadow-md flex flex-row justify-center items-center w-full sm:w-[45%] lg:w-[30%]">
        <div>
          <Image
            src="/images/display1.png"
            alt="watch"
            width="300"
            height="300"
            className="mb-4 w-[280px] h-[180px] md:w-[300px] md:h-[200px] "
          />
        </div>
        <div className="text-center flex flex-col gap-4">
          <p className="text-[#7d7d7f] text-sm">BIG SCREEN</p>
          <h3 className="text-xl font-semibold text-black">SMART WATCH SERIES 7</h3>
          <h5 className="text-lg font-bold text-[#434377]">
            $35.00
            <span className="block mt-1 h-[2px] bg-[#434377] w-[50%] mx-auto"></span>
          </h5>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#eaebef] flex flex-row items-center p-4 rounded-lg shadow-md  w-full sm:w-[45%] lg:w-[30%]">
        <div>
          <Image
            src="/images/display2.png"
            alt="watch"
            width="200"
            height="200"
            className="mb-4 w-[300px] h-[200px]"
          />
        </div>
        <div className="text-center flex flex-col gap-4">
          <p className="text-[#7d7d7f] text-sm">STUDIO DISPLAY</p>
          <h3 className="text-xl font-semibold text-black">SMART WATCH SERIES 7</h3>
          <h5 className="text-lg font-bold text-[#434377]">
            $999.00
            <span className="block mt-1 h-[2px] bg-[#434377] w-[50%] mx-auto"></span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Add;
