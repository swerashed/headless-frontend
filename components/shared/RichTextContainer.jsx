import React from "react";
import SocialShareBottom from "./SocialShareBottom";

const RichTextContainer = () => {
  return (
    <>
      <div className="rich-text-container">
        <h1>Grand Opening of Two New Branches</h1>
        <p>
          In an exciting development for the residents of Sylhet, AKS Pharmacy
          celebrated the grand opening of two new branches on Medical Road and
          Subhani Ghat. This expansion marks a significant milestone for the
          company, as it continues to strengthen its presence in the region.
        </p>
        <h1>A Commitment to Quality Healthcare</h1>
        <p>
          With these new locations, AKS Pharmacy is set to provide quality
          medicines and consumer goods to the vibrant community of Sylhet. The
          branches aim to offer easy healthcare solutions, ensuring that
          residents have access to essential products and services right in
          their neighborhoods.
        </p>
        <img
          src="https://s3-alpha-sig.figma.com/img/f8df/05d7/d21e76da16f0dc03f88df7f821160548?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U-d6N79p7nWdDrIDbU57PrnW9UpFcR~JYzdE4rHCs~3wQLoJr2Ls5aKF1ZhdD-0qQspp-OeSuFLCFW4Ja8DYXU5bjTSht1JP0skvF9JfcEoXtkqIej-ENVxsst3a8iMBh8SI08rESR16oDMCnjb9FQtMVmW45lDiPLNAHp4rIOAasYWrW0CjPEoOvkZWPDbjXKSU0SVjUmvqFGWCIJDO25~MEAuVuSR2u0651aUwBDw8M3OV3zXDl6MmK2dxtSVqHOFEJ7OuIO9tAizo~7KcTbUbfppBjNniI~oDjPwghv4eyqzo7zdzE4PfdyPbuYYrXiJiDWXHaznOqBC1H6kb3w__"
          alt=""
        />
        <h1>A Commitment to Quality Healthcare</h1>
        <p>
          With these new locations, AKS Pharmacy is set to provide quality
          medicines and consumer goods to the vibrant community of Sylhet. The
          branches aim to offer easy healthcare solutions, ensuring that
          residents have access to essential products and services right in
          their neighborhoods.
        </p>
      </div>

      <div className="social-share-container">
        <SocialShareBottom />
      </div>
    </>
  );
};

export default RichTextContainer;
