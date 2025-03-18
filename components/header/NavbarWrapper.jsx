"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function NavbarWrapper({ menuData, themeOptions }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    // Direct window width check for mobile behavior
    if (window.innerWidth < 1024) return;

    if (window.scrollY > lastScrollY && !isMobileMenuOpen) {
      setIsVisible(false);
    } else if (window.scrollY <= lastScrollY || isMobileMenuOpen) {
      setIsVisible(true);
    }

    setLastScrollY(window.scrollY);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    checkMobile(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
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