import Link from "next/link";

function NavbarLinks() {
  return (
    <nav className="flex items-center justify-center font-inter font-normal leading-[24px] md:text-sm xl:text-base">
      <Link
        className="px-[9px] transition-all duration-300 hover:text-blue xl:px-[13px]"
        href="/"
      >
        The company
      </Link>
      <Link
        className="px-[9px] transition-all duration-300 hover:text-blue xl:px-[13px]"
        href="/"
      >
        Pharmacy
      </Link>
      <Link
        className="px-[9px] transition-all duration-300 hover:text-blue xl:px-[13px]"
        href="/"
      >
        Diagonistics
      </Link>
      <Link
        className="px-[9px] transition-all duration-300 hover:text-blue xl:px-[13px]"
        href="/"
      >
        Impacts
      </Link>
      <Link
        className="px-[9px] transition-all duration-300 hover:text-blue xl:px-[13px]"
        href="/"
      >
        Career
      </Link>
      <Link
        className="px-[9px] transition-all duration-300 hover:text-blue xl:px-[13px]"
        href="/"
      >
        News
      </Link>
    </nav>
  );
}

export default NavbarLinks;
