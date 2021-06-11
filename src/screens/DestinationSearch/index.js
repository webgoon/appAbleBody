import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, SafeAreaView} from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import PlaceRow from './PlaceRow';

import styles from './styles';



{/* https://github.com/react-native-geolocation/react-native-geolocation */}

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


const DestinationSearch = (props) => {

  const [originPlace, setOriginPlace] = React.useState(null);
  const [destinationPlace, setDestinationPlace] = React.useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      // upon navigation we are passing results to next screen
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })
    }
  }
  
  useEffect(() => {

    //console.warn('Use Effect Called!');

    checkNavigation();


  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.tripContainer}>

      <Text style={styles.destinationInformationText}>Plan For This Trip Below..</Text>



        {/* Using Two Google AutoCompletes #1 */}
        <GooglePlacesAutocomplete
          placeholder='Where From?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace( {data, details})
            console.log('1st Google Auto Complete Results:');
            console.log(data, details);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel='Current Location'
          fetchDetails
          styles={{
                  textInput: styles.textInput,
                  container: styles.autocompleteContainer_top,
                  listView: styles.listView_top,
                  separator: styles.separator,
                }}
          fetchDetails
          query={{
            key: 'AIzaSyAHYjKx8H59SV9znlbFOpSHRBsDsOV0lqY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />







        {/* Using Two Google AutoCompletes #2 */}
        <GooglePlacesAutocomplete
          placeholder='Where To?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace( {data, details})
            console.log(data, details);
            
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyle
          currentLocationLabel='Current Location'
          styles={{
                  textInput: styles.textInput,
                  container: styles.autocompleteContainer_bottom,
                  listView: styles.listView_bottom,
                  seperator: styles.seperator
                }}
          fetchDetails
          query={{
            key: 'AIzaSyAHYjKx8H59SV9znlbFOpSHRBsDsOV0lqY',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />



        

        {/* Circle near Origin input */}
        <View style={styles.circle} />
        
        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />


        

      </View>
    </SafeAreaView>
  )
}

export default DestinationSearch
