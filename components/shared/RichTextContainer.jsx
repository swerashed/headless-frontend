import React from "react";
import SocialShareBottom from "./SocialShareBottom";
import PrimaryButton from "../buttons/PrimaryButton";

const RichTextContainer = ({ slug, page, content }) => {
  return (
    <div className="border-b border-dark/10 bg-surface pb-[100px] xl:pb-[180px]">
      <div className="rich-text-container">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      {page !== "career" ? (
        <div className="social-share-container">
          <SocialShareBottom />
        </div>
      ) : (
        <div className="container mx-auto !max-w-[1018px] !px-[30px]">
          <PrimaryButton
            href={`/apply-now/${slug}`}
            className="mt-[30px] bg-blue fill-white stroke-white text-white"
            border={true}
          >
            Apply Now
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default RichTextContainer;
