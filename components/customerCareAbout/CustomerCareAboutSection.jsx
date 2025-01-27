import SectionHeading from "../headings/SectionHeading";
import SideBySideWithoutButton from "../sideBySide/SideBySideWithoutButton";

function CustomerCareAboutSection({data}) {
  const {  title, description, section_classnames, card_items } = data;
  return (
    <section className="overflow-hidden bg-surface py-[50px] md:py-[100px]">
      <div className="container">
        <div
          className="mb-10 flex flex-col items-center justify-center gap-5 text-center"
          data-aos="fade-up"
        >
          <SectionHeading>{title}</SectionHeading>
          <p className="max-w-[872px] font-inter text-base font-normal leading-[26px] text-dark/80">
            {description}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col gap-10">
          {
            card_items?.map((card) => (
              <SideBySideWithoutButton
              key={card._id}
                heading={card.card_title}
                details={card.card_details}
                bannerImage={card.card_image}
                reverse={card.reverse}
              />
            ))
          }
         
        
        </div>
      </div>
    </section>
  );
}

export default CustomerCareAboutSection;
