import SectionHeading from "../headings/SectionHeading";
import PrimaryButton from "../buttons/PrimaryButton";
import NewsCard from "../newsSlider/NewsCard";

function NewsCardContainer({ sectionTitle, news }) {
  return (
    <div className="container py-[50px] lg:py-[100px]">
      <div data-aos="fade-up">
        <SectionHeading className="pb-[30px] md:pb-[60px]">
          {sectionTitle}
        </SectionHeading>
      </div>

      <div className="news-container grid gap-x-[20px] gap-y-[40px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[60px]">
        {news.map((singleNews, index) => (
          <NewsCard news={singleNews} key={index} />
        ))}
      </div>

      <div data-aos="fade-up">
        <PrimaryButton className="mx-auto mt-[30px] lg:mt-[60px]">
          Load More
        </PrimaryButton>
      </div>
    </div>
  );
}

export default NewsCardContainer;
