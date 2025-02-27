"use client"
import { useState } from "react";
import NewsCard from "./NewsCard";
import LoadMoreButton from "../buttons/LoadMoreButton";

const NewsWithPagination = ({ button_title, news, view_items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = view_items || 9;
  const totalPosts = news.length;

  // Calculate the number of posts to show
  const displayedNews = news.slice(0, currentPage * postsPerPage);
  const handleLoadMore = (event) => {
    event.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <section>
      <div className="news-container grid gap-x-[20px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[60px]">
        {displayedNews.map((singleNews) => (
          <NewsCard blog={singleNews} key={singleNews?.id} />
        ))}
      </div>

      {displayedNews.length < totalPosts && (
        <div data-aos="fade-up" className="text-center">
        <LoadMoreButton as="button" className="mx-auto mt-[30px] lg:mt-[60px]" onClick={handleLoadMore}>
        {button_title}
        </LoadMoreButton>
        </div>
      )}
    </section>
  );
};

export default NewsWithPagination;
