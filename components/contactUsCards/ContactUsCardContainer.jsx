import ContactUsCard from "./ContactUsCard";

function ContactUsCardContainer({ cards }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 xl:gap-[30px]">
      {cards?.map((card, index) => {
        return <ContactUsCard key={index} index={index} card={card} />;
      })}
    </div>
  );
}

export default ContactUsCardContainer;
