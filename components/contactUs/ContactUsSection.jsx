import ContactUsForm from "./ContactUsForm";
import ContactUsHeading from "./ContactUsHeading";

function ContactUsSection({ data }) {
  const {title, sub_title} = data
  return (
    <section className="border-b border-dark/10 bg-surface py-[100px] pb-16 md:pb-[100px] md:pt-[120px]">
      <div className="container">
        <ContactUsHeading
          sectionTitle={title}
          sectionSubTitle={sub_title}
        />
      </div>
      <div className="container !mr-0 ml-auto !max-w-[850px]">
        <ContactUsForm />
      </div>
    </section>
  );
}

export default ContactUsSection;
