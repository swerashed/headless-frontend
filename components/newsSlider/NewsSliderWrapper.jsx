import { fetchSelectedBlogs } from "@/graphql/GET_POSTS";
import NewsSliderSection from "./NewsSliderSection";

const NewsSliderWrapper = async ({ data }) => {
  const selectedBlogIds = data?.news?.map((item) => item.id);
  const blogsData = await fetchSelectedBlogs(selectedBlogIds);
  const blogs = blogsData?.posts?.nodes || [];

  return <NewsSliderSection data={data} blogs={blogs} />;
};

export default NewsSliderWrapper;
