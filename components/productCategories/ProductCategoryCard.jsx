import Image from "next/image";

function ProductCategoryCard({ product }) {
  const { category_name, category_image } = product;
  return (
    <div className="group flex items-center justify-start gap-2 overflow-hidden rounded-full bg-white p-2 pr-[10px] shadow-md shadow-dark/10 transition-all duration-300 hover:shadow-lg sm:gap-3 lg:mb-[15px]">
      <Image
        src={category_image}
        alt={category_name}
        width={590}
        height={70}
        className="h-[50px] w-[50px] flex-shrink-0 rounded-full object-cover transition-all duration-300 group-hover:scale-105 xl:h-[70px] xl:w-[70px]"
      />

      <h5 className="line-clamp-2 font-inter text-sm font-medium leading-[20px] text-dark xl:text-base xl:font-semibold xl:leading-[24px]">
        {category_name}
      </h5>
    </div>
  );
}

export default ProductCategoryCard;
