"use client";
import CoverageAreaTableHeader from "./CoverageAreaTableHeader";
import { Accordion } from "@/components/ui/accordion";
import CoverageAreaTableRow from "./CoverageAreaTableRow";
import { useState } from "react";
import LoadMoreButton from "../buttons/LoadMoreButton";

function CoverageAreaTable({ cta_url, cta_description, outlets }) {
  const [selectedDistricts, setSelectedDistricts] = useState("");
  const [displayCount, setDisplayCount] = useState(3); // Start with 3 items

  // Filter outlets based on search input
  const filteredOutlets = outlets?.filter((outlet) =>
    outlet.node.title.toLowerCase().includes(selectedDistricts)
  ) || [];

  // Slice the array to show only the required number of outlets
  const visibleOutlets = filteredOutlets.slice(0, displayCount);

  return (
    <div className="w-full">
      <CoverageAreaTableHeader setSelectedDistricts={setSelectedDistricts} />
      <div className="flex w-full flex-col focus-within:outline-0">
        <Accordion type="single" collapsible className="flex w-full flex-col">
          {visibleOutlets.map((outlet, index) => (
            <CoverageAreaTableRow key={index} outletDetails={outlet} />
          ))}
        </Accordion>
      </div>

      {/* Load More Button */}
      {filteredOutlets.length > displayCount && filteredOutlets.length > 3 && (
        <div className="mt-5 flex items-center justify-center">
          <LoadMoreButton
            border={true}
            onClick={() => setDisplayCount((prev) => prev + 3)}
          >
            Load More
          </LoadMoreButton>
        </div>
      )}

    </div>
  );
}

export default CoverageAreaTable;
