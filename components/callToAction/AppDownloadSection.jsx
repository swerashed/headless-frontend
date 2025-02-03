import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

function AppDownloadSection({data}) {
  const { section_classnames, description, title, download_link } = data;
  return (
    <section className={cn("py-[50px] md:py-[100px]", section_classnames)}>
      <div className="container">
        <div
          className="app-container relative flex min-h-[500px] flex-col overflow-hidden rounded-[20px] px-[15px] py-[30px] text-white shadow-md shadow-dark/10 md:shadow-2xl"
          data-aos="fade-up"
        >
          <h2 className="mb-[10px] font-onest text-[30px] font-medium leading-[40px] md:text-[40px] md:leading-[50px] text-white">
          {title}
          </h2>
          <p className="mb-[30px] font-inter text-base font-normal leading-[26px]">
          {description}
          </p>
          <Link href={download_link}>
          
          <Image
            src="/app-download/play-store.png"
            alt="App store icon"
            width={158}
            height={47}
            className="rounded-md"
          />
          </Link>
          <Image
            src="/app-download/phone-mockup.png"
            alt="App store icon"
            width={467}
            height={253}
            className="phone-mockup absolute bottom-0 left-0 right-0 -z-10 w-full origin-bottom scale-[1.15]"
          />
          <Image
            src="/app-download/banner.png"
            alt="Phone mockup"
            width={467}
            height={253}
            className="absolute inset-0 -z-20 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AppDownloadSection;
