import React, { useState, useEffect } from 'react'
import { TextInput, View, Text, SafeAreaView } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PlaceRow from './PlaceRow';

//Static Variables
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
      console.log('checkNavigation is called');
      if (originPlace && destinationPlace) {
        console.log('origin and destination set')
        navigation.navigate('SearchResults', {
          originPlace,
          destinationPlace,
        })
      }
    }
    

    useEffect(() => {
      console.log('Use Effect Called!');
       
      
        console.warn("Set Pickup And Destination...")
        checkNavigation();
   

    }, [originPlace, destinationPlace]);

    return (
      <SafeAreaView>
        <View style={styles.tripContainer}>

          <Text style={styles.destinationInformationText}>Plan For Your Ride..</Text>

          
          <GooglePlacesAutocomplete
            placeholder='From Where?'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setOriginPlace( {data, details})

              console.log(data, details);
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            currentLocation={true}
            currentLocationLabel='Current Location'
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


          <GooglePlacesAutocomplete
            placeholder='Where To?'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setDestinationPlace( {data, details})

              console.log(data, details);
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            styles={{
              textInput: styles.textInput,
              container: styles.autocompleteContainer_bottom,
              listView: styles.listView_bottom,
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

export default DestinationSearch;
