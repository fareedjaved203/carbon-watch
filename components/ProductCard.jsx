import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div>
      <div className="bg-[#F4F4F4] rounded-xl w-full">
        <div className="inline-block bg-[#FF0000] p-1 m-2 px-4 rounded-md text-white">
          Sale
        </div>

        <div className="flex justify-center items-center">
          <Image src={"/product.svg"} width={150} height={150} alt="watch" />
        </div>
      </div>
      <div className="flex justify-between my-2 items-center">
        <div>
          Autumn Watch
          <div style={{ fontWeight: "600" }}>
            $600.00 <span className="text-[#AAAAAA] line-through">$660.00</span>{" "}
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
