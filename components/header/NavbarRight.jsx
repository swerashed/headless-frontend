import PrimaryButton from "../buttons/PrimaryButton";
import SearchField from "./SearchField";

function NavbarRight({
  isSearchOpen,
  onSearchOpen,
  isMobileMenuOpen,
  onMobileMenuOpen,
}) {
  return (
    <div
      className={`flex items-center justify-end gap-5 md:min-w-[170px] lg:gap-[10px] xl:min-w-[210px] xl:gap-[30px]`}
    >
      {isSearchOpen ? (
        <SearchField isSearchOpen={isSearchOpen} onSearchOpen={onSearchOpen} />
      ) : (
        <>
          <button
            onClick={onSearchOpen}
            className="hidden items-center justify-center stroke-dark p-2 transition-all duration-300 hover:stroke-blue md:flex"
          >
            <svg
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16667 14.8333C11.8486 14.8333 14.8333 11.8486 14.8333 8.16667C14.8333 4.48477 11.8486 1.5 8.16667 1.5C4.48477 1.5 1.5 4.48477 1.5 8.16667C1.5 11.8486 4.48477 14.8333 8.16667 14.8333Z"
                stroke="current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.4999 16.5L12.8749 12.875"
                stroke="current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <PrimaryButton
            href="/contact-us"
            border="false"
            className="hidden gap-1 bg-blue stroke-white py-3 pl-6 pr-[14px] text-white transition-all duration-300 hover:bg-blue-dark md:flex"
          >
            Contact us
          </PrimaryButton>
        </>
      )}
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
