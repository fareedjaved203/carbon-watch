import React from "react";
import Image from "next/image";

const ExperienceCard = ({ title, description }) => {
  return (
    <div className="bg-[#F4F4F4] p-4 rounded-xl">
      <div className="flex flex-col space-y-4">
        <div>
          <Image
            src={"/experience.svg"}
            width={100}
            height={100}
            alt="experience"
          />
        </div>
        <div className="clash-display text-2xl">{title}</div>
        <div className="font-montserrat">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
