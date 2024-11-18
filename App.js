import { View, Text, StyleSheet } from "react-native";

export default function App(){

  return (
    <View style={style.container}>
        
      {/*
          Note: Shadow Casting are different for IOS and Android
          For IOS, you need to specify: shadowColor, shadowOffset, shadowOpacity, shadowRadius
          For Android: you just need to specify: shadowColor, elevation
      */}

      <View style={[style.box, style.pinkBg, style.iosShadow]}>
        <Text style={style.boxText}>
          Hello
        </Text>
      </View>
      
      <View style={[style.box, style.lightGreenBg, style.androidShadow]}>
        <Text style={style.boxText}>
          World
        </Text>
      </View>

     </View>
  )
}

// You can also create a separate file and export it
const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
    gap:30,
  },
  
  box:{
    width: 300,
    height: 300,
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:1,
    borderRadius:20
  },

  pinkBg: {
    backgroundColor: 'pink'
  },

  lightGreenBg: {
    backgroundColor: 'lightgreen'
  },
  
  boxText:{
    fontSize:30,
    textDecorationLine:"underline",
    fontWeight:"700",
    letterSpacing:5,
    userSelect:"text"
  },

  iosShadow:{
    shadowColor: "#333333",
    shadowOffset:{
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4
  },

  androidShadow: {
    shadowColor: "black",
    elevation: 5
  }

})