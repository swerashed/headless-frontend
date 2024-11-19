import Map from "./Map";

function CoverageMapContainer() {
  return (
    <div className="md:col-span-1 md:row-span-2" data-aos="fade-left">
      <div className="col-start-2 flex items-center justify-center px-2 sm:p-8 md:row-end-7 md:max-h-[550px] lg:max-h-[650px] xl:pt-24">
        <Map />
      </div>
      <div className="my-5 mb-[30px] flex items-center gap-[10px] sm:mx-auto sm:justify-center sm:gap-5 sm:p-[10px]">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-dark/10 bg-[#DEFFDD]"></div>
          <p className="font-inter text-sm font-medium capitalize leading-[22px] text-dark sm:text-xs xl:text-sm">
            Already Reached
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-dark/10 bg-[#DAFFFF]"></div>
          <p className="font-inter text-sm font-medium capitalize leading-[22px] text-dark sm:text-xs xl:text-sm">
            Upcoming Reach
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverageMapContainer;
