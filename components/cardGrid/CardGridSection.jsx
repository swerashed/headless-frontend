import { cn } from "@/lib/utils";
import SectionHeading from "../headings/SectionHeading";
import IconCard from "./IconCard";

function CardGridSection({ data }) {
  const { title, card_items, section_classnames, inner_classnames } = data;
  return (
    <section
      className={cn(
        "overflow-hidden py-[50px] lg:py-[100px]",
        section_classnames,
      )}
    >
      <div className="container">
        <div data-aos="fade-right">
          <SectionHeading>{title}</SectionHeading>
        </div>
        <div
          className={cn(
            "mt-[30px] grid grid-cols-2 gap-[15px] bg-red-600 md:mt-10 md:gap-[30px] lg:grid-cols-3",
            inner_classnames,
          )}
        >
          {card_items?.map((card) => (
            <IconCard card={card} key={card._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGridSection;
