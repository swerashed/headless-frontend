import FeatureNewsLargeCard from "./FeatureNewsLargeCard";
import FeatureNewsList from "./FeatureNewsList";

const NewsHero = ({ news }) => {
  const topNews = news[0];
  const otherTopNews = news.splice(1, 3);

  return (
    <section className="bg-surface pb-[60px] pt-[120px]">
      <div className="container">
        <div className="hidden grid-cols-6 gap-[30px] lg:grid">
          <FeatureNewsLargeCard news={topNews} />
          <FeatureNewsList news={otherTopNews} />
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
