import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import styles from './styles';

import Ionicons from "react-native-vector-icons/Ionicons";

const AbleBodyTypeRows = (props) => {
 
  const {type} = props;

  console.log(props);
  {/* {"type": {"duration": 27, "id": "2", "price": 36, "type": "AbleXL"}}  */}



  const getImage = () => {
    if (type.type === 'AbleX') {
      return require('../../assets/images/AbleX.jpeg');
    }
    if (type.type === 'AbleComfort') {
      return require('../../assets/images/AbleComfort.jpeg');
    }
    return require('../../assets/images/AbleXL.jpeg');
  }

  return(
    <View
      style={styles.container}>
       {/* Left Image */}
      
      <Image 
        style={styles.image} 
        //  source={require(`../../assets/images/${type.type}.jpeg`)}
        //  source={require(`../../assets/images/AbleComfort.jpeg`)}
        source={getImage()}
        
      />

      {/* Middle Container */}
      <View stylke={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type}{' '}
          {/* {type.type}{' '}  */}
          <Ionicons name={'person'} size={12} />
          3{type.id}
        </Text>
        <Text style={styles.time}>
          8:03 PM drop off
        </Text>
      </View>

      {/* Right container */}
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>Aprx. ${type.price}</Text>
      </View>

    </View>
  )
};

export default AbleBodyTypeRows;
