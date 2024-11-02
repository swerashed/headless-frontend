import Link from "next/link";

function ButtonPrimary({ border = true, children }) {
  return (
    <Link
      href="/"
      className={`text-dark stroke-dark hover:bg-dark focus:bg-dark flex w-fit items-center justify-center gap-2 rounded-full bg-white py-3 pl-8 pr-5 font-inter font-semibold capitalize transition-all duration-300 hover:stroke-white hover:text-white focus:stroke-white focus:text-white focus:outline-none ${border ? "border-blue border" : ""}`}
    >
      <p>{children}</p>
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.59961 16.7998L14.3996 11.9998L9.59961 7.19981"
          stroke="current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export default ButtonPrimary;
