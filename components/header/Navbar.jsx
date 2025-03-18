"use client";

import Image from "next/image";
import NavbarRight from "./NavbarRight";
import NavbarLinks from "./NavbarLinks";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BlogNotification from "../shared/BlogNotification";



function Navbar({ isVisible, isMobileMenuOpen, onMobileMenuOpen, menuData, themeOptions }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBlogNotificationVisible, setIsBlogNotificationVisible] = useState(false);
  useEffect(() => {
    const isNotificationVisable = localStorage.getItem("isBlogNotificationVisible");
    if (isNotificationVisable === "false") {
      setIsBlogNotificationVisible(false);
    }else{
      setIsBlogNotificationVisible(themeOptions?.displayPopup);
    }
  }, [themeOptions]);
  const handleSearchOpen = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <header
      className={`pointer-events-auto  fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${!isBlogNotificationVisible && isVisible ? "lg:top-[10px]" : "top-0"}`}
    >
     {isBlogNotificationVisible && (
        <BlogNotification
          themeOptions={themeOptions}
          isVisible={isVisible}
          setIsBlogNotificationVisible={setIsBlogNotificationVisible}
        />
      )}
      <div className={cn("mx-auto max-w-[1440px] lg:px-[15px] xl:px-[75px]")}>
        <div
          onClick={() => isSearchOpen && handleSearchOpen()}
          className={`pointer-events-auto border-b border-dark/10 bg-white px-4 py-[10px] transition-transform duration-300 lg:rounded-xl lg:border-none lg:bg-white/90 lg:backdrop-blur-[36] xl:px-5 ${
            isVisible
              ? "transform-none shadow-2xl"
              : "-translate-y-full lg:-translate-y-[180%]"
          }`}
        >
          <div className="flex flex-row items-center justify-between gap-4 1.5xl:gap-8">
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
      {isMobileMenuOpen && (
        <MobileMenu menuData={menuData} onMobileMenuOpen={onMobileMenuOpen} />
      )}
    </header>
  );
}

export default Navbar;
