import componentMap from "@/components/index";
import { fetchImpactsPage } from "@/graphql/pages/GET_IMPACTS_PAGE";

async function ImpactPage() {
  const data = await fetchImpactsPage();
  const blocks = data?.page?.blocks || [];
  return (
    <div>
      {blocks &&
        blocks.map((block, index) => {
          const Component = componentMap[block.name];
          if (!Component) {
            console.warn(`Component not found for block "${block.name}"`);
            return null;
          }
          const data = JSON.parse(block.attributesJSON)?.data;
          return <Component key={index} data={data} />;
        })}
    </div>

  );
}

export default ImpactPage;
{/* <>

      <CountersSection
        SectionClassName="pb-0 md:pb-0 py-[50px] bg-surface md:py-[100px]"
        sectionTitle="Impact in statistics"
        className="counter-of-5 md:grid-cols-6"
        counterDetails={[
          {
            id: crypto.randomUUID(),
            count: "2000+",
            details: "Breast cencer screening",
            imageLink: "/counter-icons/client-happy.svg",
          },
          {
            id: crypto.randomUUID(),
            count: "300K+",
            details: "Women served",
            imageLink: "/counter-icons/patients.svg",
          },
          {
            id: crypto.randomUUID(),
            count: "1M+",
            details: "Free medicine distributed",
            imageLink: "/counter-icons/medicine-available.svg",
          },
          {
            id: crypto.randomUUID(),
            count: "5,000+",
            details: "Pediatric patient served",
            imageLink: "/counter-icons/patients.svg",
          },
          {
            id: crypto.randomUUID(),
            count: "300+",
            details: "Free health camp",
            imageLink: "/counter-icons/cells.svg",
          },
        ]}
      />
      <NewsCardContainer
        sectionTitle="Impact News"
        news={[
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Three new locations in Khulna Division",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Three new locations in Khulna Division",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-1.png",
          },
        ]}
      />
      <ResourcesDownloadSection
        sectionTitle="Resources Download"
        downloadableFiles={[
          {
            id: crypto.randomUUID(),
            year: "2011",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2012",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },

              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2013",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Financial" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2014",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },

              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2015",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },

              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2016",
            files: [
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2017",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2018",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2019",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },

              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2020",
            files: [
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2021",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2022",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2023",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2024",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
          {
            id: crypto.randomUUID(),
            year: "2025",
            files: [
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              {
                id: crypto.randomUUID(),
                fileTitle: "Leading with Impact Authenticity",
              },
              { id: crypto.randomUUID(), fileTitle: "Healthcare" },
              { id: crypto.randomUUID(), fileTitle: "Financial" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
              { id: crypto.randomUUID(), fileTitle: "Disciplined Growth" },
            ],
          },
        ]}
      />
    </> */}