import SectionHeading from "../headings/SectionHeading";
import { fetchSelectedBlogs } from "@/graphql/GET_POSTS";
import NewsWithPagination from "./NewsWithPagination";

async function NewsCardContainer({data }) {
  const { title, button_title, view_items, news_type } = data;
  console.log(data);
  const newsData = await fetchSelectedBlogs([], null, 100, news_type);
    const news = newsData?.posts?.nodes || [];

  return (
    <div className="container py-[50px] lg:py-[100px]">
      <div data-aos="fade-up">
        <SectionHeading className="pb-[30px] md:pb-[60px]">
          {title}
        </SectionHeading>
      </div>
        <NewsWithPagination button_title={button_title} news={news} view_items={view_items} />
    </div>
  );
}

export default NewsCardContainer;
