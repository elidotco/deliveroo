import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import sanityClient from '../sanity';
import ResturantCard from './ResturantCard';

const FeaturedRows = ({ id, title, description }) => {
  const [resturants, setResturants] = React.useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == "${id}"]{
        ...,
        resturants[]->{
          ...,
          dishes[]->,
          type->{
            name
          }
        },
        
      }[0]`,
        { id }
      )
      .then((data) => {
        setResturants(data?.resturants);
      });
  }, []);

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

        {resturants?.map((resturant) => (
          <ResturantCard
            key={resturant.id}
            id={resturant.id}
            rating={resturant.rating}
            short_description={resturant.short_description}
            dishes={resturant.dishes}
            lat={resturant.lat}
            long={resturant.long}
            genre={resturant.type?.name}
            imgUrl={resturant.image}
            title={resturant.name}
            address={resturant.address}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRows;
