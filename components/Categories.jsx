import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="flex justify-between items-center my-8">
        <div className="text-3xl md:text-4xl" style={{ fontWeight: "600" }}>
          Best Categories
        </div>
        <div className="text-gray-600 underline">See All</div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* Left Side */}
        <div className="flex flex-col md:w-full space-y-4">
          <div className="flex justify-between bg-gradient-to-r from-[#f4f4f4] to-[#DEDBD6] h-1/2 pl-4 pt-4 rounded-md w-full">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-4xl">Sports Wear</div>
                <div className="font-montserrat">
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </div>
              <div>
                <Image
                  src={"/categoryBtn.svg"}
                  width={70}
                  height={70}
                  alt="fullscreen"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Image src={"/lady.svg"} width={320} height={320} alt="lady" />
            </div>
          </div>
          <div className="flex justify-between bg-gradient-to-r from-[#f4f4f4] to-[#DEDBD6] h-1/2 pl-4 pt-4 rounded-md w-full">
            <div className="flex flex-col justify-between">
              <div>
                <div className="text-4xl">Sports Wear</div>
                <div className="font-montserrat">
                  Lorem ipsum dolor sit amet consectetur
                </div>
              </div>
              <div>
                <Image
                  src={"/categoryBtn.svg"}
                  width={70}
                  height={70}
                  alt="fullscreen"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Image src={"/man.svg"} width={320} height={320} alt="man" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-between w-full bg-gradient-to-r from-[#f4f4f4] to-[#DEDBD6] px-4 pt-4 rounded-xl">
          <div>
            <div className="text-4xl">Smart Watches</div>
            <div className="font-montserrat">
              Lorem ipsum dolor sit amet consectetur
            </div>
          </div>
          <div className="w-full flex justify-between items-end">
            <Image
              src={"/categoryBtn.svg"}
              width={70}
              height={70}
              alt="fullscreen"
            />
            <div className="flex justify-center items-center w-full">
              <Image
                src={"/watches.svg"}
                width={360}
                height={360}
                alt="watches"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
