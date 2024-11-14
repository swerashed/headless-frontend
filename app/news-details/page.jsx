import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import NewsSlider from "@/components/news/NewsSlider";
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
      <NewsSlider designType="main" sectionTitle="You may also like" />
    </>
  );
};

export default NewsDetailsPage;
