export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Featured Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resturants',
      type: 'array',
      title: 'Featured Resturants',
      of: [{ type: 'reference', to: [{ type: 'Resturants' }] }],
    },
  ],
};
