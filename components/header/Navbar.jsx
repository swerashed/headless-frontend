"use client";

import Image from "next/image";
import NavbarRight from "./NavbarRight";
import NavbarLinks from "./NavbarLinks";
import { useState } from "react";

function Navbar({ isVisible }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 ${isVisible ? "top-[10px]" : "top-0"} transition-all duration-700 ease-in-out`}
    >
      <div className="mx-auto max-w-[1440px] bg-red-400 px-[15px] xl:px-[75px]">
        <div
          onClick={() => isSearchOpen && handleSearchOpen()}
          className={`rounded-xl bg-white/90 px-4 py-[10px] backdrop-blur-xl transition-transform duration-300 xl:px-5 ${
            isVisible ? "transform-none shadow-2xl" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-row items-center justify-between gap-5 xl:gap-10">
            <div className="flex min-w-[210px] items-center justify-start">
              <Image
                src="/logo.svg"
                alt="Aks Pharmaceuticals logo"
                width={185}
                height={60}
                className="max-w-[185px] object-contain"
              />
            </div>
            {!isSearchOpen && <NavbarLinks />}
            <NavbarRight
              isSearchOpen={isSearchOpen}
              onSearchOpen={handleSearchOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
