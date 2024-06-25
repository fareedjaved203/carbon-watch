import React from "react";
import AccordionCard from "./AccordionCard";

const Accordion = () => {
  return (
    <div className="container mx-auto px-4 md:px-16">
      <div className="space-y-10">
        <div className="space-y-4">
          <div className="text-2xl md:text-4xl" style={{ fontWeight: "600" }}>
            What is in your Head?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus
            vitae leo nunc.
          </div>
        </div>
        <div>
          <AccordionCard />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
