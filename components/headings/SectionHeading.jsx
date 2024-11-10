import cn from "@/utils/cn";
import React from "react";

function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={cn("font-onest text-[30px] font-medium text-dark", className)}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
