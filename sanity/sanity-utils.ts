import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { urlForImage } from '@/sanity/lib/image';

export async function getHeroImages() {
  const query = groq`*[_type == "heroImage"][0]`;
  const data = await client.fetch(query);
  const heroImages = {
    urlImg1: urlForImage(data.image1),
    urlImg2: urlForImage(data.image2),
    altImg1: data.image1.alt,
    altImg2: data.image2.alt,
  };
  return heroImages;
}
