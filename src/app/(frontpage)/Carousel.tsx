"use client";

import cn from "@/utils/cn";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000 }),
  ]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect(); // Set initial selected index
  }, [emblaApi, onSelect]);

  return (
    <div
      className="overflow-hidden relative pointer-events-none"
      ref={emblaRef}
    >
      <div className="flex">
        <div className="flex-[0_0_100%] min-w-0 h-[500px]">
          <Image
            src={"/banner_1.webp"}
            className="object-cover h-full w-auto block align-middle"
            width={1920}
            height={1080}
            quality={100}
            priority
            alt="banner image 1"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0 h-[500px]">
          <Image
            src={"/banner_2.webp"}
            className="object-cover h-full w-auto block align-middle"
            width={1920}
            height={1080}
            quality={100}
            priority
            alt="banner image 1"
          />
        </div>
        <div className="flex-[0_0_100%] min-w-0 h-[500px]">
          <Image
            src={"/banner_3.webp"}
            className="object-cover h-full w-auto block align-middle"
            width={1920}
            height={1080}
            quality={100}
            priority
            alt="banner image 1"
          />
        </div>
      </div>
      <div
        style={{ transform: "translate(-50%,-50%)" }}
        className="absolute left-1/2 bottom-10"
      >
        <div className="flex flex-row gap-10">
          {[1, 2, 3].map((num, index) => (
            <div
              key={index}
              className={cn(
                "w-[70px] h-[6px] rounded bg-[hsla(195,2%,46%,.51)]",
                selectedIndex === index && "active"
              )}
            ></div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .active {
          position: relative;
        }
        .active::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: white;
          border-radius: 4px;
          animation: fill 10s linear infinite;
        }
        @keyframes fill {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
