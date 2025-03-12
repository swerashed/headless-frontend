import { cn } from "@/lib/utils";
import React from "react";

function SectionHeading({ children, className }) {
  return (
    <h2
      className={cn(
        "font-onest text-[30px] font-medium leading-[40px] text-dark lg:text-[40px] lg:leading-[50px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
