import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import NewsSliderSection from "@/components/newsSlider/NewsSliderSection";
import RichTextContainer from "@/components/shared/RichTextContainer";
import React from "react";

const NewsDetailsPage = () => {
  return (
    <>
      <HeroBannerSecondary
        bannerImage="/hero-banners/board-of-directors.jpg"
        pageTitle="March 12, 2020"
        heading="AKS Healthcare launches state-of-the-Art
        Diagnostic center in Sylhet"
        social={true}
      />
      <RichTextContainer />
      <NewsSliderSection
        sectionClassName="bg-white"
        sectionHeading="You may also like"
        newsItems={[
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
            imageLink: "/recent-updates/recent-updates-2.png",
          },
          {
            id: crypto.randomUUID(),
            title: "Three new locations in Khulna Division",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-3.png",
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
              "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
            date: "March 12, 2020",
            imageLink: "/recent-updates/recent-updates-2.png",
          },
        ]}
      />
    </>
  );
};

export default NewsDetailsPage;
