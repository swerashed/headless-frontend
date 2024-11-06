"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  if (!isClient) return null; // Avoid SSR mismatches

  return (
    <section className="my-[50px] lg:mb-[100px] lg:mt-[120px]">
      <div className="container">
        <div
          className="video-container relative aspect-[16/9] w-full max-w-[1290px] overflow-hidden rounded-lg border-none shadow-xl md:rounded-[20px] md:shadow-2xl"
          data-aos="zoom-in-up"
        >
          {isPlaying ? (
            <video
              className="border-0"
              width="100%"
              height="100%"
              src="/videos/pharmaceutical-showcase.mp4"
              title="Pharmaceutical Showcase video"
              controls
              autoPlay
            ></video>
          ) : (
            <div
              className="relative flex h-full w-full cursor-pointer items-center justify-center bg-black"
              onClick={handlePlayClick}
            >
              <Image
                width={1290}
                height={712}
                src="/videos/thumbnail/pharmaceutical-showcase.png"
                alt="Pharmaceutical Showcase video thumbnail"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute flex items-center justify-center rounded-full bg-black p-4 text-7xl text-white">
                ▶
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default VideoShowcase;
