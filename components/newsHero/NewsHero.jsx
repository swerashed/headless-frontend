import FeatureNewsLargeCard from "./FeatureNewsLargeCard";
import FeatureNewsList from "./FeatureNewsList";
import NewsHeroSlider from "./NewsHeroSlider";

const NewsHero = ({ news }) => {
  const topNews = news[0];
  const otherTopNews = news.slice(1, 4);

  return (
    <section className="bg-surface pb-[30px] pt-[95px] lg:pb-[60px] lg:pt-[120px]">
      <div className="container">
        <div className="hidden grid-cols-6 gap-[30px] lg:grid">
          <FeatureNewsLargeCard news={topNews} />
          <FeatureNewsList news={otherTopNews} />
        </div>
      </div>
      <div className="slider-container !my-0">
        <div className="block lg:hidden">
          <NewsHeroSlider news={news} />
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
