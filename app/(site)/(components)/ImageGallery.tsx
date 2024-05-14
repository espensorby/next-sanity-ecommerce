'use client';

import { useState } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { CustomImage } from '@/types/types';

export default function ImageGallery({ images }: { images: CustomImage[] }) {
  const [bigImage, setBigImage] = useState(images[0].image);
  const [bigImageAlt, setBigImageAlt] = useState(images[0].alt);

  const handleSetBigImage = (image: CustomImage) => {
    setBigImage(image.image);
    setBigImageAlt(image.alt);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="flex gap-4 order-last lg:flex-col lg:order-none">
        {images.map((image: CustomImage, index: number) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={urlForImage(image.image)}
              alt={image.alt}
              width={200}
              height={200}
              className="w-full h-full object-cover object-center cursor-pointer"
              onClick={() => handleSetBigImage(image)}
              onMouseEnter={() => handleSetBigImage(image)}
            />
          </div>
        ))}
      </div>
      <div className="relative rounded-lg bg-gray-100 overflow-hidden lg:col-span-4">
        <Image
          src={urlForImage(bigImage)}
          alt={bigImageAlt}
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
          priority
        />
        <span className="absolute left-0 top-0 px-3 py-1.5 rounded-br-lg bg-red-500 text-sm uppercase text-white tracking-wider">
          Sale
        </span>
      </div>
    </div>
  );
}
