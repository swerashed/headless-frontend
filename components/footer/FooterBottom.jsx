import Link from "next/link";

function FooterBottom() {
  return (
    <div className="mt-[30px] flex flex-col items-center justify-center md:flex-row md:justify-between">
      <p className="mb-[15px] max-w-xs text-center font-inter text-sm font-normal text-dark/80 md:max-w-max">
        © 2024 AKS Khan Pharmaceuticals Ltd. All Rights Reserved.
      </p>
      <div className="flex items-center justify-center gap-5">
        <Link
          href="/"
          className="font-inter text-sm font-normal text-dark/80 transition-all duration-300 hover:underline"
        >
          Privacy
        </Link>
        <Link
          href="/"
          className="font-inter text-sm font-normal text-dark/80 transition-all duration-300 hover:underline"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  );
}

export default FooterBottom;
