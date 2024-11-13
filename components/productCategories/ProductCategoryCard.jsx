import Image from "next/image";

function ProductCategoryCard({ product }) {
  return (
    <div
      className="flex items-center justify-start gap-2 overflow-hidden rounded-full bg-white p-[5px] sm:gap-3 lg:mb-[30px]"
      data-aos="fade-up"
    >
      <Image
        src={product.image}
        alt="Product image"
        width={70}
        height={70}
        className="h-[50px] w-[50px] rounded-full object-cover"
      />
      <h5 className="font-inter text-sm font-medium leading-[20px] text-dark sm:text-base sm:font-semibold sm:leading-[24px]">
        {product.productCategoryName}
      </h5>
    </div>
  );
}

export default ProductCategoryCard;
