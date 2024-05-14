'use client';

import { ReactNode } from 'react';
import { CartProvider as USCProvider } from 'use-shopping-cart';
import { stripeKey } from '@/sanity/env';

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl="http://localhost:3000/stripe/success"
      cancelUrl="http://localhost:3000/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist
      language="en-US">
      {children}
    </USCProvider>
  );
}
