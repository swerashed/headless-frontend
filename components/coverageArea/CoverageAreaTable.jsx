import CoverageAreaTableHeader from "./CoverageAreaTableHeader";
import { Accordion } from "@/components/ui/accordion";

import CoverageAreaTableRow from "./CoverageAreaTableRow";

function CoverageAreaTable({ outlets }) {
  return (
    <div className="w-full">
      <CoverageAreaTableHeader />
      <div className="flex w-full flex-col focus-within:outline-0">
        <Accordion type="single" collapsible className="g flex w-full flex-col">
          {outlets.map((outlet) => (
            <CoverageAreaTableRow key={outlet.id} outletDetails={outlet} />
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default CoverageAreaTable;
