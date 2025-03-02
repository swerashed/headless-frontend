import ContactUsCardSection from "../contactUsCards/ContactUsCardSection";
import ContactUsForm from "./ContactUsForm";
import ContactUsHeading from "./ContactUsHeading";

function ContactUsSection({ data }) {
  const { title, sub_title, card_section_title, card_items } = data;
  return (<div>

    <section className="bg-surface py-[100px] md:py-[170px] md:pb-[120px]">
      <div className="container">
        <ContactUsHeading sectionTitle={title} sectionSubTitle={sub_title} />
      </div>
      <div className="container ml-auto !max-w-[850px] lg:!mr-6">
        <ContactUsForm />
      </div>
    </section>
    <ContactUsCardSection sectionTitle={card_section_title} cards={card_items}/>
  </div>
  );
}

export default ContactUsSection;
