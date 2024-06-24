import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full px-20 py-2 md:py-1">
      <div className="bg-gradient-to-r from-[#f4f4f4] to-[#DEDBD6] w-full flex justify-center items-center flex-col md:flex-row rounded-xl">
        <div className="flex-1 px-10 flex space-y-4 flex-col">
          <div className="text-5xl md:text-7xl">
            Grab 50% Off SmartWatch Collection
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
        <div className="flex flex-1 justify-between px-10">
          <Image src={"/watch.svg"} width={400} height={400} alt="watch" />
          <Image src={"/dots.svg"} width={30} height={30} alt="dots" />
        </div>
      </div>
    </div>
  );
};

export default Header;
