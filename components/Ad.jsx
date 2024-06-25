import React from "react";
import Image from "next/image";

const Ad = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 my-20">
      <div className="px-4 flex flex-col flex-col-reverse md:flex-row justify-between bg-black rounded-xl">
        <div className="p-4 flex justify-between flex-col space-y-8 md:space-y-0">
          <div className="space-y-2 md:space-y-1 mt-4 md:mt-4">
            <div className="inline-block bg-[#FF0000] p-1 px-4 rounded-md text-white">
              Sale
            </div>
            <div className="text-3xl md:text-5xl text-white">
              SMART WEARABLE.
            </div>
            <div className="text-xl md:text-3xl text-white">UP to 80% OFF</div>
          </div>
          <div>
            <Image src={"ad-dots.svg"} width={70} height={70} alt="dots" />
          </div>
        </div>
        <div>
          <Image src={"/ad.svg"} width={360} height={360} alt="watch" />
        </div>
      </div>
    </div>
  );
};

export default Ad;
