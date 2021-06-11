  
import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAHYjKx8H59SV9znlbFOpSHRBsDsOV0lqY';

import styles from './styles';


const RouteMap = ({ origin, destination }) => {
  
  const originLoc =  {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  }


  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };
 

  return (
   
      
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        zoomControlEnabled
        initialRegion={{
          latitude: 33.5012000,
          longitude: -84.3002000,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>

    {/*  The Set up for the route with markers from Point A To Point B */}

    <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="hotpink"
      />

      <Marker
        coordinate={originLoc}
        title={'Origin'}
      />

      <Marker
        coordinate={destinationLoc}
        title={"Destination"}
      />

  
    </MapView>
  );
};

export default RouteMap;
