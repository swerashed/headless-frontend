import Image from "next/image";

import locationIcon from "@/app/assets/icons/map-pointer.svg";
import mailIcon from "@/app/assets/icons/mail.svg";
import telephoneIcon from "@/app/assets/icons/telephone.svg";

import MenuAccordion from "./MenuAccordion";
import FooterBottom from "./FooterBottom";
import SocialMediaIcons from "./SocialMediaIcons";
import LinkGroups from "./LinkGroups";
import Link from "next/link";
import { fetchMenus } from "@/graphql/pages/GET_MENUS";

async function Footer() {
  const footerMenuData = await fetchMenus("Footer Menu");

  const menuItems = footerMenuData?.menu?.menuItems?.nodes || [];

  const groupMenuItems = (menuItems, groupLabel) => {
    const parentGroup = menuItems.find((item) => item.label === groupLabel);

    if (!parentGroup) return [];

    return menuItems
      .filter((item) => item.parentId === parentGroup.id)
      .map((item) => ({
        title: item.label,
        link: item.url,
        id: crypto.randomUUID(),
      }));
  };

  // Storing menus in separate variables dynamically
  const groupLinksOne = groupMenuItems(menuItems, "Footer Group One");
  const groupLinksTwo = groupMenuItems(menuItems, "Footer Group Two");
  const groupLinksThree = groupMenuItems(menuItems, "Footer Group Three");
  const groupLinksFour = groupMenuItems(menuItems, "Footer Group Four");
  const socialLinks = groupMenuItems(menuItems, "Social Media Links");

  return (
    <footer className="bg-surface pb-5 pt-10 md:pt-[60px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-x-10 xl:gap-x-[90px]">
          <div className="flex flex-col px-3 md:col-span-5 lg:col-span-4 xl:max-w-[300px] xl:px-0">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Company logo"
                width={183}
                height={60}
                className="mb-8 object-contain"
              />
            </Link>
            <div className="mb-8 flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <Image
                  src={locationIcon}
                  alt="icon"
                  className="\\ h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <p className="font-inter font-normal leading-[26px] text-dark/80">
                  {groupLinksOne[0].title}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src={mailIcon}
                  alt="icon"
                  className="h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <Link
                  href={`mailto:${groupLinksOne[1].title}`}
                  className="font-inter font-normal leading-[26px] text-dark/80"
                >
                  {groupLinksOne[1].title}
                </Link>
              </div>
              <div className="flex items-start gap-2">
                <Image
                  src={telephoneIcon}
                  alt="icon"
                  className="h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <Link
                  href={`tel:${groupLinksOne[2].title}`}
                  className="font-inter font-normal leading-[26px] text-dark/80"
                >
                  Tel: {groupLinksOne[2].title}
                </Link>
              </div>
            </div>
            <div className="lg:hidden">
              <SocialMediaIcons socialLinks={socialLinks} />
            </div>
          </div>
          <div className="hidden md:col-span-6 md:col-start-7 md:grid md:grid-cols-2 md:gap-x-10 lg:col-span-8 lg:col-start-5 lg:grid-cols-3 xl:gap-x-[60px]">
            <LinkGroups heading="The Company" links={groupLinksTwo} />
            <LinkGroups heading="Quick Links" links={groupLinksThree} />
            <LinkGroups heading="AKPL Group" links={groupLinksFour} />
            <div className="hidden lg:block">
              <SocialMediaIcons socialLinks={socialLinks} />
            </div>
          </div>
        </div>
        <div className="border-t border-dark/10">
          <MenuAccordion heading="The Company" links={groupLinksTwo} />
          <MenuAccordion heading="Quick Links" links={groupLinksThree} />
          <MenuAccordion heading="AKPL Group" links={groupLinksFour} />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
