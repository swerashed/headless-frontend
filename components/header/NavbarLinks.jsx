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
                  href="/about-us"
                  className="w-full px-5 py-[10px] font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-blue"
                >
                  About Us
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/board-of-directors"
                  className="w-full px-5 py-[10px] font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-blue"
                >
                  Board of Directors
                </NavigationMenuLink>

                <NavigationMenuLink
                  href="/management-team"
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
        href="/services"
      >
        Pharmacy
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/diagnostics"
      >
        Diagonistics
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/impacts"
      >
        Impacts
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/career"
      >
        Career
      </Link>
      <Link
        className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
        href="/news"
      >
        News
      </Link>
    </nav>
  );
}

export default NavbarLinks;
