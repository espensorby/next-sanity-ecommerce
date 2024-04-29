import { getHeroImages } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Hero() {
  const heroImages = await getHeroImages();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-wrap justify-between mb-8 md:mb-16">
        <div className="flex flex-col justify-center w-full mb-6 sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            The best place to find the latest in fashion and style. We sell only the most exclusive
            and high quality products.
          </p>
        </div>
        <div className="flex w-full mb-12 md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 ml-12 rounded-lg bg-gray-100 shadow-lg overflow-hidden md:left-16 md:top-16 lg:ml-0">
            <Image
              src={heroImages.image2Url}
              alt={heroImages.alt2}
              className="w-full h-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={heroImages.image1Url}
              alt={heroImages.alt1}
              className="w-full h-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-8 md:flex-row">
        <div className="flex divide-x w-96 h-12 border rounded-lg overflow-hidden">
          <Link
            href="/Men"
            className="flex justify-center items-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Men
          </Link>
          <Link
            href="/Women"
            className="flex justify-center items-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex justify-center items-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            Teens
          </Link>
          <Link
            href="/All"
            className="flex justify-center items-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
            All
          </Link>
        </div>
      </div>
    </section>
  );
}
