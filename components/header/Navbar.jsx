"use client";

import Image from "next/image";
import NavbarRight from "./NavbarRight";
import NavbarLinks from "./NavbarLinks";
import { useEffect, useState, useRef } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

function Navbar({ isVisible, isMobileMenuOpen, onMobileMenuOpen, menuData }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev);
  };


  return (
    <header
      className={`fixed left-0 right-0 z-50 ${isVisible ? "lg:top-[10px]" : "top-0"} pointer-events-none transition-all duration-700 ease-in-out`}
    >
      <div className="mx-auto max-w-[1440px] lg:px-[15px] xl:px-[75px]">
        <div
          onClick={() => isSearchOpen && handleSearchOpen()}
          className={`pointer-events-auto border-b border-dark/10 bg-white px-4 py-[10px] transition-transform duration-300 lg:rounded-xl lg:border-none lg:bg-white/90 lg:backdrop-blur-[36] xl:px-5 ${isVisible ? "transform-none shadow-2xl" : "-translate-y-full"
            }`}
        >
          <div className="flex flex-row items-center justify-between gap-4 xl:gap-8">
            <div className="flex items-center justify-start md:min-w-[170px] xl:min-w-[210px]">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Aks Pharmaceuticals logo"
                  width={185}
                  height={60}
                  className="h-auto max-w-[136px] object-contain md:max-w-[182px]"
                />
              </Link>
            </div>
            {!isSearchOpen && <NavbarLinks menuData={menuData} />}
            <NavbarRight
              isSearchOpen={isSearchOpen}
              onSearchOpen={handleSearchOpen}
              isMobileMenuOpen={isMobileMenuOpen}
              onMobileMenuOpen={onMobileMenuOpen}
            />
          </div>
        </div>
      </div>
      {isMobileMenuOpen && <MobileMenu onMobileMenuOpen={onMobileMenuOpen} />}
    </header>
  );
}

export default Navbar;
