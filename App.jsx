import { View, Text, SafeAreaView, TextInput, StatusBar, StyleSheet, Switch, Image} from "react-native"; 
import { useState, useEffect } from "react";

import Waves from "./assets/waves.svg";
import Header  from "./components/Header/Header"
import LoginCard from "./components/Card/LoginCard";

export default function App(){

  // https://reactnativeelements.com/docs/components/header

  return (    

    <SafeAreaView style={[styles.container]}>
      {/* <StatusBar 
        hidden={false} 
        barStyle={"default"}
        backgroundColor={"#121212"}
      /> */}
      <Header title="My App" /> 
      
      <View style={{flex: 1, borderWidth: 1, justifyContent: "center", alignItems: "center", position:"relative", flexDirection:"row", isolation:"isolate"}}>
        
        <LoginCard />

        <View style={{ alignSelf: "flex-end", width: "100%", height: "70%", position: "absolute", zIndex: -1 }}>
          <Waves width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
        </View>
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#121212"
  }

})
