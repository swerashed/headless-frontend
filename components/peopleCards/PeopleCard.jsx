"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function PeopleCard({ people }) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="group flex cursor-pointer flex-col gap-5">
          <div
            className="w-full overflow-hidden rounded-[10px] shadow-md shadow-dark/10"
            data-aos="fade-up"
          >
            <Image
              src={`/board-of-directors/${people.image}`}
              alt={people.name}
              width={410}
              height={450}
              className="aspect-[33/36] w-full object-cover transition-all duration-300 group-hover:scale-110 xl:aspect-[410/450]"
            />
          </div>
          <div
            className="flex flex-col items-start justify-start gap-[5px] text-left"
            data-aos="fade-up"
          >
            <h5 className="line-clamp-1 font-onest text-xl font-medium leading-[30px] text-dark md:text-2xl md:leading-[34px]">
              {people.name}
            </h5>
            <p className="line-clamp-1 font-inter text-sm font-normal leading-[22px] text-dark/80">
              {people.designation}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogOverlay className="bg-dark/70">
        <DialogContent className="h-[90vh] min-w-[90vw] max-w-[90vw] rounded-[20px] p-[10px] pr-0 sm:min-w-[80vw] sm:max-w-[70vw] md:h-[80vh] xl:min-w-[90vw] xl:max-w-[90vw] xl:p-[30px] xl:pt-20 2xl:min-w-[70vw] 2xl:max-w-[70vw]">
          <div className="flex h-full w-full flex-col gap-[30px] overflow-y-auto pr-[10px] md:flex-row md:overflow-hidden md:pr-0 xl:gap-[60px]">
            <div className="min-h-[360px] w-full overflow-hidden rounded-[10px] shadow-sm shadow-dark/10 xl:min-w-[470px] xl:max-w-[470px]">
              <Image
                src={`/board-of-directors/${people.image}`}
                alt={people.name}
                width={400}
                height={440}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex w-full flex-col md:overflow-y-auto md:pr-[15px]">
              <DialogHeader className="mb-10">
                <DialogTitle className="mb-[5px] text-start font-onest text-[28px] font-medium leading-[38px] leading-[48px] text-dark xl:text-4xl">
                  {people.name}
                </DialogTitle>
                <DialogDescription className="text-start font-inter text-sm font-normal leading-[22px] text-dark/80">
                  {people.designation}
                </DialogDescription>
              </DialogHeader>
              <p className="text-start font-inter text-base font-normal leading-[26px] text-dark/80">
                {people.details}
              </p>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}

export default PeopleCard;
