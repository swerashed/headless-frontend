import Image from "next/image";

import locationIcon from "../../assets/icons/map-pointer.svg";
import mailIcon from "../../assets/icons/mail.svg";
import telephoneIcon from "../../assets/icons/telephone.svg";

import facebookIcon from "../../assets/icons/facebook.svg";
import linkedInIcon from "../../assets/icons/in.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import gmailIcon from "../../assets/icons/gmail.svg";
import MenuAccordion from "./MenuAccordion";
import Link from "next/link";

function Footer() {
  return (
    <footer className="pb-5 pt-10">
      <div className="container">
        <div className="mx-auto px-3">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={183}
            height={60}
            className="mb-8 object-contain"
          />
          <div className="mb-8 flex flex-col gap-4">
            <div className="group flex items-center gap-2">
              <Image
                src={locationIcon}
                alt="icon"
                className="h-10 w-10 rounded-full border border-border-light p-2 transition-all duration-300 group-hover:border-dark"
              />
              <p className="font-inter font-normal text-dark/80">
                Rupayan Prime, Plot 02, Road 07, Dhanmondi, Dhaka – 1205
              </p>
            </div>
            <div className="group flex items-center gap-2">
              <Image
                src={mailIcon}
                alt="icon"
                className="h-10 w-10 rounded-full border border-border-light p-2 transition-all duration-300 group-hover:border-dark"
              />
              <p className="font-inter font-normal text-dark/80">
                info@akskhanpharma.com
              </p>
            </div>
            <div className="group flex items-center gap-2">
              <Image
                src={telephoneIcon}
                alt="icon"
                className="h-10 w-10 rounded-full border border-border-light p-2 transition-all duration-300 group-hover:border-dark"
              />
              <p className="font-inter font-normal text-dark/80">
                Tel:- +8801847360360
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-[30px]">
            <h6 className="font-onest text-lg font-medium text-dark">
              Follow us on
            </h6>
            <div className="flex items-center gap-4">
              <Image src={facebookIcon} alt="Social Icon" />
              <Image src={linkedInIcon} alt="Social Icon" />
              <Image src={youtubeIcon} alt="Social Icon" />
            </div>
          </div>
        </div>
        <MenuAccordion />
        <MenuAccordion />
        <div className="mt-[30px] flex flex-col items-center justify-center">
          <p className="mb-[15px] max-w-xs text-center font-inter text-sm font-normal text-dark/80">
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
      </div>
    </footer>
  );
}

export default Footer;
