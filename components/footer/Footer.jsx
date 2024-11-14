import Image from "next/image";

import locationIcon from "@/app/assets/icons/map-pointer.svg";
import mailIcon from "@/app/assets/icons/mail.svg";
import telephoneIcon from "@/app/assets/icons/telephone.svg";

import MenuAccordion from "./MenuAccordion";
import FooterBottom from "./FooterBottom";
import SocialMediaIcons from "./SocialMediaIcons";
import LinkGroups from "./LinkGroups";

const groupLinksOne = [
  { title: "About Us", links: "/", id: crypto.randomUUID() },
  { title: "Board of Directors", links: "/", id: crypto.randomUUID() },
  { title: "Management Team", links: "/", id: crypto.randomUUID() },
];

const groupLinksTwo = [
  { title: "Careers", links: "/", id: crypto.randomUUID() },
  { title: "Impacts", links: "/", id: crypto.randomUUID() },
  { title: "News", links: "/", id: crypto.randomUUID() },
  { title: "Contact Us", links: "/", id: crypto.randomUUID() },
];
const groupLinksThree = [
  { title: "AKS Khan Pharmacy", links: "/", id: crypto.randomUUID() },
  { title: "AKS Khan Diagnostics", links: "/", id: crypto.randomUUID() },
];

function Footer() {
  return (
    <footer className="bg-surface pb-5 pt-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex max-w-80 flex-col px-3 md:col-span-5 lg:col-span-4">
            <Image
              src="/logo.png"
              alt="Company logo"
              width={183}
              height={60}
              className="mb-8 object-contain"
            />
            <div className="mb-8 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={locationIcon}
                  alt="icon"
                  className="\\ h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <p className="font-inter font-normal leading-[26px] text-dark/80">
                  Rupayan Prime, Plot 02, Road 07, Dhanmondi, Dhaka – 1205
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={mailIcon}
                  alt="icon"
                  className="h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <p className="font-inter font-normal leading-[26px] text-dark/80">
                  info@akskhanpharma.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={telephoneIcon}
                  alt="icon"
                  className="h-8 w-8 rounded-full border border-dark/10 p-2"
                />
                <p className="font-inter font-normal leading-[26px] text-dark/80">
                  Tel:- +8801847360360
                </p>
              </div>
            </div>
            <div className="lg:hidden">
              <SocialMediaIcons />
            </div>
          </div>
          <div className="hidden md:col-span-6 md:col-start-7 md:grid md:grid-cols-2 md:gap-x-10 lg:col-span-8 lg:col-start-5 lg:grid-cols-3">
            <LinkGroups heading="The Company" links={groupLinksOne} />
            <LinkGroups heading="Quick Links" links={groupLinksTwo} />
            <LinkGroups heading="AKS Group" links={groupLinksThree} />
            <div className="hidden lg:block">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
        <div className="border-t border-dark/10">
          <MenuAccordion heading="The Company" links={groupLinksOne} />
          <MenuAccordion heading="Quick Links" links={groupLinksTwo} />
          <MenuAccordion heading="AKS Group" links={groupLinksThree} />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
