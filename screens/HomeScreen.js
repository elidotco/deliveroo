import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Category from '../components/Category';
import FeaturedRows from '../components/FeaturedRows';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      className="bg-white pt-10
    "
    >
      <View className="flex-row items-center flex-1 space-x-2 mx-4 pb-3 ">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="w-8 h-8 bg-gray-300 p-4 rounded-full"
        />
        <View
          className="flex-1 
          "
        >
          <Text>Deliver Now!</Text>
          <Text className="text-lg font-bold">
            current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* search   */}

      <View className="flex-row mx-3">
        <View className="flex-row items-center space-x-2 flex-1 bg-gray-200">
          <SearchIcon size={25} color="gray" />
          <TextInput
            placeholder="Search"
            className="flex-1"
            keyboardType="defalut"
          />
        </View>
        <AdjustmentsIcon size={35} color="#00ccbb" />
      </View>

      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* category */}

        <Category />

        {/* featured rows */}

        <FeaturedRows
          title="Featured"
          description="Paid placements from our top chefs"
          featuredCategory="featured"
        />
        <FeaturedRows
          title="Tasty Discounts"
          description="Everyone`s been enjoying these juicy discounts"
          featuredCategory="discount"
        />
        <FeaturedRows
          title="Offers near you"
          description="Paid placements from our top chefs"
          Category="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
