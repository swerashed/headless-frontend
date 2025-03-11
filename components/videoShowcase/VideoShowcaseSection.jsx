"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

function VideoShowcaseSection({ data }) {
  const { video, section_classnames, image } = data;
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
          className="relative aspect-[165/91] w-full overflow-hidden rounded-[10px] border-none md:rounded-[20px]"
          data-aos="zoom-in-up"
        >
          {isPlaying ? (
            <VideoPlayer link={video} />
          ) : (
            <div
              className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border-none bg-black md:rounded-[20px]"
              onClick={handlePlayClick}
            >
              <Image
                width={1290}
                height={712}
                src={image || "/aks-thumbnail.png"}
                alt="Pharmaceutical Showcase video thumbnail"
                className="absolute inset-0 h-full w-full rounded-lg object-cover md:rounded-[20px]"
              />
              <div className="group absolute flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white fill-green shadow-md shadow-dark/10 md:h-20 md:w-20 md:shadow-xl lg:h-[120px] lg:w-[120px] lg:shadow-2xl">
                <Play fill="#2E8168" className="text-[#2E8168]" size={27} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcaseSection;
