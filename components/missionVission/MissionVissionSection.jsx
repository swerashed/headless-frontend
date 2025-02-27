import Image from "next/image";
import SectionHeading from "../headings/SectionHeading";

function MissionVissionSection({data}) {
  const {section_title, image, mission_vision_items} = data
  return (
    <section className="overflow-hidden bg-surface py-[50px] lg:py-[100px]">
      <div className="container">
        <div className="flex flex-col gap-10 md:gap-20 lg:flex-row-reverse lg:items-center lg:gap-10">
          <Image
            src={image || "/aks-thumbnail.png"}
            width={625}
            height={625}
            alt={section_title}
            className="w-full rounded-[20px] object-cover shadow-md shadow-dark/10 lg:w-1/2"
            data-aos="fade-left"
          />
          <div className="flex flex-col lg:w-1/2">
            <div data-aos="fade-right">
              <SectionHeading className="mb-5 text-[30px] leading-[40px] xl:mb-10 xl:text-[40px] xl:leading-[50px]">
              {section_title}
              </SectionHeading>
            </div>
            <div className="flex flex-col gap-[30px] md:gap-[60px]">
              <div
                data-aos="fade-right"
                className="flex flex-col border-t border-dark/10 pt-[20px]"
              >
               
                <ul className="list-disc">
                  {mission_vision_items.map((item, index) => (
                    <li key={index} className="ml-[20px] mb-5 font-onest text-lg font-medium leading-[26px] text-dark md:left-[30px] md:text-xl">
                       {item.mission_vision_item}
                    </li>
                  ))}
                 
                </ul>
               
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVissionSection;
