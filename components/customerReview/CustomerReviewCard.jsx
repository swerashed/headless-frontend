import Image from "next/image";

function CustomerReviewCard({ review }) {
  return (
    <div className="flex flex-col gap-10 rounded-[10px] border border-dark/10 bg-white from-[#36F1B91A]/10 to-[#3484A41A]/10 p-5 shadow-md shadow-dark/10 transition-[bg-gradient-to-t] duration-300 hover:bg-gradient-to-tr md:p-10 lg:gap-[60px]">
      <p className="font-onest text-lg font-medium leading-[26px] text-dark lg:text-2xl lg:leading-[34px]">
        "{review.customerReview}"
      </p>
      <div className="flex items-center gap-5">
        <Image
          src={review.image}
          alt=""
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-[10px] object-cover shadow-sm shadow-dark/10"
        />
        <div className="flex flex-col gap-[5px]">
          <h6 className="font-onest text-xl font-medium leading-[30px] lg:text-2xl lg:leading-[34px]">
            {review.customerName}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
