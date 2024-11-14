import React, { useCallback } from 'react';
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import { ImageSourcePropType } from 'react-native';

// Import images directly for better performance and avoid async loading issues
const carouselImages = [
  require('@/assets/images/carousel-image1.png'),
  require('@/assets/images/carousel-image2.png'),
  require('@/assets/images/carousel-image3.png'),
  require('@/assets/images/carousel-image4.png')
];


export default function HomeScreen() {

  return (
    <ScrollView className="flex-1 px-6 pt-4">

      <Swiper className='h-[180px] w-full rounded-md' autoplay={true} showsPagination={false}>
        {
          carouselImages.map((image, index) => (
            <Image key={index} source={image} className='h-full w-full rounded-md' resizeMode="cover" />
          ))
        }
      </Swiper>


    </ScrollView>
  );
}


