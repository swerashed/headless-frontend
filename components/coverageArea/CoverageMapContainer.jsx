"use client";
import Image from "next/image";
import Map from "./Map";

function CoverageMapContainer({ imageData, districts, page }) {
  return (
    <div className="md:col-span-1 md:row-span-2" data-aos="fade-left">
      <div className="col-start-2 flex items-center justify-center px-2 sm:p-8 md:row-end-7 md:max-h-[550px] lg:max-h-[650px] xl:pt-24">
        {page === "homepage" && <Map districts={districts} />}
        {page === "service" && (
          <div>
            <Image src={imageData} alt="Map Image" height={700} width={500} />
          </div>
        )}
        {page === "diagnostics" && (
          <div>
            <Image src={imageData} alt="Map Image" height={700} width={500} />
          </div>
        )}
      </div>
      <div className="my-5 mb-[30px] flex items-center justify-center gap-[26px] sm:mx-auto sm:gap-5 sm:p-[10px]">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-dark/10 bg-[#B5F0B4]"></div>
          <p className="font-inter text-sm font-medium capitalize leading-[22px] text-dark md:text-xs xl:text-base xl:font-semibold">
            Already Reached
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded border border-dark/10 bg-[#DAFFFF]"></div>
          <p className="font-inter text-sm font-medium capitalize leading-[22px] text-dark md:text-xs xl:text-base xl:font-semibold">
            Upcoming Reach
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoverageMapContainer;
