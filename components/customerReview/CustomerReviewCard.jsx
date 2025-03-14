import Image from "next/image";

function CustomerReviewCard({ review }) {
  const { customer_name, customer_review, customer_image } = review;
  return (
    <div className="flex h-full flex-grow flex-col gap-10 rounded-[10px] border border-dark/10 bg-white from-[#36F1B91A] to-[#3484A41A] p-5 shadow-sm shadow-dark/10 transition-[bg-gradient-to-t] duration-300 hover:bg-gradient-to-tr md:p-10 lg:gap-[60px]">
      <p className="flex-grow font-onest text-lg font-medium leading-[26px] text-dark lg:text-2xl lg:leading-[34px]">
        &quot;{customer_review}&quot;
      </p>
      <div className="flex items-center gap-5">
        <Image
          src={customer_image}
          alt={customer_name}
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-[10px] object-cover shadow-sm shadow-dark/10"
        />
        <div className="flex flex-col gap-[5px]">
          <h6 className="font-onest text-xl font-medium leading-[30px] lg:text-2xl lg:leading-[34px]">
            {customer_name}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
