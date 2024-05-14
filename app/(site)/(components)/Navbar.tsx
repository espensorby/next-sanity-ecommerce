'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { Category } from '@/types/types';
import { useShoppingCart } from 'use-shopping-cart';

export default function Navbar({ categories }: { categories: Category[] }) {
  const pathName = usePathname();
  const links = [
    ...categories
      .sort((a, b) => b.name.localeCompare(a.name))
      .map((category) => ({
        key: category._id,
        name: category.name,
        href: `/${category.slug}`,
      })),
  ];
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className="mb-8 border-b">
      <div
        className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6
    lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Next<span className="text-primary">Commerce</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link) => (
            <div key={link.key}>
              {pathName === link.href ? (
                <Link href={link.href} className="text-lg font-semibold text-primary">
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="relative flex divide-x border-r sm:border-l">
          <Button
            variant={'outline'}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 w-12 h-12 sm:w-20 sm:h-20 md:w-24 m:h-24 rounded-none">
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
          </Button>
          {cartCount !== 0 && (
            <span className="absolute top-1 right-2 px-2 text-white bg-red-500 rounded-xl">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
