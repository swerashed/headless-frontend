import { cn } from "@/lib/utils";
import SectionHeading from "../headings/SectionHeading";
import ContactUsCardContainer from "./ContactUsCardContainer";

function ContactUsCardSection({sectionTitle, cards}) {
  return (
    <section
      className={cn(
        "overflow-hidden border-b border-dark/10 bg-surface pb-[120px]",
      )}
    >
      <div className="container">
        <div data-aos="fade-up">
          <SectionHeading className="mx-auto mb-0 max-w-[800px] text-center">
           {sectionTitle}
          </SectionHeading>
        </div>
        <div data-aos="fade-up">
          <ContactUsCardContainer cards={cards} />
        </div>
      </div>
    </section>
  );
}

export default ContactUsCardSection;
