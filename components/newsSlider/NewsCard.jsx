import Image from "next/image";

function NewsCard({ news }) {
  return (
    <div
      data-aos="fade-up"
      className="group flex cursor-pointer flex-col overflow-hidden rounded-md"
    >
      <div className="mb-5 w-full overflow-hidden rounded-md">
        <Image
          src={news.imageLink}
          alt={news.title}
          width={410}
          height={240}
          className="aspect-[330/175] w-full object-cover transition-all duration-1000 group-hover:scale-110 md:aspect-[410/240]"
        />
      </div>
      <p className="mb-[10px] font-inter text-[14px] font-normal uppercase leading-[22px] text-dark/80">
        {news.date}
      </p>
      <h4 className="line-clamp-2 font-onest text-[20px] font-medium leading-[30px] text-dark md:text-[24px] md:leading-[34px]">
        {news.title}
      </h4>
    </div>
  );
}

export default NewsCard;
