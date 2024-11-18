import { View, Text, StyleSheet } from "react-native";

export default function App(){

  return (
    <View style={style.container}>
        
      {/*  You can combine styles by inserting them into an array.  */}
      {/*  Note: If two styles conflict, the latter (rightmost) gets precedence  */}  
      <View style={[style.box, style.pinkBg]}>
        <Text style={style.boxText}>
          Hello
        </Text>
      </View>
      
      <View style={[style.box, style.lightGreenBg]}>
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
  }

})