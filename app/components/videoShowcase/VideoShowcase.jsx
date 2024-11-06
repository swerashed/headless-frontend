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
              <div className="lg:w- absolute flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white fill-green shadow-md shadow-white md:h-20 md:w-20 md:shadow-2xl lg:h-[120px] lg:w-[120px]">
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

export default VideoShowcase;
