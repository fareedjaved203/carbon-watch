import React from "react";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

const Menu = () => {
  return (
    <>
      <header
        class="container mx-auto hidden md:block text-black font-inter"
        style={{ fontSize: "13px", fontWeight: "500" }}
      >
        <div class="flex flex-nowrap flex-col p-5 px-10 md:flex-row items-center">
          <Image src={"/menuIcon.svg"} width={30} height={30} alt="menu-icon" />
          <nav
            class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hover:cursor-pointer "
            style={{ fontSize: "13px", fontWeight: "500" }}
          >
            <a class="mr-5 hover:text-gray-900 hover:underline ">Store</a>
            <a class="mr-5 hover:text-gray-900 hover:underline">Developer</a>
            <a class="mr-5 hover:text-gray-900 hover:underline">Teams</a>
            <a class="mr-5 hover:text-gray-900 hover:underline flex justify-center items-center space-x-1">
              <div>Pro</div>
              <Image src={"/new.svg"} width={40} height={40} alt="new" />
            </a>
            <a class="mr-5 hover:text-gray-900 hover:underline">Changelog</a>
            <a class="mr-5 hover:text-gray-900 hover:underline">Pricing</a>
            <a class="mr-5 hover:text-gray-900 hover:underline">Blog</a>
          </nav>
          <button className="bg-black text-[#D9D9D9] text-center rounded-full px-10 py-3 text-nowrap">
            Sign in
          </button>
        </div>
      </header>
      <HamburgerMenu />
    </>
  );
};

export default Menu;
