import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";

function CoverageAreaTableRow({ outletDetails }) {
  const outlets = outletDetails?.node?.outlets;
  const title = outletDetails?.node?.title;

  console.log(outlets);

  return (
    <>
      {outlets.map((outlet, index) => (
        <AccordionItem
          key={index}
          value={crypto.randomUUID()}
          className="border-b border-dark/10 md:hidden md:border-b [&[data-state=open]]:bg-surface md:[&[data-state=open]]:bg-white"
        >
          <AccordionTrigger
            iconClassName="md:bg-dark/5 md:rounded-full md:w-[36px] md:h-[36px] md:p-1 md:hover:bg-blue md:hover:text-white duration-300 transition-all"
            className="w-full justify-start px-4 py-[30px] text-blue hover:no-underline md:gap-6 md:px-0 md:py-[25px]"
          >
            <h6 className="flex-grow font-inter text-sm font-normal leading-[22px] text-dark md:hidden">
              {outlet.outlet_name}
            </h6>
            <h6 className="hidden flex-grow font-onest text-xl font-medium leading-[30px] text-dark md:block">
              {title}
            </h6>
            <h6 className="font-sm mr-1 line-clamp-1 w-[50%] text-end font-inter font-bold leading-[22px] text-blue sm:w-auto md:hidden">
              {title}
            </h6>
          </AccordionTrigger>
          <AccordionContent className="pb-0 md:hidden md:pb-[30px]">
            <Table className="md:hidden">
              <TableBody>
                <TableRow className="flex items-start justify-between gap-4 border-none px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark/80 transition-all duration-300 hover:bg-white">
                  <TableCell className="min-w-[102px] p-0">District</TableCell>
                  <TableCell className="min-w-[176px] p-0 text-right">
                    {title}
                  </TableCell>
                </TableRow>
                <TableRow className="flex items-start justify-between gap-4 border-none px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark/80 transition-all duration-300 hover:bg-white">
                  <TableCell className="min-w-[102px] p-0">Address</TableCell>
                  <TableCell className="min-w-[176px] p-0 text-right">
                    {outlet.outlet_address}
                  </TableCell>
                </TableRow>
                <TableRow className="flex items-start justify-between gap-4 border-none px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark/80 transition-all duration-300 hover:bg-white">
                  <TableCell className="min-w-[102px] p-0">
                    Outlet Number
                  </TableCell>
                  <TableCell className="min-w-[176px] p-0 text-right">
                    {outlet.outlet_number}
                  </TableCell>
                </TableRow>
                <Link
                  target="_blank"
                  className="inline-block w-full border-t border-dark/10 px-6 py-3 text-center font-inter text-base font-semibold leading-[24px] text-blue transition-all duration-300 hover:bg-dark hover:text-white"
                  href={outlet.map_link}
                >
                  View on Google Map
                </Link>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      ))}
      <AccordionItem
        value={outletDetails.node.id}
        className="hidden border-0 border-dark/10 md:block md:border-b [&[data-state=open]]:bg-surface md:[&[data-state=open]]:bg-white"
      >
        <AccordionTrigger
          iconClassName="md:bg-dark/5 text-dark md:rounded-full md:w-[36px] md:h-[36px] md:p-1 md:hover:bg-blue md:hover:text-white duration-300 transition-all"
          className="w-full justify-start px-4 py-[30px] text-blue hover:no-underline md:gap-6 md:px-0 md:py-[25px]"
        >
          <h6 className="flex-grow font-inter text-sm font-normal leading-[22px] text-dark md:hidden">
            Outlet Name
          </h6>
          <h6 className="hidden flex-grow font-onest text-xl font-medium leading-[30px] text-dark md:block">
            {title}
          </h6>
          <h6 className="font-sm mr-1 line-clamp-1 w-[50%] text-end font-inter font-bold leading-[22px] text-blue sm:w-auto md:hidden">
            {title}
          </h6>
        </AccordionTrigger>
        <AccordionContent className="hidden md:block">
          <Table className="hidden border border-dark/10 p-0 md:table">
            <TableHeader className="border-b border-dark/10">
              <TableRow className="border-none font-inter text-base font-normal leading-[26px] text-dark transition-all duration-300 hover:bg-surface">
                <TableHead className="w-[21%] border-r border-dark/10 p-[10px] text-inherit">
                  District
                </TableHead>
                <TableHead className="w-[26%] border-r border-dark/10 p-[10px] text-inherit">
                  Outlet Address
                </TableHead>
                <TableHead className="w-[26%] border-r border-dark/10 p-[10px] text-center text-inherit">
                  Outlet Number
                </TableHead>
                <TableHead className="w-[26%] border-r border-dark/10 p-[10px] text-center text-blue text-inherit">
                  View on Map
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {outlets.map((outlet, index) => (
                <TableRow
                  key={index}
                  className="transition-all duration-300 hover:bg-surface"
                >
                  <TableCell className="border-r border-dark/10 p-[10px] font-inter text-sm font-normal leading-[22px] text-dark/80">
                    {outlet.outlet_name}
                  </TableCell>
                  <TableCell className="border-r border-dark/10 p-[10px] font-inter text-sm font-normal leading-[22px] text-dark/80">
                    {outlet.outlet_address}
                  </TableCell>
                  <TableCell className="border-r border-dark/10 p-[10px] text-center font-inter text-sm font-normal leading-[22px] text-dark/80">
                    {outlet.outlet_number}
                  </TableCell>
                  <TableCell className="border-r border-dark/10 p-[10px] text-center font-inter text-base font-medium leading-[26px] text-blue">
                    <Link target="_blank" href={outlet.map_link}>
                      View On Map
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </AccordionContent>
      </AccordionItem>
    </>
  );
}

export default CoverageAreaTableRow;
