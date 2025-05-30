"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoscroll from 'embla-carousel-auto-scroll';

interface Category {
  _id: string;
  slug: string;
  name: string;
  media?: string;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoscroll({
      speed: 2,
      startDelay: 1000,
      direction: 'forward',
      playOnInit: true,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: true,
    }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("init", () => {
      console.log("Embla initialized");
    });
  }, [emblaApi]);

  return (
    <div className="embla py-2" ref={emblaRef}>
      <div className="embla__container flex">
        {categories.map((item) => (
          <div className="embla__slide px-3 flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5 gap-4 md:gap-8" key={item._id}>
            <Link href={`/list?cat=${item.slug}`}>
              <div className="relative bg-slate-100 w-full h-96">
                <Image
                  src={item.media || ""}
                  alt=""
                  fill
                  sizes="20vw"
                  className="object-cover rounded-md opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-300"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-blue-100 opacity-50"></div> */}
              </div>
              <h1 className="poiret_one-font mt-8 font-semibold text-center text-xl tracking-widest uppercase text-bluey">
                {item.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;





