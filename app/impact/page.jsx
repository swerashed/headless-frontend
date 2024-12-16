import CountersSection from "@/components/counters/CountersSection";
import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import NewsCardContainer from "@/components/news/NewsCardContainer";
import ResourcesDownloadSection from "@/components/resourcesDownloadSection/ResourcesDownloadSection";

function ImpactPage() {
  return (
    <>
      <HeroBannerSecondary
        bannerImage="/hero-banners/impact.jpg"
        pageTitle="Impact"
        heading="Essential Insights into our Pharmacy's Impact"
      />
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
      <ResourcesDownloadSection />
    </>
  );
}

export default ImpactPage;
