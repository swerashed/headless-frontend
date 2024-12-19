function SliderNavigationButton({ onPrev, onNext }) {
  return (
    <div className="flex items-center gap-[10px]">
      <button
        onClick={onPrev}
        className="hover:fill-blue-dark focus:fill-blue-dark flex h-8 w-8 items-center justify-center rounded-full fill-transparent stroke-blue transition-all duration-300 hover:stroke-white focus:stroke-white focus:outline-none"
      >
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width={31}
            height={31}
            rx="15.5"
            stroke="current"
          />
          <path
            d="M18 20L14 16L18 12"
            stroke="current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={onNext}
        className="hover:fill-blue-dark focus:fill-blue-dark flex h-8 w-8 items-center justify-center rounded-full fill-transparent stroke-blue transition-all duration-300 hover:stroke-white focus:stroke-white focus:outline-none"
      >
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width={31}
            height={31}
            rx="15.5"
            stroke="current"
          />
          <path
            d="M14 20L18 16L14 12"
            stroke="current"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default SliderNavigationButton;
