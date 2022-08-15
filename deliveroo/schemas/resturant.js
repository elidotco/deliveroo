export default {
  name: 'Resturants',
  title: 'Resturants',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resturant Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Resturant',
    },
    {
      name: 'latitude',
      type: 'number',
      title: 'Resturant Latitude ',
    },

    {
      name: 'longitude',
      type: 'number',
      title: 'Resturant Longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Resturant Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Resturant dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Resturant category',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Resturant Rating',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error('Address must be between 1 and 5 characters'),
    },
  ],
};
