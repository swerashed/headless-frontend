import { Input } from "../ui/input";

function SearchField({ onSearchOpen }) {
  return (
    <div
      onClick={(event) => event.stopPropagation()}
      className="hidden items-center justify-end gap-[10px] border-b border-dark/10 transition-all duration-700 md:flex"
      data-aos="fade-right"
      data-aos-duration="200"
    >
      <svg
        className="h-5 w-5 stroke-blue"
        width={20}
        height={20}
        viewBox="0 0 20 20"
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
      <Input
        className="h-auto w-[300px] rounded-none border-none p-2 py-3 font-inter font-normal leading-[22px] text-dark shadow-none placeholder:text-sm placeholder:capitalize focus-visible:ring-0 lg:w-[542px]"
        placeholder="Search now"
      />
      <button
        onClick={onSearchOpen}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-blue transition-all duration-300 hover:bg-dark"
      >
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
      </button>
    </div>
  );
}

export default SearchField;
