import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { urlForImage } from '@/sanity/lib/image';
import { HeroImages, SimplifiedProduct } from '@/types/types';

export async function getHeroImages(): Promise<HeroImages> {
  const query = groq`*[_type == "heroImage"][0]{
    _id,
    _createdAt,
    "image1": image1,
    "image2": image2,
    "alt1": image1.alt,
    "alt2": image2.alt,
  }`;
  const data = await client.fetch(query);
  return {
    ...data,
    image1Url: urlForImage(data.image1),
    image2Url: urlForImage(data.image2),
  };
}

export async function getNewestProducts(): Promise<SimplifiedProduct[]> {
  const query = groq`*[_type == "product"][0...4] | order(_createdAt desc){
    _id,
    _createdAt,
    name,
    price,
    "slug": slug.current,
    "categoryName": category->name,
    "image": images[0].image,
    "alt": images[0].alt,
  }`;
  const data: SimplifiedProduct[] = await client.fetch(query);
  console.log('data: ', data);
  const newestProducts = data.map((product) => {
    return {
      ...product,
      imageUrl: urlForImage(product.image),
    };
  });
  return newestProducts;
}
