import { View, Text, StyleSheet } from "react-native";

export default function App(){

  return (
    <View style={style.container}>
        
      {/*
          Note: Style Inheritance is not possible in different elements
          But Style Inheritance is possible in Text to Text Subtrees

          For example, the View contains styles
              fontSize:50,
              color: 'blue'
          
          But they aren't being inherited by the child Text Component

          But the BlueText Text Component inherited the Weight from its parent Text Component

      */}

      <View style={style.box}>         
        <Text style={style.boxText}>
          Hello World! I am  <Text style={style.blueTextCol}>in blue </Text>
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
    backgroundColor: 'pink',
    alignItems:'center',
    borderColor:'black',
    borderWidth:1,
    borderRadius:20,
    fontSize:50,
    color: 'blue'
  },

  boxText:{
    fontWeight:900
  },

  blueTextCol: {
    color: "blue"
  }

})