import Image from "next/image";

import facebookIcon from "../../assets/icons/facebook.svg";
import linkedInIcon from "../../assets/icons/in.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import gmailIcon from "../../assets/icons/gmail.svg";
import Link from "next/link";

function SocialMediaIcons() {
  return (
    <div className="mb-[30px] flex flex-col gap-4">
      <h6 className="font-onest text-lg font-medium text-dark">Follow us on</h6>
      <div className="flex items-center gap-4">
        <Link href="/">
          <Image
            src={facebookIcon}
            alt="Social Icon"
            className="transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
        <Link href="/">
          <Image
            src={linkedInIcon}
            alt="Social Icon"
            className="transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
        <Link href="/">
          <Image
            src={youtubeIcon}
            alt="Social Icon"
            className="transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
        <Link href="/">
          <Image
            src={gmailIcon}
            alt="Social Icon"
            className="transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-md focus:scale-105 focus:opacity-90 focus:shadow-md focus:outline-none"
          />
        </Link>
      </div>
    </div>
  );
}

export default SocialMediaIcons;
