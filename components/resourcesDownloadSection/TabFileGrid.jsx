import { TabsContent } from "@/components/ui/tabs";
import TabContentCard from "./TabContentCard";

function TabFileGrid({ downloadableFiles }) {
  return (
    <>
      {downloadableFiles
        .sort((a, b) => b.year - a.year)
        .map((downloadableFile, index) => (
          <TabsContent
            data-aos="fade-up"
            value={downloadableFile.year}
            key={downloadableFile.id}
            className="grid grid-cols-1 gap-[15px] md:grid-cols-2 md:gap-[30px]"
          >
            {downloadableFile.files.map((file) => (
              <TabContentCard key={file.id} file={file} />
            ))}
          </TabsContent>
        ))}
    </>
  );
}

export default TabFileGrid;
