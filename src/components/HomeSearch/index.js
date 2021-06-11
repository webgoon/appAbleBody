import React from 'react';
import { View, Text, Pressable } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import styles from './styles'


const HomeSearch = (props) => {

  const navigation = useNavigation();

  const goToSearch = () => {
    navigation.navigate('DestinationSearch')

  }

  return (
    <View>
      {/* Input Box */}
      <Pressable onPress={goToSearch} style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
            <AntDesign styles={styles.antClockcircles} name={'clockcircle'} size={16} color={'#535353'}   />
            <Text>Now</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </Pressable>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'clockcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub?</Text>
      </View>
     
     {/* Home destination */}
     <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Home?</Text>
      </View>
      
    </View>
  );

   
}

export default HomeSearch;
