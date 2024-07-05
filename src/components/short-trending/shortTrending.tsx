"use client";

import React, { useState } from "react";
import { accordionData } from "../data";
import arrowDownSvg from "../../../public/arrow-down.svg";
import Image from "next/image";

const ShortTrending = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div id="accordionFlushExample" className="mx-10">
      {accordionData.map((item, index) => {
        const isAccordionOpen = index === openAccordion;
        return (
          <div
            className={` border ${
              isAccordionOpen
                ? "border-b-0"
                : "border-l-0 border-r-0 border-t-0"
            } border-neutral-200 bg-white`}
            key={index}
          >
            <h2 className="mb-0" id={`flush-heading${index}`}>
              <button
                className="relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
                type="button"
                data-te-collapse-init
                data-te-target={`#flush-collapse${index}`}
                aria-expanded={isAccordionOpen ? "true" : "false"}
                onClick={() =>
                  setOpenAccordion((prev) => (prev === index ? null : index))
                }
              >
                {item.title}
                <span
                  className={`-mr-1 ml-auto h-5 w-5 shrink-0 ${
                    openAccordion === index
                      ? "rotate-[-180deg] fill-[#212529]"
                      : ""
                  } transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none`}
                >
                  <Image
                    src={arrowDownSvg}
                    alt="arrow-down"
                    height={20}
                    width={20}
                  />
                </span>
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className={`!visible ${isAccordionOpen ? "" : "hidden"} border-0`}
              data-te-collapse-item
              aria-labelledby={`flush-heading${index}`}
            >
              <div className="px-5 py-4">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShortTrending;
