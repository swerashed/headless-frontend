"use client";
import Link from "next/link";

function TabContentCard({ file }) {
  return (
    <Link href={file.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-[10px] rounded-[10px] border border-dark/10 px-[10px] py-5 pr-5">
      <svg
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.75 45.5C43.75 47.425 42.175 49 40.25 49H15.75C13.825 49 12.25 47.425 12.25 45.5V14.875L20.125 7H40.25C42.175 7 43.75 8.575 43.75 10.5V45.5Z"
          stroke="url(#paint0_linear_826_23372)"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 9.625V12.25C21 14.175 19.3375 15.75 17.4125 15.75H14.875"
          stroke="url(#paint1_linear_826_23372)"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.375 27.125H37.625"
          stroke="url(#paint2_linear_826_23372)"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.375 37.625H37.625"
          stroke="url(#paint3_linear_826_23372)"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.375 32.375H37.625"
          stroke="url(#paint4_linear_826_23372)"
          strokeWidth={2}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_826_23372"
            x1="14.7746"
            y1="52.3028"
            x2="53.224"
            y2="25.0184"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36F1B9" />
            <stop offset={1} stopColor="#3484A4" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_826_23372"
            x1="15.3659"
            y1="16.2317"
            x2="21.2971"
            y2="10.6197"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36F1B9" />
            <stop offset={1} stopColor="#3484A4" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_826_23372"
            x1="19.9178"
            y1="28.2036"
            x2="20.024"
            y2="26.2698"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36F1B9" />
            <stop offset={1} stopColor="#3484A4" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_826_23372"
            x1="19.9178"
            y1="38.7036"
            x2="20.024"
            y2="36.7698"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36F1B9" />
            <stop offset={1} stopColor="#3484A4" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_826_23372"
            x1="19.9178"
            y1="33.4536"
            x2="20.024"
            y2="31.5198"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#36F1B9" />
            <stop offset={1} stopColor="#3484A4" />
          </linearGradient>
        </defs>
      </svg>
      <p className="line-clamp-1 flex-grow text-xl font-medium leading-[30px] text-dark">
        {file.name || "File Name"}
      </p>
      <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.16797 24.5V26.8334H26.8346V24.5H1.16797ZM22.168 14L20.5346 12.3667L15.168 17.7334V1.16669H12.8346V17.7322L7.46797 12.3655L5.83464 14L14.0013 22.1667L22.168 14Z"
          fill="#357691"
        />
      </svg>
    </Link>
  );
}

export default TabContentCard;
