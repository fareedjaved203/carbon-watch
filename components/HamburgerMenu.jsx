import React from "react";
import Image from "next/image";

const HamburgerMenu = () => {
  return (
    <header className="block md:hidden">
      <div class="flex p-2 flex-row justify-between items-center">
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
