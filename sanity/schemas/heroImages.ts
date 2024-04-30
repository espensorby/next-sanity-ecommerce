import { defineType, defineField } from 'sanity';

declare module 'sanity' {
  // redeclare StringOptions; it will be merged with StringOptions in the sanity module.
  // Not strictly necessary, as we could just remove defineField, but I added it here to show the possibility.
  export interface StringOptions {
    isHighlighted?: boolean;
  }
}

const heroImages = defineType({
  name: 'heroImage',
  title: 'Two Hero Images',
  type: 'document',
  fields: [
    defineField({
      name: 'image1',
      title: 'First Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text for screen readers',
          type: 'string',
          options: { isHighlighted: true },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    {
      name: 'image2',
      title: 'Second Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text for screen readers',
          type: 'string',
          options: { isHighlighted: true },
        }),
      ],
    },
  ],
});

export default heroImages;
