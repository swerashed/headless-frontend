import SectionHeading from "../headings/SectionHeading";
import TabList from "./TabList";

function ResourcesDownloadSection({ sectionTitle, downloadableFiles }) {
  return (
    <section className="py-[50px] md:py-20">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{sectionTitle}</SectionHeading>
        </div>
        <TabList downloadableFiles={downloadableFiles} />
      </div>
    </section>
  );
}

export default ResourcesDownloadSection;
