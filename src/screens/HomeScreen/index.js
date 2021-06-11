import React from 'react'
import { View, Dimensions } from 'react-native'
import HomeMap from '../../components/HomeMap'
import CovidMessage from '../../components/CovidMessage'
import HomeSearch from '../../components/HomeSearch'

//import Icon from 'react-native-vector-icons/FontAwesome';
//<Icon name="rocket" size={30} />

const HomeScreen = (props) => {
  return (
    <View>
    
      {/* Map */}
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap />
      </View>
     
      {/* Covid Message */}
      <CovidMessage />

      {/* Search Message */}
      <HomeSearch />

    </View>
  )
}

export default HomeScreen;
