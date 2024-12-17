import Image from "next/image";

function FeatureNewsSmallCard({ news }) {
  return (
    <div className="group flex items-start gap-[15px] border-b border-dark/10 pb-5">
      <div className="aspect-[150/135] w-[150px] flex-shrink-0 overflow-hidden rounded-[8px] rounded-br-none">
        <Image
          src={news.image}
          alt=""
          width={150}
          height={135}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col">
        <p className="mb-[10px] font-inter text-sm font-normal leading-[22px] text-dark/80">
          {news.date}
        </p>
        <h2 className="line-clamp-2 font-onest text-xl font-medium leading-[30px]">
          {news.title}
        </h2>
      </div>
    </div>
  );
}

export default FeatureNewsSmallCard;
