import ContactUsForm from "./ContactUsForm";
import ContactUsHeading from "./ContactUsHeading";

function ContactUsSection({ sectionTitle, sectionSubTitle }) {
  return (
    <section className="border-b border-dark/10 bg-surface py-[100px] pb-16 md:pb-[100px] md:pt-[120px]">
      <div className="container">
        <ContactUsHeading
          sectionTitle={sectionTitle}
          sectionSubTitle={sectionSubTitle}
        />
      </div>
      <div className="container !mr-0 ml-auto !max-w-[850px]">
        <ContactUsForm />
      </div>
    </section>
  );
}

export default ContactUsSection;
