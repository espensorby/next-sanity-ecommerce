import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { Image } from 'sanity';

export interface CustomImage {
  [key: string]: unknown;
  image: Image;
  _type: SanityImageObject;
  alt: string;
}

export interface HeroImages {
  _id: string;
  _createdAt: string;
  image1: Image;
  image2: Image;
  alt1: string;
  alt2: string;
  image1Url: string;
  image2Url: string;
}

export interface SimplifiedProduct {
  _id: string;
  _createdAt: string;
  name: string;
  price: number;
  slug: string;
  categoryName: string;
  image: Image;
  imageUrl: string;
  alt: string;
}

export interface Product extends Omit<SimplifiedProduct, 'image' | 'imageUrl' | 'alt'> {
  images: CustomImage[];
  description: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
}
