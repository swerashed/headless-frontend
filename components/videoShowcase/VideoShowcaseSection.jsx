"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { cn } from "@/lib/utils";

function VideoShowcaseSection({data}) {
  const {video, section_classnames, image} = data
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section
      className={cn(
        "mb-[50px] mt-[35px] overflow-hidden md:mb-[100px] md:mt-20",
        section_classnames,
      )}
    >
      <div className="container">
        <div
          className="relative aspect-[165/91] w-full overflow-hidden rounded-[10px] border-none shadow-md shadow-dark/10 md:rounded-[20px] md:shadow-xl lg:shadow-2xl"
          data-aos="zoom-in-up"
        >
          {isPlaying ? (
            <VideoPlayer videoURL={video} />
          ) : (
            <div
              className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-none bg-black md:rounded-[20px]"
              onClick={handlePlayClick}
            >
              <Image
                width={1290}
                height={712}
                src={image}
                alt="Pharmaceutical Showcase video thumbnail"
                className="absolute inset-0 h-full w-full rounded-lg object-cover md:rounded-[20px]"
              />
              <div className="group absolute flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white fill-green shadow-md shadow-dark/10 md:h-20 md:w-20 md:shadow-xl lg:h-[120px] lg:w-[120px] lg:shadow-2xl">
                <svg
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-300 group-hover:scale-105"
                >
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
