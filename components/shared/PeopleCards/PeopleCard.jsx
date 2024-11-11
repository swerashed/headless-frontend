"use client";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PeopleCard = ({ director, variant }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div
            data-aos="fade-up"
            className="card group cursor-pointer overflow-hidden rounded-[10px]"
          >
            <div className="card-body overflow-hidden rounded-[10px]">
              <Image
                src={`/board-of-directors/${director.image}`}
                alt={director.name}
                width={410}
                height={450}
                className={`h-full ${variant === "3-col" ? "min-h-[450px]" : "min-h-[330px]"} w-full object-cover transition-all duration-300 group-hover:scale-105`}
              />
            </div>
            <div className="card-footer mt-5 space-y-[5px]">
              <p className="font-onest text-[24px] font-medium leading-[34px] text-dark">
                {director.name}
              </p>
              <p className="font-inter text-[14px] leading-[22px] text-dark-80">
                {director.title}
              </p>
            </div>
          </div>
        </DialogTrigger>

        <DialogContent className="max-h-[90vh] min-h-[662px] w-full max-w-[95%] rounded-lg lg:max-w-[80%]">
          <DialogHeader></DialogHeader>
          <DialogTitle className="hidden"></DialogTitle>
          <DialogDescription className="hidden">
          </DialogDescription>
          <div className="modal-content grid gap-[30px] overflow-hidden p-[5px] lg:grid-cols-2 lg:gap-[60px] lg:pt-[57px]">
            <div className="left-part max-h-[360px] min-h-[360px] overflow-hidden rounded-[10px] lg:min-h-[550px] lg:max-w-[470px]">
              <Image
                src={`/board-of-directors/${director.image}`}
                alt={director.name}
                width={410}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="right-part">
              <div className="head mb-5 space-y-[5px] border-b border-dark/10 pb-5">
                <p className="font-onest text-[36px] font-medium leading-[48px] text-dark">
                  {director.name}
                </p>
                <p className="font-inter text-[14px] leading-[22px] text-dark-80">
                  {director.title}
                </p>
              </div>
              <div className="body overflow-y-auto max-h-[150px] lg:max-h-[380px]">
                <p className="font-inter text-[16px] leading-[26px] text-dark-80">
                  Lorem ipsum dolor sit amet consectetur. Turpis suspendisse
                  justo imperdiet nibh ultrices tortor nibh. Tortor ultrices
                  molestie lacinia tortor pharetra. Ut quam ullamcorper orci
                  tincidunt aliquam adipiscing dui. Tincidunt donec fermentum
                  blandit sagittis lorem feugiat mattis nunc. Ornare in
                  adipiscing dictum vestibulum enim lobortis donec. Vulputate ut
                  fermentum ornare ut dictum elementum in. Pharetra eget sit
                  quam nisi dignissim erat molestie eget. Metus urna ac dolor
                  posuere metus ornare. Donec at nam non sollicitudin. Quam id
                  nunc nunc scelerisque tristique sem quis viverra. Et neque
                  vitae morbi convallis. Eu non porta vulputate congue tincidunt
                  egestas faucibus. Sit elit enim aliquam elit. Mauris habitasse
                  tincidunt ut adipiscing. Lacus velit eget sed eu a nec
                  consectetur massa.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PeopleCard;
