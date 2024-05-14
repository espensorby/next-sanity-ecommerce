'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
    clearCart,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log(result.error);
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('Error redirecting to checkout: ' + error.message);
      } else {
        throw error; // rethrow the error unchanged
      }
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col justify-between h-full">
          <div className="flex-1 mt-8 overjlow-y-auto">
            <ul className="my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6 text-4xl text-gray-500">Your cart is empty</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="flex-shrink-0 w-24 h-28 rounded-md border border-gray-200 overflow-hidden">
                        <Image
                          src={entry.image as string}
                          alt={entry.name}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="flex flex-1 flex-col ml-4">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 justify-between items-end mt-2 text-sm">
                          <p className="text-gray-500">Qty: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>
            <div className="mt-6">
              <Button onClick={handleCheckoutClick} className="w-full">
                Checkout
              </Button>
            </div>
            <div className="flex justify-center text-center text-sm text-gray-500 mt-6">
              <p>
                OR
                <button
                  onClick={() => handleCartClick()}
                  className="ml-4 px-4 py-2 font-medium text-primary bg-gray-200 rounded-lg hover:text-primary/80">
                  Continue shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
