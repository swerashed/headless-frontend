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
          <div className="w-full overflow-hidden rounded-[10px] shadow-md shadow-dark/10">
            <Image
              src={`/board-of-directors/${people.image}`}
              alt={people.name}
              width={400}
              height={440}
              className="aspect-[11/12] w-full object-cover transition-all duration-300 group-hover:scale-105 md:aspect-[41/45]"
            />
          </div>
          <div className="flex min-h-10 flex-col items-start justify-start gap-1 text-left">
            <h5 className="font-onest text-xl font-medium text-dark md:text-2xl">
              {people.name}
            </h5>
            <p className="font-inter text-sm font-normal text-dark/80">
              {people.designation}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogOverlay className="bg-dark/90">
        <DialogContent className="h-[75vh] max-w-[90%] rounded-md p-[15px] pr-0 pt-16 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[90%] xl:max-w-[80%] xl:pr-10 2xl:h-[70vh] 2xl:max-w-[60%]">
          <div className="flex h-full flex-col items-start justify-start gap-[30px] overflow-y-auto pr-2 sm:pr-4 lg:flex-row lg:pr-10 xl:justify-between xl:gap-[60px] xl:pr-0">
            <Image
              src={`/board-of-directors/${people.image}`}
              alt={people.name}
              width={400}
              height={440}
              className="aspect-[31/36] w-full rounded-[10px] object-cover shadow-sm shadow-dark/10 lg:h-full lg:w-[400px] xl:w-[470px]"
            />
            <div className="flex w-full flex-grow flex-col items-start lg:w-1/2">
              <DialogHeader className="mb-5">
                <DialogTitle className="mb-1 text-start font-onest text-3xl font-medium text-dark md:text-4xl">
                  {people.name}
                </DialogTitle>
                <DialogDescription className="text-start font-inter text-sm font-normal text-dark/80">
                  {people.designation}
                </DialogDescription>
              </DialogHeader>
              <p className="text-start font-inter text-base font-normal text-dark/80">
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
