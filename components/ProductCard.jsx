import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div>
      <div className="clash-display bg-[#F4F4F4] rounded-xl w-full">
        <div
          className="inline-block bg-[#FF0000] p-1 m-2 px-4 rounded-md text-white"
          style={{ fontSize: "15.57px", lineHeight: "19.57px" }}
        >
          Sale
        </div>

        <div className="flex justify-center items-center">
          <Image src={"/product.svg"} width={150} height={150} alt="watch" />
        </div>
      </div>
      <div className="clash-display flex justify-between my-2 items-center">
        <div>
          Autumn Watch
          <div style={{ fontWeight: "600" }}>
            $600.00{" "}
            <span className="text-[#AAAAAA] line-through ml-2">$660.00</span>{" "}
          </div>
        </div>
        <div>
          <Image src={"/productCart.svg"} width={40} height={40} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
