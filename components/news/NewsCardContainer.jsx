import React from "react";
import NewsCard from "./NewsCard";
import SectionHeading from "../headings/SectionHeading";

const NewsCardContainer = () => {
    const news = [
        {
          id: crypto.randomUUID(),
          title: "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
          date: "March 12, 2020",
          image: "recent-updates-1",
          link: "/healthcare-launches-state-of-the-art",
        },
        {
          id: crypto.randomUUID(),
          title: "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
          date: "March 12, 2020",
          image: "recent-updates-2",
          link: "/pharmaceuticals-500000-patients-served",
        },
        {
          id: crypto.randomUUID(),
          title: "Three new locations in Khulna Division",
          date: "March 12, 2020",
          image: "recent-updates-3",
          link: "/new-locations-khulna-division",
        },
        {
          id: crypto.randomUUID(),
          title: "AKS Healthcare launches state-of-the-Art Diagnostic center in Sylhet",
          date: "March 12, 2020",
          image: "recent-updates-1",
          link: "/healthcare-launches-state-of-the-Art",
        },
        {
          id: crypto.randomUUID(),
          title: "AKS Khan Pharmaceuticals crosses major milestone with 500,000 patients Served",
          date: "March 12, 2020",
          image: "recent-updates-2",
          link: "/pharmaceuticals-500000-patients-served",
        },
        {
          id: crypto.randomUUID(),
          title: "Three new locations in Khulna Division",
          date: "March 12, 2020",
          image: "recent-updates-3",
          link: "/new-locations-khulna-division",
        },
      ];
      
  return (
    <div className="container py-[50px] lg:py-[100px]">
      <SectionHeading className="pb-[60px]">Latest News</SectionHeading>

     <div className="news-container grid md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[40px] lg:gap-x-[30px] lg:gap-y-[60px]">
     {news.map((singleNews, index) => (
        <NewsCard news={singleNews} key={index} />
      ))}
     </div>
    </div>
  );
};

export default NewsCardContainer;
