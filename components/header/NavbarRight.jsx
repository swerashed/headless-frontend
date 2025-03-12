import PrimaryButton from "../buttons/PrimaryButton";

function NavbarRight({ isMobileMenuOpen, onMobileMenuOpen }) {
  return (
    <div
      className={`flex items-center justify-end gap-5 md:min-w-[170px] lg:gap-[10px] xl:min-w-[210px] xl:gap-[30px]`}
    >
      <>
        <PrimaryButton
          href="/contact-us"
          border="false"
          className="hidden gap-1 bg-blue stroke-white py-3 pl-6 pr-[14px] text-white transition-all duration-300 hover:bg-blue-dark lg:flex"
        >
          Contact us
        </PrimaryButton>
      </>
      <button
        onClick={onMobileMenuOpen}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue stroke-white transition-all duration-300 hover:bg-blue-dark lg:hidden"
      >
        {isMobileMenuOpen ? (
          <svg
            width={13}
            height={15}
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.743652 2L12.0574 13.3137"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M0.743652 13L12.0574 1.68629"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            width={19}
            height={15}
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.39844 1.5L17.3984 1.5"
              stroke="current"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1.39844 7.5L17.3984 7.5"
              stroke="current"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M1.39844 13.5H11.3984"
              stroke="current"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default NavbarRight;
