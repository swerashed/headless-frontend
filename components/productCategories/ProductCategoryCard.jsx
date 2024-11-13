import Image from "next/image";

function ProductCategoryCard({ product }) {
  return (
    <div className="group flex items-center justify-start gap-2 overflow-hidden rounded-full bg-white p-[5px] pr-[10px] shadow-md shadow-dark/10 transition-all duration-300 hover:shadow-lg sm:gap-3 lg:mb-[30px]">
      <Image
        src={product.image}
        alt="Product image"
        width={590}
        height={70}
        className="h-[50px] w-[50px] rounded-full object-cover transition-all duration-300 group-hover:scale-105 md:h-[70px] md:w-[70px]"
      />

      <h5 className="line-clamp-2 font-inter text-sm font-medium leading-[20px] text-dark xl:text-base xl:font-semibold xl:leading-[24px]">
        {product.productCategoryName}
      </h5>
    </div>
  );
}

export default ProductCategoryCard;
