'use client';

import { Button } from '@/components/ui/button';
import { urlForImage } from '@/sanity/lib/image';
import { useShoppingCart } from 'use-shopping-cart';
import { ProductCartType } from '@/types/types';

export default function AddToCart(product: ProductCartType) {
  const { addItem } = useShoppingCart();
  const productToAdd = {
    ...product,
    image: urlForImage(product.image),
  };

  return (
    <Button
      onClick={() => {
        addItem(productToAdd);
      }}>
      Add to cart
    </Button>
  );
}
