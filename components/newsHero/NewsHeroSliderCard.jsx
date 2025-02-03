import Image from "next/image";

function NewsHeroSliderCard({ news }) {
  const { title, featuredImage, date } = news
  // Convert the string to a Date object
  const dateObject = new Date(date);

  // Format the date
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);
  return (
    <div
      data-aos="fade-up"
      className="group relative h-[375px] overflow-hidden rounded-[20px]"
    >
      <Image
        src={featuredImage?.node?.sourceUrl}
        width={850}
        height={505}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#000511CC]/60 to-[#00206800]/0">
        <div className="p-4 text-white">
          <p className="mb-1 font-inter text-xs font-normal leading-[18px]">
            {formattedDate}
          </p>
          <h3 className="line-clamp-3 font-onest text-xl font-medium leading-[30px] text-white">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NewsHeroSliderCard;
