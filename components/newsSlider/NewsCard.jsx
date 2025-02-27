import { getPost } from "@/graphql/blogs/GET_POST";
import Image from "next/image";
import Link from "next/link";

function NewsCard({blog}) {
  const {title, date, content, featuredImage, slug, uri} = blog;


  // Convert the string to a Date object
  const dateObject = new Date(date);
  
  // Format the date
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(dateObject);

  return (
    <div
      data-aos="fade-up"
      className="group flex cursor-pointer flex-col overflow-hidden rounded-md"
    >
      <div className="mb-5 w-full overflow-hidden rounded-md">
        <Link href={`/news/${slug}`}>
        <Image
          src={featuredImage?.node?.sourceUrl}
          width={410}
          height={240}
          alt={title}
          className="aspect-[330/175] w-full object-cover transition-all duration-1000 group-hover:scale-110 md:aspect-[410/240]"
        />
        </Link>
      </div>
      <p className="mb-[10px] font-inter text-[14px] font-normal uppercase leading-[22px] text-dark/80">
        {formattedDate}
      </p>

      <Link href={`/news/${slug}`}>
      <h4 className="line-clamp-2 font-onest text-[20px] font-medium leading-[30px] text-dark md:text-[24px] md:leading-[34px]">
        {title}
      </h4>
      </Link>
    </div>
  );
}

export default NewsCard;
