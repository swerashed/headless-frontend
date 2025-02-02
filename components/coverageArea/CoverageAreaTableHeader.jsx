import { Input } from "../ui/input";

function CoverageAreaTableHeader({setSelectedDistricts}) {

  const handleSearch = (event) => {
    setSelectedDistricts(event.target.value.toLowerCase());
  };

  return (
    <div className="flex flex-col gap-4 p-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between md:mt-20 md:px-0">
      <h3 className="font-onest text-2xl font-medium capitalize leading-[34px] text-dark md:text-[40px] md:leading-[50px]">
        Outlet Information
      </h3>
      <div className="flex w-full items-center gap-4 rounded-[40px] border border-dark/10 bg-surface px-4 py-[10px] font-inter text-sm font-normal leading-[22px] text-dark focus-within:border-blue focus:border focus:border-blue focus:ring-0 sm:w-[307px]">
        <Input
          className="focus-visible:ring-none h-auto border-none px-0 py-0 shadow-none file:border-0 focus-visible:ring-0"
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16667 14.8333C11.8486 14.8333 14.8333 11.8486 14.8333 8.16667C14.8333 4.48477 11.8486 1.5 8.16667 1.5C4.48477 1.5 1.5 4.48477 1.5 8.16667C1.5 11.8486 4.48477 14.8333 8.16667 14.8333Z"
            stroke="#162340"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4999 16.5L12.8749 12.875"
            stroke="#162340"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CoverageAreaTableHeader;
