import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="bg-[#F6F6F6] flex flex-col flex-col-reverse md:flex-row justify-between items-center px-4 md:px-28 py-10 rounded-xl my-20">
        <div className="space-y-6 py-10">
          <div className="space-y-2">
            <div className="text-2xl md:text-4xl" style={{ fontWeight: "600" }}>
              Subscribe To Newsletter
            </div>
            <div
              className="font-inter text-[#8B8E99]"
              style={{ fontWeight: "500" }}
            >
              Get free guide about smart watches daily.{" "}
            </div>
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              className="rounded-lg py-2 px-4 outline-none flex-1"
              placeholder="Enter Email Address"
            />
            <button className="absolute right-0 top-0 rounded-full bg-black text-white py-2 px-4">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <Image src={"/newsletter.svg"} width={200} height={200} alt="watch" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
