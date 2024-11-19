import locationIcon from "@/public/icons/map-pointer.svg";
import mailIcon from "@/public/icons/mail.svg";
import telephoneIcon from "@/public/icons/telephone.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

function MapPopover({ style }) {
  return (
    <div
      style={style}
      className={cn(
        "absolute flex w-[293px] flex-col rounded-[10px] bg-[#FBFCFD] shadow-md shadow-dark/10",
      )}
    >
      <h4 className="border-b border-dark/10 p-[10px] font-onest text-xl font-medium capitalize leading-[30px] text-dark">
        Sylhet
      </h4>
      <div className="m-[10px] bg-white p-3">
        <h5 className="border-b border-dark/10 pb-[10px] font-onest text-xl font-medium capitalize leading-[30px] text-dark">
          Corporate office
        </h5>

        <div className="mt-5 flex w-full flex-col gap-4">
          <div className="flex w-full items-center gap-2">
            <Image
              src={locationIcon}
              alt="icon"
              className="\\ h-8 w-8 rounded-full border border-dark/10 p-2"
            />
            <p className="font-inter font-normal leading-[26px] text-dark/80">
              Rupayan Prime, Plot 02, Road 07, Dhanmondi, Dhaka – 1205
            </p>
          </div>
          <div className="flex w-full items-center gap-2">
            <Image
              src={mailIcon}
              alt="icon"
              className="\\ h-8 w-8 rounded-full border border-dark/10 p-2"
            />
            <p className="font-inter font-normal leading-[26px] text-dark/80">
              info@akskhanpharma.com
            </p>
          </div>
          <div className="flex w-full items-center gap-2">
            <Image
              src={telephoneIcon}
              alt="icon"
              className="\\ h-8 w-8 rounded-full border border-dark/10 p-2"
            />
            <p className="font-inter font-normal leading-[26px] text-dark/80">
              Tel:- +8801847360360
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPopover;
