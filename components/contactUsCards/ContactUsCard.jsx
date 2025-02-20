import Image from "next/image";

function ContactUsCard() {
  return (
    <div className="flex aspect-[410/336] h-auto w-auto flex-col items-center justify-center rounded-[10px] border border-[#1623401A] bg-white backdrop-blur-sm md:py-5 lg:py-0">
      <Image
        src="/contact-us/call.png"
        width={80}
        height={80}
        alt="call icon"
        className="mb-10 aspect-square h-20 w-20 object-contain sm:h-14 sm:w-14 xl:h-20 xl:w-20"
      />
      <p className="mb-[10px] text-center font-onest text-base font-normal leading-[26px] text-dark/80">
        24/7 Emergency Call
      </p>
      <h3 className="text-center font-onest text-xl font-medium leading-[30px] text-dark">
        +8801847360360
      </h3>
    </div>
  );
}

export default ContactUsCard;
