'use client';

import { Button } from '@/components/ui/button';
import { urlForImage } from '@/sanity/lib/image';
import { Image } from 'sanity';
import { useShoppingCart } from 'use-shopping-cart';

export interface ProductCartType {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: Image;
}

export default function AddToCart(product: ProductCartType) {
  const { addItem, handleCartClick } = useShoppingCart();
  const productAdded = {
    ...product,
    image: urlForImage(product.image),
    sku: 'hasgdfk',
  };

  return (
    <Button
      onClick={() => {
        addItem(productAdded);
        handleCartClick();
      }}>
      Add to cart
    </Button>
  );
}
