import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";
import WhyCooseUsAccordion from "./WhyCooseUsAccordion";

const questionAndAnswers = [
  {
    id: crypto.randomUUID(),
    question: "Expertise You Can Trust",
    answer:
      "With extensive experience, we deliver high-quality results tailored to your unique needs.",
  },
  {
    id: crypto.randomUUID(),
    question: "Customer-First Approach",
    answer:
      "We prioritize customer satisfaction by focusing on your goals and delivering solutions that exceed expectations.",
  },
  {
    id: crypto.randomUUID(),
    question: "Innovative Strategies",
    answer:
      "Our team leverages cutting-edge strategies and tools to provide you with creative solutions that keep you ahead of the competition.",
  },
  {
    id: crypto.randomUUID(),
    question: "Dedication to Excellence",
    answer:
      "We are committed to achieving the highest standards in everything we do, ensuring outstanding results for every project.",
  },
];

function WhyChooseUsSection() {
  return (
    <section className="bg-surface overflow-hidden border-t border-dark/10 py-[50px] lg:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-10">
          <Image
            src="/section-banners/about-us/why-choose-us-banner.png"
            alt="Why choose us banner"
            width={625}
            height={625}
            className="h-auto w-full rounded-[20px] object-cover shadow-md shadow-dark/10 md:w-1/2"
            data-aos="fade-right"
          />
          <div className="flex flex-col md:w-1/2">
            <div data-aos="fade-left">
              <SectionHeading className="mb-5 xl:mb-10 xl:text-[40px]">
                Why Choose AKS Khan Pharmaceuticals for your Health Needs
              </SectionHeading>
              <WhyCooseUsAccordion qsnAndAns={questionAndAnswers} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
