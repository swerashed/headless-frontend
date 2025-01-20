import { cn } from "@/lib/utils";
import SectionHeading from "../headings/SectionHeading";
import IconCard from "./IconCard";

function CardGridSection({data}) {
  console.log(data)
  const {
    sectionHeading,
    cardDetails,
    sectionClassName,
    className,
  } = data
  return (
    <section
      className={cn(
        "overflow-hidden py-[50px] lg:py-[100px]",
        sectionClassName,
      )}
    >
      <div className="container">
        <div data-aos="fade-right">
          <SectionHeading>{sectionHeading}</SectionHeading>
        </div>
        <div
          className={cn(
            "mt-[30px] grid grid-cols-2 gap-[15px] md:mt-10 md:gap-[30px] lg:grid-cols-3",
            className,
          )}
        >
          {cardDetails.map((card) => (
            <IconCard card={card} key={card.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGridSection;
