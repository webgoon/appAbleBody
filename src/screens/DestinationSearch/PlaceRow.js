import React from 'react';
import { View, Text } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from './styles';

const PlaceRow = ({data}) => {

  //console.log(data);

  return (
    <View style={styles.search_row}>
      <View style={styles.iconContainer}>
      
      {
        data.description === 'Home' ? <Entypo name="home" size={24} color="green" />
        
        : <Entypo name="location-pin" size={24} color={"white"} />
      }
      
      
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  )
}

export default PlaceRow;
