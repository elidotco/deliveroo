import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-20 h-20"
      />
      <Text
        className="absolute bottom-1 text-white
      text-bold items-center justify-center"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
