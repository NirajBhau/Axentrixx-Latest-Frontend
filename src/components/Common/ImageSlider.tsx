"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ImageSliderProps = {
  images: string[];
  interval?: number;
};

const ImageSlider = ({ images, interval = 3000 }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative h-full w-full overflow-hidden group">
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative h-full min-w-full">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="h-full w-full object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
