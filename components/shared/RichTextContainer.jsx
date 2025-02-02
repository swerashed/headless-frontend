import React from "react";
import SocialShareBottom from "./SocialShareBottom";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

const RichTextContainer = ({ page, content }) => {
  return (
    <div className="border-b border-dark/10 pb-[100px]">
      <div className="rich-text-container" >
        <div

          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {
        page !== "career" ? (<div className="social-share-container">
          <SocialShareBottom />
        </div>) : (<div className="container !max-w-[910px] !px-[30px] mx-auto">
          <PrimaryButton className="bg-blue text-white mt-[30px] fill-white stroke-white" border={true}>
            Apply Now
          </PrimaryButton>
        </div>)
      }


    </div>
  );
};

export default RichTextContainer;
