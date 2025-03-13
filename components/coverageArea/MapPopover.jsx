import locationIcon from "@/public/icons/map-pointer.svg";
import mailIcon from "@/public/icons/mail.svg";
import telephoneIcon from "@/public/icons/telephone.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

function MapPopover({ districts, selectedDistrict, style }) {
  const district = districts.find(
    (district) => district.title === selectedDistrict,
  );
  const offices = district?.offices || [];

  if (!district) return;

  return (
    <div
      data-lenis-prevent
      style={style}
      className={cn(
        "absolute left-[2%] z-50 flex w-[260px] flex-col rounded-[10px] bg-[#FBFCFD] shadow-md shadow-dark/10 sm:left-[20%] md:left-[10%] lg:left-[25%] xl:w-[293px]",
      )}
    >
      <h4 className="border-b border-dark/10 p-[10px] pr-0 font-onest text-lg font-medium capitalize leading-[30px] text-dark xl:text-xl">
        {district?.title}
      </h4>
      <div className="scrollbar-thin m-3 mt-0 flex max-h-[220px] flex-col gap-8 overflow-x-auto bg-white p-3 xl:mt-3 xl:max-h-[250px]">
        {offices?.map((office, officeIndex) => (
          <div className="w-auto" key={officeIndex}>
            <h5 className="border-b border-dark/10 pb-[10px] font-inter text-base font-semibold capitalize leading-[24px] text-dark xl:text-base">
              {office?.title}
            </h5>

            <div className="mt-5 flex w-full flex-col gap-3 xl:gap-4">
              <div className="flex w-full items-center gap-2">
                <Image
                  src={locationIcon}
                  alt="icon"
                  className="h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <p className="font-inter text-xs font-normal leading-[22px] text-dark/80 xl:text-sm">
                  {office?.address}
                </p>
              </div>
              <div className="flex w-full items-center gap-2">
                <Image
                  src={mailIcon}
                  alt="icon"
                  className="h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <p className="font-inter text-xs font-normal leading-[22px] text-dark/80 xl:text-sm">
                  {office?.email}
                </p>
              </div>
              <div className="flex w-full items-center gap-2">
                <Image
                  src={telephoneIcon}
                  alt="icon"
                  className="h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <p className="font-inter text-xs font-normal leading-[22px] text-dark/80 xl:text-sm">
                  Tel: {office?.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapPopover;
