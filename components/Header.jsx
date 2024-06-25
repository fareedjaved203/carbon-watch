import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-center items-center w-full px-4 md:px-10 py-2 md:py-1">
      <div className="bg-gradient-to-r from-[#f4f4f4] to-[#DEDBD6] w-full flex justify-center items-center flex-col md:flex-row rounded-xl">
        <div className="flex-1 md:px-10 flex space-y-4 flex-col w-full p-2 py-4">
          <div className="text-4xl md:text-6xl space-y-4 w-full">
            <div className="flex space-x-2">
              <div className="z-10">Grab </div>
              <div className="text-center bg-white rounded-xl w-[37%] text-[#1E392B] shadow-lg transform -rotate-6 -translate-x-[20%]">
                50%
              </div>{" "}
            </div>
            <div className="text-nowrap">Off SmartWatch</div>
            <div>Collection</div>
          </div>
          <div className="font-montserrat">
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </div>
          <div>
            <button className="flex justify-center items-center bg-white text-black py-3 px-8 rounded-full space-x-2">
              <Image src={"/cart.svg"} width={20} height={20} alt="cart" />
              <div className="font-inter" style={{ fontWeight: "600" }}>
                Add to Cart
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-between px-10 w-full">
          <Image src={"/watch.svg"} width={400} height={400} alt="watch" />
          <Image src={"/dots.svg"} width={30} height={30} alt="dots" />
        </div>
      </div>
    </div>
  );
};

export default Header;
