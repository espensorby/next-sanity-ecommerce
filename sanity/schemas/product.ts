const product = {
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
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          name: 'imageObject',
          type: 'object',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
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
        },
      ],
    },
    {
      name: 'description',
      title: 'Description of product',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
  ],
};

export default product;
