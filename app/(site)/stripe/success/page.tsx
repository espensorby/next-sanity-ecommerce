'use client';

import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { CheckCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SuccessStripe() {
  const { clearCart } = useShoppingCart();

  return (
    <div className="h-screen">
      <div className="mx-auto mt-32 md:max-w-[50vw]">
        <CheckCheck className="w-16 h-16 mx-auto my-6 text-green-600 " />
        <div className="text-center">
          <h3 className="text-base text-center font-semibold text-gray-900 md:text-2xl">
            Payment Successful
          </h3>

          <p className="my-2 text-gray-600">Thank you for shopping with us!</p>

          <Button onClick={() => clearCart()} asChild className="mt-5">
            <Link href="/" className="mr-2">
              Go back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
