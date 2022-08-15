import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';
import { StarIcon } from 'react-native-heroicons/solid';

const ResturantCard = ({
  id,
  title,
  rating,
  genre,
  imgUrl,
  short_description,
  dishes,
  address,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="w-64 h-36"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center ">
          <StarIcon color="green" size={20} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>

        <View className="flex-row items-center">
          <LocationMarkerIcon color="gray" opacity={0.5} size={20} />
          <Text className="text-xs text-gray-500">Nearby .{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
