import React, { useState, useEffect } from 'react'
import { View, Text, Pressable } from "react-native";


import styles from './styles';
import AbleBodyTypeRows from '../../components/AbleBodyTypeRows'

import typesData from '../../assets/data/types';

const AbleBodyTypes = (props) => {

  const confirm = () => {
    console.warn('confirm');
  };


  
  console.log(props);

  return(
    <View>
        {typesData.map((type) => (
            <AbleBodyTypeRows 
              type={type}
              key={type.id}
            />
      ))}

      <Pressable onPress={confirm} style={{
        flext: 1,
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          Confirm Your AbleBody
        </Text>
      </Pressable>
      
    </View>
  );
};

export default AbleBodyTypes;
