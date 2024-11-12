import { cn } from "@/lib/utils";
import React from "react";

function SectionHeading({ children, className }) {
  return (
    <h2
      className={cn(
        "font-onest text-[30px] leading-[40px] lg:text-[40px] lg:leading-[50px] font-medium text-dark",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
