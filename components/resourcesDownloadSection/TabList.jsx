"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useState } from "react";
import TabFileGrid from "./TabFileGrid";

function TabList({ result }) {
  const tabsListRef = useRef(null);
  const tabRefs = useRef([]);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.clientX);
    setScrollLeft(tabsListRef.current.scrollLeft);
    tabsListRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const x = e.clientX - startX;
    tabsListRef.current.scrollLeft = scrollLeft - x;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    tabsListRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
    }
  };

  const handleTabClick = (e, index) => {
    e.preventDefault();
    const tab = tabRefs.current[index];
    if (tabsListRef.current && tab) {
      tab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const defaultYear = result[0].category

  return (
    <Tabs defaultValue={defaultYear} className="mt-10 w-full">
      <TabsList
        data-aos="fade-up"
        ref={tabsListRef}
        className="m-0 mb-10 flex h-auto justify-start gap-0 overflow-x-auto scroll-smooth rounded-none bg-surface p-0"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {result
          .sort((a, b) => b.category - a.category)
          .map((result, index) => (
            <TabsTrigger
              key={index}
              className="flex h-auto rounded-none border-0 border-b-2 border-transparent bg-transparent px-6 py-6 text-center font-onest text-xl font-medium leading-[30px] text-blue transition-all duration-300 data-[state=active]:border-blue data-[state=active]:bg-inherit data-[state=active]:text-dark data-[state=active]:shadow-none"
              value={result.category}
              onClick={(e) => handleTabClick(e, index)}
              ref={(el) => (tabRefs.current[index] = el)}
            >
              {result.category}
            </TabsTrigger>
          ))}
      </TabsList>
      <TabFileGrid result={result} />
    </Tabs>
  );
}

export default TabList;
