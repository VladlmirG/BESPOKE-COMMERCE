"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';

// Array of local images and titles
const localCategories = [
  { name: 'Marys', media: '/brands/brand1.png' },
  { name: 'Morilee', media: '/brands/brand2.png' },
  { name: 'Quince', media: '/brands/brand3.png' },
  { name: 'Princesa', media: '/brands/brand4.png' },
  { name: 'Marys', media: '/brands/brand1.png' },
  { name: 'Morilee', media: '/brands/brand2.png' },
  { name: 'Quince', media: '/brands/brand3.png' },
  { name: 'Princesa', media: '/brands/brand4.png' },
  { name: 'Marys', media: '/brands/brand1.png' },
  { name: 'Morilee', media: '/brands/brand2.png' },
  { name: 'Quince', media: '/brands/brand3.png' },
  { name: 'Princesa', media: '/brands/brand4.png' },
];

const BrandsCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoscroll({
      speed: 2,
      startDelay: 1000,
      direction: 'backward',
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
    }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("init", () => {
      console.log("Embla initialized");
    });
  }, [emblaApi]);

  return (
    <div className="embla py-2 mt-6" ref={emblaRef}>
      <div className="embla__container flex">
        {localCategories.map((item, index) => (
          <div
            className="embla__slide px-3 flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 gap-4 md:gap-8"
            key={index} // Using index as a key since _id is removed
          >
            <div className="relative  w-56 h-32 mx-auto">
              <Image
                src={item.media}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-contain opacity-70"
              />
            </div>
            {/* <h1 className="montserrat-font mt-8 font-normal text-center text-xl tracking-wide">
              {item.name}
            </h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;
