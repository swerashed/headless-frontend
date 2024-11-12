import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
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
    </>
  );
};

export default NewsDetailsPage;
