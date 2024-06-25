import React from "react";
import Image from "next/image";

const HamburgerMenu = () => {
  return (
    <header className="block md:hidden px-4 py-2">
      <div class="flex flex-row justify-between items-center">
        <Image src={"/menuIcon.svg"} width={30} height={30} alt="menu-icon" />
        <Image
          src={"/hamburger.svg"}
          width={30}
          height={30}
          alt="hamburger-menu"
        />
      </div>
    </header>
  );
};

export default HamburgerMenu;
