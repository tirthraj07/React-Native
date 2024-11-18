import { View, Text, StyleSheet } from "react-native";

export default function App(){

  return (
    <View style={style.container}>
        
      <View style={style.box}>
        <Text style={style.boxText}>
          Hello World
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
    backgroundColor: 'pink',
    borderColor:'black',
    borderWidth:1,
    borderRadius:20
  },
  
  boxText:{
    fontSize:30,
    textDecorationLine:"underline",
    fontWeight:"700",
    letterSpacing:5,
    userSelect:"text"
  }

})