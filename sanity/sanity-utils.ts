import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { urlForImage } from '@/sanity/lib/image';
import { HeroImages, SimplifiedProduct, Product, Category } from '@/types/types';

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

export async function getProduct(slug: string): Promise<Product> {
  const query = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    price,
    images,
    description,
    "slug": slug.current,
    "categoryName": category->name,
  }`;

  const data = await client.fetch(query, { slug });

  return data;
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
  const newestProducts = data.map((product) => {
    return {
      ...product,
      imageUrl: urlForImage(product.image),
    };
  });
  return newestProducts;
}

export async function getProductsFromCategory(category: string): Promise<SimplifiedProduct[]> {
  const query = groq`*[_type == "product" && $category in category[]->name]{
    _id,
    _createdAt,
    name,
    price,
    "slug": slug.current,
    "categoryNames": category[]->name,
    "image": images[0].image,
    "alt": images[0].alt,
  }`;

  const data: SimplifiedProduct[] = await client.fetch(query, { category });
  const productsFromCategory = data.map((product) => {
    return {
      ...product,
      imageUrl: urlForImage(product.image),
    };
  });
  return productsFromCategory;
}

export async function getCategories(): Promise<Category[]> {
  const query = groq`*[_type == "category"]{
    _id,
    name,
    "slug": slug.current,
  }`;

  return await client.fetch(query);
}
