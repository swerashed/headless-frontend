import React from "react";
import SectionHeading from "../headings/SectionHeading";

function CoverageHeader({title, description}) {
  return (
    <div className="md:col-span-1 md:row-span-1">
      <SectionHeading className="mb-5 sm:text-center md:text-left">
        {title}
      </SectionHeading>
      <p className="mb-[30px] font-inter text-base font-normal leading-[26px] text-dark/80 sm:mx-auto sm:max-w-md sm:text-center md:mx-0 md:max-w-lg md:text-left">
      {description}
      </p>
    </div>
  );
}

export default CoverageHeader;
