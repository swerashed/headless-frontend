import Image from "next/image";
import FeatureNewsSmallCard from "./FeatureNewsSmallCard";

function FeatureNewsList({ news }) {
  return (
    <div className="col-span-3 flex flex-grow flex-col gap-5 xl:col-span-2">
      {news.map((newsItem) => (
        <FeatureNewsSmallCard key={newsItem.id} news={newsItem} />
      ))}
    </div>
  );
}

export default FeatureNewsList;
