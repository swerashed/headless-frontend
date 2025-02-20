import ContactUsCard from "./ContactUsCard";

function ContactUsCardContainer() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 xl:gap-[30px]">
      <ContactUsCard />
      <ContactUsCard />
      <ContactUsCard />
    </div>
  );
}

export default ContactUsCardContainer;
