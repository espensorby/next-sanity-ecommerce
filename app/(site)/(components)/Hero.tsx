import { getHeroImages } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { getCategories } from '@/sanity/sanity-utils';

export default async function Hero() {
  const heroImages = await getHeroImages();
  const categories = await getCategories();

  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-wrap justify-between mb-8 md:mb-16">
        <div className="flex flex-col justify-center w-full mb-6 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            The best place to find the latest in fashion and style. We sell only the most exclusive
            and high quality products.
          </p>
        </div>
        <div className=" hidden w-full mb-12 md:mb-16 lg:flex lg:w-2/3">
          <div className="relative left-12 top-12 z-10 ml-12 rounded-lg bg-gray-100 shadow-lg overflow-hidden md:left-16 md:top-16 lg:ml-0 hover:z-10 hover:scale-110 transition">
            <Image
              src={heroImages.image2Url}
              alt={heroImages.alt2}
              className="w-full h-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:z-10 hover:scale-110 transition">
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
        <div className="flex divide-x w-full h-12 border rounded-lg overflow-hidden md:w-96">
          {categories
            .sort((a, b) => b.name.localeCompare(a.name))
            .map((category) => (
              <Link
                key={category._id}
                href={`/${category.slug}`}
                className="flex justify-center items-center w-1/3 text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                {category.name}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
