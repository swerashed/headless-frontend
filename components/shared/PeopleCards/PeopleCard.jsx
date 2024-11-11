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
import React from "react";

const PeopleCard = ({ director, variant }) => {

  return (
    <div>
      <Dialog >
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

        <DialogContent className="min-h-[662px] max-h-[90vh] w-full max-w-[95%] lg:max-w-[80%] rounded-lg">
          <DialogHeader></DialogHeader>
          <DialogTitle className="hidden"></DialogTitle>
  <DialogDescription className="hidden">Description of the dialog content</DialogDescription>
          <div className="modal-content grid lg:grid-cols-2 gap-[30px] lg:gap-[60px] p-[5px] lg:pt-[57px] overflow-hidden">
            <div className="left-part min-h-[360px] max-h-[360px] lg:min-h-[550px] lg:max-w-[470px] overflow-hidden rounded-[10px]">
              <Image
                src={`/board-of-directors/${director.image}`}
                alt={director.name}
                width={410}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="right-part">
              <div className="head space-y-[5px] pb-5 border-b border-dark/10 mb-5">
                <p className="font-onest text-[36px] font-medium leading-[48px] text-dark">
                  {director.name}
                </p>
                <p className="font-inter text-[14px] leading-[22px] text-dark-80">
                  {director.title}
                </p>
              </div>
              <div className="body">
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
