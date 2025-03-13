"use client";

import { useState } from "react";
import Image from "next/image";
import VideoPlayer from "./VideoPlayer";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

function VideoFullWidthSection({ data }) {
  const { video, image } = data;

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="pb-10 pt-[60px] md:p-0">
      <div className={cn("container", "md:mx-0 md:max-w-full md:px-0")}>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] border-none bg-black shadow-md shadow-dark/10 md:rounded-none md:shadow-lg lg:h-[712px] lg:shadow-xl">
          {isPlaying ? (
            <VideoPlayer link={video} />
          ) : (
            <div
              className="relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden border-none bg-black"
              onClick={handlePlayClick}
            >
              <Image
                width={1440}
                height={712}
                src={image || "/aks-thumbnail.png"}
                alt="Pharmaceutical Showcase video thumbnail"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="group absolute flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white fill-green shadow-md shadow-dark/10 md:h-20 md:w-20 md:shadow-xl lg:h-[120px] lg:w-[120px] lg:shadow-2xl">
                <Play
                  fill="#2E8168"
                  size={27}
                  className="h-3 w-3 text-[#2E8168] md:h-[27px] md:w-[27px]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoFullWidthSection;
