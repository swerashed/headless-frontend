import Image from "next/image";
import Link from "next/link";

function FeatureNewsSmallCard({ news }) {
  const { title, featuredImage, date } = news
  // Convert the string to a Date object
  const dateObject = new Date(date);

  // Format the date
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);
  return (
    <div className="group flex items-start gap-[15px] border-b border-dark/10 pb-5">
      <div className="aspect-[150/135] w-[150px] flex-shrink-0 overflow-hidden rounded-[8px] rounded-br-none">
      <Link href={`/news/${news?.slug}`}>
        <Image
          src={featuredImage?.node?.sourceUrl}
          alt={title}
          width={150}
          height={135}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        </Link>
      </div>

      <div className="flex flex-col">
        <p className="mb-[10px] font-inter text-sm font-normal leading-[22px] text-dark/80">
          {formattedDate}
        </p>
        <Link href={`/news/${news?.slug}`}>
        <h2 className="line-clamp-2 font-onest text-xl font-medium leading-[30px]">
          {title}
        </h2>
        </Link>
      </div>
    </div>
  );
}

export default FeatureNewsSmallCard;
