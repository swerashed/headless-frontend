import NewsHero from "@/components/newsHero/NewsHero";
import NewsCardContainer from "@/components/newsSlider/NewsCardContainer";

const NewsPage = () => {
  return (
    <>
      <NewsHero
        news={[
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-1.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-2.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Three new locations in Khulna Division",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-3.png",
          },
          {
            id: crypto.randomUUID(),
            title:
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            image: "/recent-updates/recent-updates-1.png",
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
    </>
  );
};

export default NewsPage;
