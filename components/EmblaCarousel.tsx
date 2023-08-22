"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import {
  DotButton,
  PrevButton,
  NextButton,
} from "./EmblaCarouselArrowsDotsButtons";
import { gameCategories } from "@/config/games";
import Image from "next/image";
import Link from "next/link";

type EmblaProps = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaProps> = (props) => {
  const categories = gameCategories[0]?.subcategories;
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport relative" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide h-[306px]" key={index}>
                <Link
                  href={`/games/${categories![index]?.genre}?id=${
                    categories![index]?.id
                  }`}
                  prefetch={true}
                >
                  <Image
                    className="object-cover absolute brightness-[.2] z-[-1] w-full"
                    src={categories![index]?.image as string}
                    alt={`${categories![index]?.title} Category Link`}
                    aria-label={`${categories![index]?.title} Category Link`}
                    fill
                    placeholder="blur"
                    blurDataURL={"/public/black_image.jpg"}
                    priority={true}
                  />
                  <p className="text-primary text-4xl flex justify-center items-center w-full h-full font-extrabold">
                    {categories![index]?.title}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="z-50 absolute top-[2%] flex mx-auto w-fit bg-pink-500 rounded ml-2 hover:opacity-90">
            <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
            <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
          </div>
          <div className="embla__dots bottom-0 absolute">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
