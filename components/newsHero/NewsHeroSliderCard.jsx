import Image from "next/image";

function NewsHeroSliderCard({ news }) {
  return (
    <div
      data-aos="fade-up"
      className="group relative h-[375px] overflow-hidden rounded-[20px]"
    >
      <Image
        src={news.image}
        width={850}
        height={505}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#000511CC]/60 to-[#00206800]/0">
        <div className="p-4 text-white">
          <p className="mb-1 font-inter text-xs font-normal leading-[18px]">
            {news.date}
          </p>
          <h3 className="line-clamp-3 font-onest text-xl font-medium leading-[30px]">
            {news.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NewsHeroSliderCard;
