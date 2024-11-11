import { cn } from "@/lib/utils";
import React from "react";

function SectionHeading({ children, className }) {
  return (
    <h2
      className={cn(
        "font-onest text-[30px] font-medium leading-tight text-dark",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
