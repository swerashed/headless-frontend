"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <button
      data-aos="fade-right"
      onClick={goBack}
      className="flex items-center justify-center gap-1 text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-dark"
    >
      <ChevronLeft className="h-5 w-5" />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
