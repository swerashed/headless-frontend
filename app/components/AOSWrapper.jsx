"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children }) => {
  useEffect(() => {
    // window.scrollTo(0, 0);

    AOS.init({ duration: 1000, easing: "ease-in-out" });

    window.addEventListener("load", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("load", () => {
        AOS.refresh();
      });
    };
  }, []);

  return <div className="aos-wrapper">{children}</div>;
};

export default AOSWrapper;
