import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';

const FeaturedRows = ({ title, description }) => {
  return (
    <View className="">
      <View
        className="mt-4  flex-row items-center
         justify-between px-3 "
      >
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-3 ">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {/* resturantCard */}
        <ResturantCard
          id="123"
          rating={2.4}
          short_description="test"
          dishes={[]}
          lat={20}
          long={12}
          genre="Ghanaian"
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          address="Kampala"
        />
        <ResturantCard
          id="123"
          rating={2.4}
          short_description="test"
          dishes={[]}
          lat={20}
          long={12}
          genre="Ghanaian"
          imgUrl="https://links.papareact.com/gn7"
          title="KFC"
          address="Kampala"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
