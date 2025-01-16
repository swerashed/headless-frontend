import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function NavbarLinks({ menuData }) {
  const menuItems = menuData?.menu?.menuItems?.nodes || [];

  return (
    <nav className="hidden items-center justify-center font-inter font-normal leading-[24px] md:text-sm lg:flex xl:text-base">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems
            .filter((item) => !item.parentId) // Only include top-level items
            .map((item) => {
              const childItems =
                item.childItems?.edges?.map((edge) => edge.node) || [];
              const hasChildItems = childItems.length > 0;

              if (hasChildItems) {
                return (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuTrigger className="h-auto bg-transparent px-[10px] py-0 font-inter font-normal leading-[24px] transition-all duration-300 focus-within:outline-none hover:bg-transparent hover:text-blue md:text-sm xl:px-[12px] xl:text-base">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex w-[230px] flex-col gap-0.5 rounded-[10px] border-t border-dark/10 bg-white shadow-lg">
                        {childItems.map((child) => (
                          <NavigationMenuLink
                            key={child.id}
                            href={child.url}
                            className="w-full px-5 py-[10px] font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-blue"
                          >
                            {child.label}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              } else {
                return (
                  <NavigationMenuItem key={item.id}>
                    <Link
                      href={item.url}
                      className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                );
              }
            })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default NavbarLinks;


// import Link from "next/link";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// function NavbarLinks({ menuData }) {
//   const menuItems = menuData?.menu?.menuItems?.nodes || [];
//   // Flatten the child items into a single array
//   const childItemsArray = menuItems.flatMap((item) =>
//     item.childItems?.edges?.map((edge) => edge.node) || []
//   );

//   // Filter out any null or undefined items
//   const childItems = childItemsArray.filter((item) => item !== null && item !== undefined);


//   return (


//     <nav className="hidden items-center justify-center font-inter font-normal leading-[24px] md:text-sm lg:flex xl:text-base">



//       <NavigationMenu>
//         <NavigationMenuList>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger className="h-auto bg-transparent px-[10px] py-0 font-inter font-normal leading-[24px] transition-all duration-300 focus-within:outline-none hover:bg-transparent hover:text-blue md:text-sm xl:px-[12px] xl:text-base">
//               The Company
//             </NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <div className="flex w-[230px] flex-col gap-0.5 rounded-[10px] border-t border-dark/10 bg-white shadow-lg">
//                 {
//                   childItems.map((child) => (
//                     <NavigationMenuLink
//                       key={child.id}
//                       href={child.url}
//                       className="w-full px-5 py-[10px] font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 hover:text-blue"
//                     >
//                       {
//                         child.label
//                       }
//                     </NavigationMenuLink>
//                   ))
//                 }


//               </div>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>


//       {
//         menuItems.filter((item) => item.parentId === null).map((item) => (
//           <Link
//             key={item.id}
//             href={item.url}
//             className="px-[10px] transition-all duration-300 hover:text-blue xl:px-[12px]"
//           >
//             {item.label}
//           </Link>
//         ))
//       }

//     </nav>
//   );
// }

// export default NavbarLinks;
