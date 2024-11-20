import * as React from "react";
import { Header, Icon } from "@rneui/base";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity
  } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default ({title}) => {
  return (
    <Header
      barStyle="default"
      centerComponent={{
        text: title,
        style: { color: "#fff", fontSize: 25 , fontWeight: "bold", paddingTop: 10}
      }}
      containerStyle={{ width: "100%", backgroundColor: "#1E1E1E", paddingTop:30}}
      leftComponent={
        <View style={{paddingTop: 10}}>
            <TouchableOpacity onPress={()=>console.log("pressed me!!")}>
              <Icon name="menu" color="white" size={30}/>
            </TouchableOpacity>
          </View>
      }
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement="center"
      rightComponent={
        <View style={{paddingTop: 10}}>
            <TouchableOpacity onPress={()=>console.log("pressed me!!")}>
              <Icon name="home" color="white" size={30}/>
            </TouchableOpacity>
          </View>
      }
      rightContainerStyle={{}}
      statusBarProps={{translucent: true, backgroundColor: "#1E1E1E"}}
    />
  );
}


const styles = StyleSheet.create({

})