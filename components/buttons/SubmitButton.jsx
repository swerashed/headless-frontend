import { cn } from "@/lib/utils";

function SubmitButton({ className, border = true, children,   disabled }) {
  return (
    <button
    disabled={disabled}
    type="submit"
      className={cn(
        "flex w-fit items-center justify-center gap-2 rounded-full bg-transparent stroke-blue py-[10px] pl-6 pr-3 font-inter text-base font-semibold capitalize leading-[24px] text-blue transition-all duration-300 hover:bg-blue-dark hover:stroke-white hover:text-white focus:bg-blue-dark focus:stroke-white focus:text-white focus:outline-none",
        { "border border-blue-dark": border },
        className,
      )}
    >
      <span>{children}</span>
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
    </button>
  );
}

export default SubmitButton;
