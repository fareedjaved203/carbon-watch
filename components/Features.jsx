import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="bg-gradient-to-r from-[#f4f4f4] to-[#DEDBD6] rounded-xl">
        <div className="flex flex-col space-y-8 justify-center items-center pt-16">
          <div
            className="clash-display text-3xl md:4xl"
            style={{ fontWeight: "600" }}
          >
            Best Features
          </div>
          <div className="font-montserrat text-xl px-4 md:px-2 md:w-1/2 text-center">
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </div>
          <div className="clash-display-medium mx-10 p-2 bg-white rounded-full flex space-x-4 items-center">
            <div
              className="bg-[#E3E1DE] rounded-full px-3 py-1"
              style={{ lineHeight: "30px" }}
            >
              Straps
            </div>
            <div style={{ lineHeight: "30px" }}>Battery</div>
            <div style={{ lineHeight: "30px" }}>Dials</div>
            <div style={{ lineHeight: "30px" }}>Straps</div>
          </div>
        </div>

        <div className="flex flex-col flex-col-reverse md:flex-row justify-between md:px-10">
          <div className="flex-1 space-y-8 mt-20 px-4">
            <div className="space-y-4">
              <div className="clash-display text-2xl md:text-3xl">
                Description
              </div>
              <div
                className="font-monserrat text-lg"
                style={{ fontWeight: "400" }}
              >
                Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi
                tellus vitae leo nunc. Lorem ipsum dolor sit amet consectetur.
                Eleifend nec morbi tellus vitae leo nunc.
              </div>
            </div>
            <div className="clash-display-medium text-lg flex flex-col space-y-4 pt-4 pb-8 md:pb-0">
              <div className="flex space-x-4 items-center">
                <Image
                  src={"/menuIcon.svg"}
                  width={22}
                  height={22}
                  alt="icon"
                />
                <div>Straps are leathery</div>
              </div>
              <div className="flex space-x-4 items-center">
                <Image
                  src={"/menuIcon.svg"}
                  width={22}
                  height={22}
                  alt="icon"
                />
                <div>Straps Edition 2.0</div>
              </div>
              <div className="flex space-x-4 items-center">
                <Image
                  src={"/menuIcon.svg"}
                  width={22}
                  height={22}
                  alt="icon"
                />
                <div>Hand Made Straps</div>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <Image
              src={"/featureWatch.svg"}
              width={600}
              height={600}
              alt="watch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
