import React, { useState } from 'react';
import { View, Dimensions} from 'react-native';

import RouteMap from '../../components/RouteMap';

import AbleBodyTypes from '../../components/AbleBodyTypes';

import { useRoute, useNavigation } from '@react-navigation/native';

const SearchResults = (props) => {
 // const typeState = useState(null);

  const route = useRoute();
    
  console.log(route.params);

  const {originPlace, destinationPlace} = route.params

  //const navigation = useNavigation();

  return(
    <View  style={{dispaly: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
          <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      
      
      <View style={{height: 400}}>
        <AbleBodyTypes />
      </View>
      
      
      
    </View>
  )
};

export default SearchResults;
