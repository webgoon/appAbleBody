import React, { useState, useEffect } from "react";
import { Image, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, AnimatedRegion, Animated } from 'react-native-maps';

import styles from './styles';
import cars from '../../assets/data/cars'

const HomeMap = (props) => {

  const getImage = (type) => {
    if (type === 'AbleX') {
      return require('../../assets/images/top-AbleX.png');
    }
    if (type === 'AbleComfort') {
      return require('../../assets/images/top-Comfort.png');
    }
    return require('../../assets/images/top-AbleXL.png');
  }

  return (
   
      
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton
        zoomEnabled={true}
        showsScale={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 33.5012000,
          longitude: -84.3002000,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

    {/*  The Set up for the markers which are cars */}

    {cars.map((car) => (

      <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
        <Image 
            style={{
              width: 70, 
              height: 70, 
              resizeMode: 'contain',
              transform: [{
                rotate: `${car.heading}deg`
              }]
            }}
            source={getImage(car.type)} 
            />
          </Marker>
        ))}
    </MapView>
  );
};

export default HomeMap;
