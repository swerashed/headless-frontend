import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function NavbarLinks() {
  return (
    <nav className="hidden items-center justify-center font-inter font-normal leading-[24px] md:text-sm lg:flex xl:text-base">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-auto bg-transparent px-[10px] py-0 font-inter font-normal leading-[24px] transition-all duration-300 focus-within:outline-none hover:bg-transparent hover:text-blue md:text-sm xl:px-[12px] xl:text-base">
              The company
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-[230px] flex-col gap-0.5 rounded-[10px] border-t border-dark/10 bg-white shadow-lg">
                <NavigationMenuLink
                  href="/"
                  className="w-full px-5 py-[10px] font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-blue"
                >
                  About Us
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/"
                  className="w-full px-5 py-[10px] font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-blue"
                >
                  Boared of Directors
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/"
                  className="w-full px-5 py-[10px] font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-blue"
                >
                  Management Team
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/"
      >
        Pharmacy
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/"
      >
        Diagonistics
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/"
      >
        Impacts
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/"
      >
        Career
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/"
      >
        News
      </Link>
    </nav>
  );
}

export default NavbarLinks;
