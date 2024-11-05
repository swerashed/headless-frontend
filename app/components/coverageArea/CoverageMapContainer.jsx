import Map from "./Map";

function CoverageMapContainer() {
  return (
    <div className="md:col-span-1 md:row-span-2">
      <div className="col-start-2 flex items-center justify-center p-2 sm:p-8 md:row-end-7 md:max-h-[550px] lg:max-h-[650px]">
        <Map />
      </div>
      <div className="mb-[30px] flex items-center gap-4 sm:mx-auto sm:justify-center sm:gap-5 sm:p-[10px]">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-[#1623401A] bg-[#DEFFDD]"></div>
          <p className="font-inter text-xs font-medium capitalize text-dark sm:text-sm">
            Already Reached
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-[#1623401A] bg-[#DAFFFF]"></div>
          <p className="font-inter text-xs font-medium capitalize text-dark sm:text-sm">
            Upcoming Reach
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverageMapContainer;
