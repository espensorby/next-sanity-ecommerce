const heroImages = {
  name: 'heroImage',
  title: 'Two Hero Images',
  type: 'document',
  fields: [
    {
      name: 'image1',
      title: 'First Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt text for screen readers',
          type: 'string',
          options: { isHighlighted: true },
        },
      ],
    },
    {
      name: 'image2',
      title: 'Second Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt text for screen readers',
          type: 'string',
          options: { isHighlighted: true },
        },
      ],
    },
  ],
};

export default heroImages;
