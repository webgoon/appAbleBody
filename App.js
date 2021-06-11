/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import { StatusBar, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
//import { withAuthenticator } from 'aws-amplify-react-native';

import Router from './src/navigation/Root';


 
navigator.geolocation = require('@react-native-community/geolocation');

/* import Amplify, { Auth } from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)  */

  const App = () => {
  
    const androidPermissions = async() => {

      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Able Body Needs Your Location Permission",
            message:
              "Able Body App needs access to your location " +
              "so you can take awesome rides.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the location");
        } else {
          console.log("Location permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
      
    }

    useEffect(() => {
      
      if(Platform.OS === 'android') {
        androidPermissions();
      }else{
        // IOS
        Geolocation.requestAuthorization();

      }
      
    }, [])



   return (
     <>
       <StatusBar barStyle="dark-content" />
        {/* <HomeScreen /> */}
        {/* <DestinationSearch /> */}
        {/*  <SearchResults /> */}
        <Router />
     </>
   );
  };
 


//export default withAuthenticator(App);
export default App;
