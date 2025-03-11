import Image from "next/image";

import facebookIcon from "@/app/assets/icons/facebook.svg";
import linkedInIcon from "@/app/assets/icons/in.svg";
import youtubeIcon from "@/app/assets/icons/youtube.svg";
import gmailIcon from "@/app/assets/icons/gmail.svg";
import Link from "next/link";

function SocialMediaIcons({ socialLinks }) {
  return (
    <div className="flex flex-col gap-4 pb-[30px]">
      <h6 className="font-onest text-base font-medium leading-[26px] text-dark">
        Follow us on
      </h6>
      <div className="flex items-center gap-4">
        <Link href={socialLinks[0]?.link || "#"} target="_blank">
          <Image
            src={facebookIcon}
            alt="Social Icon"
            className="h-8 w-8 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
        <Link href={socialLinks[1]?.link || "#"} target="_blank">
          <Image
            src={linkedInIcon}
            alt="Social Icon"
            className="h-8 w-8 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
        <Link href={socialLinks[2]?.link || "#"} target="_blank">
          <Image
            src={youtubeIcon}
            alt="Social Icon"
            className="h-8 w-8 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
        <Link href={`mailto:${socialLinks[3]?.link}` || "#"} target="_blank">
          <Image
            src={gmailIcon}
            alt="Social Icon"
            className="h-8 w-8 rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
