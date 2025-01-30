import { fetchResources } from "@/graphql/GET_RESOURCES";
import SectionHeading from "../headings/SectionHeading";
import TabList from "./TabList";

async function ResourcesDownloadSection({ data }) {
  const { title } = data;
  const downloadableFiles = await fetchResources();
  
  // Process the data to group by category and file names
  const groupedData = downloadableFiles.resources.nodes.reduce((acc, { title, pdfFile, categories }) => {

  
    // Extract category slug
    const categorySlug = categories.edges[0]?.node.slug;
  
    // If category doesn't exist in the accumulator, initialize it
    if (!acc[categorySlug]) {
      acc[categorySlug] = { category: categorySlug, files: [] };
    }
  
    // Push the file under the corresponding category
    acc[categorySlug].files.push({
      name: title,  
      link: pdfFile
    });
  
    return acc;
  }, {});
  
  // Convert the accumulator object to an array
  const result = Object.values(groupedData);
  


  return (
    <section className="py-[50px] md:py-20">
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading>{title}</SectionHeading>
        </div>
        <TabList result={result} />
      </div>
    </section>
  );
}

export default ResourcesDownloadSection;
