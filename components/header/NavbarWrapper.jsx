"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function NavbarWrapper({ menuData, themeOptions }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100dvh";
    } else {
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
      document.documentElement.style.height = "100%";
    };
  }, [isMobileMenuOpen]);

  return (
    <Navbar
      isVisible={isVisible}
      isMobileMenuOpen={isMobileMenuOpen}
      onMobileMenuOpen={handleMobileMenu}
      menuData={menuData}
      themeOptions={themeOptions}
    />
  );
}

export default NavbarWrapper;
