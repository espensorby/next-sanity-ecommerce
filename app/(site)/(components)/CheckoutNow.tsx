'use client';

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { ProductCartType } from '@/types/types';

export default function CheckoutNow(product: ProductCartType) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  return <Button onClick={() => buyNow(product.price_id)}>Checkout now</Button>;
}
