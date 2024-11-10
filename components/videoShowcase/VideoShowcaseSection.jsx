"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";

function VideoShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  if (!isClient) return null;

  return (
    <section className="mb-[50px] mt-[35px] md:mb-[100px] md:mt-20">
      <div className="container">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border-none shadow-md shadow-dark/10 md:rounded-[20px] md:shadow-xl lg:shadow-2xl"
          data-aos="zoom-in-up"
        >
          {isPlaying ? (
            <VideoPlayer />
          ) : (
            <div
              className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-none bg-black md:rounded-[20px]"
              onClick={handlePlayClick}
            >
              <Image
                width={1290}
                height={712}
                src="/videos/thumbnails/video-thumbnail-2.png"
                alt="Pharmaceutical Showcase video thumbnail"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white fill-green shadow-md shadow-dark/10 md:h-20 md:w-20 md:shadow-xl lg:h-[120px] lg:w-[120px] lg:shadow-2xl">
                <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.3187 17.3271C24.634 17.5226 24.634 17.9814 24.3187 18.177L15.6398 23.5589C15.3067 23.7655 14.8763 23.5259 14.8763 23.134L14.8763 12.3701C14.8763 11.9782 15.3067 11.7386 15.6398 11.9452L24.3187 17.3271Z"
                    fill="current"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcaseSection;
