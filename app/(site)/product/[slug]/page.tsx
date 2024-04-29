import { getProduct } from '@/sanity/sanity-utils';
import ImageGallery from '../../(components)/ImageGallery';
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={product.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="inline-block mb-1 text-gray-500">{product.categoryName}</span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{product.name}</h2>
            </div>
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <Button className="rounded-lg gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="w-5 h-5" />
              </Button>
              <span className="text-sm text-gray-500">56 reviews</span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl ">
                  ${product.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">${product.price + 30}</span>
              </div>
              <span className="text-sm text-gray-500">Includes VAT plus shipping</span>
            </div>
            <div className="flex items-center mb-6 text-gray-500">
              <Truck className="mr-2" />
              <span className="text-sm">2-4 days shipping</span>
            </div>

            <div className="flex gap-2.5">
              <Button>Add to Cart</Button>
              <Button variant="secondary">Go to Checkout</Button>
            </div>

            <div className="mt-12 text-base text-gray-500 tracking-wide">{product.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
