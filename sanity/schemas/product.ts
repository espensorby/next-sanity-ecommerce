import { defineType, defineArrayMember } from 'sanity';

const product = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of product',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID', // This is the ID of the price object in Stripe
      type: 'string',
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'imageObject',
          type: 'object',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text for screen readers',
              validation: (Rule) => Rule.required(),
              options: {
                isHighlighted: true,
              },
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
            },
          ],
        }),
      ],
    },
    {
      name: 'description',
      title: 'Description of product',
      type: 'text',
    },
    {
      name: 'categories',
      title: 'Product Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
  ],
  initialValue: () => ({
    categories: [
      {
        _type: 'reference',
        _ref: '62264a03-3349-45df-9581-e0c31e8f6f9f', // the _id of the "All" category, so that all products are in the "All" category by default
      },
    ],
  }),
});

export default product;
