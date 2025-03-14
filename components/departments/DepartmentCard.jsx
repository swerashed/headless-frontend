import Image from "next/image";

function DepartmentCard({ data }) {
  const { title, icon, description, button_title, button_url } = data;
  return (
    <div className="group flex h-full flex-grow flex-col rounded-[10px] border border-dark/10 bg-white px-3 py-5 shadow-md shadow-dark/10 transition-all duration-300 sm:px-[30px] sm:py-10 md:px-3 md:py-5 xl:px-[30px] xl:py-10">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="mb-10 h-20 w-20 origin-left object-contain transition-all duration-300 group-hover:scale-105 xl:h-[100px] xl:w-[100px]"
      />
      <h3 className="mb-[15px] flex-grow font-onest text-xl font-medium leading-[30px] text-dark sm:text-2xl sm:leading-[34px]">
        {title}
      </h3>
      <p className="font-inter text-sm font-normal leading-[22px] text-dark/80 sm:text-base sm:leading-[26px]">
        {description}
      </p>
    </div>
  );
}

export default DepartmentCard;
