import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function WhyCooseUsAccordion({ qsnAndAns }) {
  return (
    <Accordion type="single" collapsible className="w-full px-[10px]">
      {qsnAndAns.map((item, index) => (
        <AccordionItem
          key={item.id}
          value={`item-${index + 1}`}
          className="border-b border-dark/10"
        >
          <AccordionTrigger className="py-5 font-onest text-lg font-medium text-dark hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 font-inter text-base font-normal text-dark/80">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default WhyCooseUsAccordion;
