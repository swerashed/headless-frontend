import PrimaryButton from "../buttons/PrimaryButton";
import SearchField from "./SearchField";

function NavbarRight({ isSearchOpen, onSearchOpen }) {
  return (
    <div className={`flex min-w-[210px] items-center justify-end gap-[30px]`}>
      {isSearchOpen ? (
        <SearchField onSearchOpen={onSearchOpen} />
      ) : (
        <button
          onClick={onSearchOpen}
          className="flex items-center justify-center stroke-dark p-2 transition-all duration-300 hover:stroke-blue"
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
      )}
      {!isSearchOpen && (
        <PrimaryButton
          border="false"
          className="gap-1 bg-blue stroke-white py-3 pl-6 pr-[14px] text-white transition-all duration-300 hover:bg-dark"
        >
          Contact us
        </PrimaryButton>
      )}
    </div>
  );
}

export default NavbarRight;
