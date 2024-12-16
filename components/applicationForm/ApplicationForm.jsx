import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import DropZone from "../shared/DropZone";
import { cn } from "@/lib/utils";

function ApplicationForm() {
  return (
    <div data-aos="fade-up" className="flex w-full flex-col">
      <p className="mb-4 border-y border-dark/10 py-3 text-base font-normal leading-[26px] text-dark/80">
        <span className="font-semibold text-dark">Position:</span> Customer
        marketing Manager
      </p>
      <form className="grid grid-cols-1 gap-4 font-inter md:grid-cols-2 md:gap-5">
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="first-name"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            FIrst Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="first-name"
            type="text"
            placeholder="First name"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="last-name"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Last Name <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="last-name"
            type="text"
            placeholder="Last name"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="Phone"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Phone <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="phone"
            type="text"
            placeholder="Phone"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label
            htmlFor="email"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Email <span className="text-[#ED1B24]">*</span>
          </Label>
          <Input
            required
            id="email"
            type="email"
            placeholder="Email"
            className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
          />
        </div>
        <div className="mt-2 md:col-span-2 md:-mt-1">
          <DropZone className="group flex h-[110px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-dark/80 bg-gradient-to-t from-[#36F1B91A]/10 to-[#3484A41A]/10 transition-all duration-300 hover:border-green" />
          <p className="mt-2 font-inter text-sm font-normal leading-[22px] text-dark/80">
            Upload file size max 5MB. Accept file (.pdf)
          </p>
        </div>
        <button
          className={cn(
            "mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-blue stroke-white py-3 pl-8 pr-5 font-inter text-base font-semibold capitalize leading-[24px] text-white transition-all duration-300 sm:w-fit md:-mt-1",
          )}
        >
          <span>Submit Now</span>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.59961 16.7998L14.3996 11.9998L9.59961 7.19981"
              stroke="current"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
