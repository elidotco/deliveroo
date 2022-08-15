import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Category = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard title="testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="testing" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="testing" imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  );
};

export default Category;
