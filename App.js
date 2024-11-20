import { View, Text, SafeAreaView, TextInput, StatusBar, StyleSheet, Switch} from "react-native"; 
import { useState, useEffect } from "react";


export default function App(){

  const [isDarkMode, setIsDarkMode] = useState(false);

  const preferenceStyle = isDarkMode ? darkMode : lightMode

  return (    

    <SafeAreaView style={[styles.container, preferenceStyle.container]}>
      <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-around", paddingHorizontal: 5, paddingTop: 20}}>
        <Text style={[preferenceStyle.textStyle]}>Dark Mode : </Text>
        <Switch 
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((previousState) => !previousState)}
        />

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 5,
  }

})

const lightMode = StyleSheet.create({
  container: {
    backgroundColor: "f5f5f5f5"
  },
  textStyle:{
    color: "black"
  }
})

const darkMode = StyleSheet.create({
  container: {
    backgroundColor: "#121212"
  },
  textStyle:{
    color: "white"
  }
})