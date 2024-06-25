"use client";
import { useState } from "react";

const AccordionCard = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (id) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="w-full py-4">
        <div className="w-full space-y-6">
          <AccordionItem
            question="What types of hosting plans do you offer?"
            answer="We offer shared hosting, VPS hosting, dedicated server hosting, and cloud hosting plans."
            id="answer-1"
            expanded={expanded === "answer-1"}
            toggleAccordion={() => toggleAccordion("answer-1")}
          />
          <AccordionItem
            question="What is the uptime guarantee for your hosting services?"
            answer="We guarantee an uptime of 99.9% for all our hosting services."
            id="answer-2"
            expanded={expanded === "answer-2"}
            toggleAccordion={() => toggleAccordion("answer-2")}
          />
          <AccordionItem
            question="Do you provide website migration assistance?"
            answer="Yes, we offer free website migration assistance for new customers."
            id="answer-3"
            expanded={expanded === "answer-3"}
            toggleAccordion={() => toggleAccordion("answer-3")}
          />
          <AccordionItem
            question="What security measures do you have in place?"
            answer="We employ advanced security measures including firewalls, DDoS protection, and regular security audits."
            id="answer-4"
            expanded={expanded === "answer-4"}
            toggleAccordion={() => toggleAccordion("answer-4")}
          />
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ question, answer, id, expanded, toggleAccordion }) => {
  return (
    <div className="bg-gradient-to-r from-[#FCFCFC] to-[#F5F5F5] rounded-xl">
      <button
        className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
        onClick={toggleAccordion}
        aria-expanded={expanded}
        aria-controls={id}
      >
        <span>{question}</span>
        <svg
          className={`mt-1.5 md:mt-0 flex-shrink-0 transform h-5 w-5 text-black ${
            expanded ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {expanded ? (
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M5 12h14"
            ></path>
          ) : (
            <>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M5 12h14"
              ></path>
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M12 5v14"
              ></path>
            </>
          )}
        </svg>
      </button>
      <div
        className={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ${
          expanded ? "block" : "hidden"
        }`}
        id={id}
        aria-labelledby={`button-${id}`}
        style={{ display: expanded ? "block" : "none" }}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionCard;
