import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div
        className="clash-display leading-snug text-3xl md:text-4xl mt-20 mb-16"
        style={{ fontWeight: "600" }}
      >
        We Provide Best
        <div className="text-nowrap leading-snug">Customer Experiences</div>
      </div>
      <div className="flex space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
        <ExperienceCard
          title={"Original Product"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
          }
        />
        <ExperienceCard
          title={"Best Quality"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
          }
        />
        <ExperienceCard
          title={"Best Prices"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
          }
        />
      </div>
    </div>
  );
};

export default Experience;
