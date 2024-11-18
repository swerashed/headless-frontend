"use client";

import { useState } from "react";
import SectionHeading from "../headings/SectionHeading";
import JobFilterForm from "./JobFilterForm";

function OpenJobListSection({ data }) {
  const [filterData, setFilterData] = useState({
    location: "all",
    department: "all",
  });

  const handleFilterSubmit = (data) => {
    setFilterData(data);
  };

  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="flex flex-col justify-between gap-5 md:gap-10 xl:flex-row xl:items-center">
          <div className="flex flex-col gap-[10px]">
            <SectionHeading>Current openings</SectionHeading>
            <p className="font-inter text-base font-normal leading-[26px] text-dark/80">
              4 open positions across all offices and all departments
            </p>
          </div>
          <JobFilterForm data={data} onSubmit={handleFilterSubmit} />
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between gap-10">
            <h4 className="font-onest text-2xl font-medium leading-[34px] text-dark">
              Pharmaceutical Sales Representative
            </h4>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenJobListSection;
