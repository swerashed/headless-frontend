import HeroBannerSecondary from "@/components/heroBanners/HeroBannerSecondary";
import NewsSliderSection from "@/components/newsSlider/NewsSliderSection";
import RichTextContainer from "@/components/shared/RichTextContainer";
import { getPost } from "@/graphql/blogs/GET_POST";
import { fetchSelectedBlogs } from "@/graphql/GET_POSTS";

const NewsDetailsPage = async ({ params }) => {
  const urlSlug = (await params).slug;
  const post = await getPost(urlSlug);

const title = post?.post?.title
const featuredImage = post?.post?.featuredImage
const content = post?.post?.content
const slug = post?.post?.slug
const categories = post?.post?.categories
const date = post?.post?.date
const social = true
// Convert the string to a Date object
const dateObject = new Date(date);
// Format the date
const options = { year: "numeric", month: "long", day: "numeric" };
const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);
const data = {title, page : formattedDate, image: featuredImage, social}
const sectionClassName = "bg-white"
const sectionHeading = "You may also like"
const selectedIds = []
const after = null
const postCount = 5
const blogsData = await fetchSelectedBlogs(selectedIds, after, postCount)
const newsItems = blogsData?.posts?.nodes || [];
  return (
    <>
      <HeroBannerSecondary data={data}/>
      <RichTextContainer content={content}/>
      <NewsSliderSection sectionHeading={sectionHeading} sectionClassName={sectionClassName} newsItems={newsItems}/>
    </>
  );
};

export default NewsDetailsPage;

