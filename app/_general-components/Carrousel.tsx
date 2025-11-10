"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const items = [
  {
    title: "Build Faster",
    description: "Ship modern products with power and speed.",
    image: "/images/slide1.jpg",
  },
  {
    title: "Design Better",
    description: "Pixel perfect UI with accessibility in mind.",
    image: "/images/slide2.jpg",
  },
  {
    title: "Scale Easily",
    description: "Robust systems built to grow with you.",
    image: "/images/slide3.jpg",
  },
];

export default function CarouselComponent() {
  return (
    <div className="w-full flex justify-center py-10">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="w-[90%] max-w-4xl"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover brightness-[0.6]"
                />

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-lg max-w-md opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <CarouselPrevious className="left-2 md:left-4" />
        <CarouselNext className="right-2 md:right-4" />
      </Carousel>
    </div>
  );
}

