import { getNewestProducts } from '@/sanity/sanity-utils';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Newest() {
  const newestProducts = await getNewestProducts();

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Our Newest Products</h2>

          <Link href="/All" className="flex items-center gap-x-1text-primary hover:text-gray-700">
            See all{' '}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {newestProducts.map((product) => (
            <div key={product._id} className="group relative">
              <Link href={`/product/${product.slug}`}>
                <div className="w-full aspect-square rounded-md bg-gray-200 overflow-hidden group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt={product.alt}
                    className="w-full h-full object-cover object-center lg:w-full lg:h-full"
                    width="300"
                    height="300"
                  />
                </div>

                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
