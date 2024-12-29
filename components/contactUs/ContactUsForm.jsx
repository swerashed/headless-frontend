import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import DropZone from "../shared/DropZone";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function ContactUsForm() {
  return (
    <div data-aos="fade-up" className="flex w-full flex-col">
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
        <div className="col-span-1 flex flex-col gap-1 md:col-span-2">
          <Label
            htmlFor="inquiry"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Inquiry Type <span className="text-[#ED1B24]">*</span>
          </Label>
          <Select>
            <SelectTrigger className="h-auto w-full rounded-[40px] border border-dark/10 bg-surface px-4 py-3 font-inter text-sm font-normal leading-[22px] text-dark focus-within:border-blue focus:ring-0 focus-visible:outline-0">
              <SelectValue placeholder="Select inquiry type" />
            </SelectTrigger>
            <SelectContent className="w-full rounded-[5px] bg-white">
              <SelectGroup>
                <SelectItem
                  className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                  value="dhaka"
                >
                  Dhaka
                </SelectItem>
                <SelectItem
                  className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                  value="barishal"
                >
                  Barishal
                </SelectItem>
                <SelectItem
                  className="h-auto px-5 py-[10px] font-inter text-sm font-normal leading-[22px]"
                  value="rajshahi"
                >
                  Rajshahi
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-1 flex flex-col gap-1 md:col-span-2">
          <Label
            htmlFor="inquiry"
            className="text-base font-normal capitalize leading-[26px] text-dark"
          >
            Message <span className="text-[#ED1B24]">*</span>
          </Label>
          <Textarea
            className="h-[120px] w-full rounded-[10px] border border-dark/10 bg-surface px-4 py-3 text-sm font-normal leading-[22px] text-dark placeholder:text-dark/80 focus-visible:border"
            placeholder="Type your message here."
          />
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

export default ContactUsForm;
