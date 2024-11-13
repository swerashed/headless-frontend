import Image from "next/image";

function AppDownloadSection() {
  return (
    <section className="my-[50px] md:my-[100px]">
      <div className="container">
        <div
          className="app-container relative flex min-h-[500px] flex-col overflow-hidden rounded-[20px] px-[15px] py-[30px] text-white shadow-md shadow-dark/10 md:shadow-2xl"
          data-aos="fade-up"
        >
          <h2 className="mb-[10px] font-onest text-[30px] font-medium leading-[40px] md:text-[40px] md:leading-[50px]">
            Download AKS Health App
          </h2>
          <p className="mb-[30px] font-inter text-base font-normal leading-[26px]">
            Discount on all kinds of healthcare products
          </p>
          <Image
            src="/app-download/play-store.png"
            alt="App store icon"
            width={158}
            height={47}
            className="rounded-md"
          />
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
