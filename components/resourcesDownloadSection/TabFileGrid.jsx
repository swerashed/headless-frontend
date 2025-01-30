"use client";
import { TabsContent } from "@/components/ui/tabs";
import TabContentCard from "./TabContentCard";

function TabFileGrid({ result }) {
  return (
    <>
      {result
        .sort((a, b) => b.category - a.category)
        .map((result, index) => (
          <TabsContent
            data-aos="fade-up"
            value={result.category}
            key={index}
            className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[30px]"
          >
            {result?.files?.map((file, index) => (
              <TabContentCard key={index} file={file} />
            ))}
          </TabsContent>
        ))}
    </>
  );
}

export default TabFileGrid;
