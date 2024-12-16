import SectionHeading from "../headings/SectionHeading";
import TabList from "./TabList";

function ResourcesDownloadSection({ sectionTitle, downloadableFiles }) {
  return (
    <section className="py-[50px] md:py-20">
      <div className="container">
        <SectionHeading>{sectionTitle}</SectionHeading>
        <TabList downloadableFiles={downloadableFiles} />
      </div>
    </section>
  );
}

export default ResourcesDownloadSection;
