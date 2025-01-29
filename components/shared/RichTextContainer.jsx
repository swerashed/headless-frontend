import React from "react";
import SocialShareBottom from "./SocialShareBottom";
import Image from "next/image";

const RichTextContainer = ({content}) => {
  return (
    <div className="border-b border-dark/10">
      <div className="rich-text-container" >
        <div
  
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <div className="social-share-container">
        <SocialShareBottom />
      </div>
    </div>
  );
};

export default RichTextContainer;
