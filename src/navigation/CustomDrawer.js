import React from "react";
import { View, Text, Pressable } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>

      <View style={{ backgroundColor: "#212121", padding: 15}}>
        {/* Title Row */}
        <View style={{flex: 1, flexDirection: "row", marginLeft: 15, marginBottom: 15, justifyContent: 'center'}}>
          <Text style={{ fontSize: 20, color: "white", padding: 5, textDecorationStyle: 'solid', }}>Able Body Options</Text>
        </View>
        

        {/* User Row */}
        <View style={{ 
            flexDirection: "row"
        }}>

          <View style={{
            backgroundColor: "white",
            width: 50,
            height: 50,
            borderRadius: 25,
           
            marginRight: 15,
          }} />

          <View  style={{}}>
            <Text  style={{  color: "#dddddd", fontSize: 14}}>Your Name</Text>
            <Text  style={{  color: "#dddddd", fontSize: 24,}}>5.00 *</Text>
          </View>

        </View>
        
        {/* Messages Row */}
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          paddingVertical: 5,
          marginVertical: 10,
        }}>
          <Pressable onPress={() => {console.warn('Do More');}}>
            <Text style={{ fontSize: 12, color: "#dddddd", padding: 5 }}>Do More Here</Text>
          </Pressable>
        </View>

        {/* Do More */}
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          paddingVertical: 5,
          marginVertical: 5,
        }}>
        <Pressable onPress={() => {console.warn('Make Money driving')}}>
          <Text style={{ fontSize: 12, color: "white", padding: 5 }}>Messages</Text>
        </Pressable>
        </View>
        

        {/* Make Money */}
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
          paddingVertical: 5,
          marginVertical: 5,
        }}>
        <Pressable onPress={() => {console.warn('Now You Can Make Money Driving')}}>
          <Text style={{ fontSize: 12, color: "white", padding: 5 }}>Make Money Driving</Text>
        </Pressable>
        </View>

      </View>


      


      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer;
