import { View, Text, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App(){

  console.log(`Window Width = ${windowWidth} AND Window Height = ${windowHeight}`)

  return (
    <View style={style.container}>
        
        <View style={style.boxContainer}>
          <View style={style.boxContainerBg}></View>
          <Text style={style.boxContainerText}>
            Hello
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
    justifyContent: "center",
    alignItems: "center"
  },
  boxContainer:{
    width: windowWidth > 500 ? "30%":"60%",
    height: windowHeight > 800 ? "30%":"50%",
    borderWidth: 5,
    borderColor: 'blue',
    justifyContent: "center",
    alignItems:"center",
    position:"relative",
    isolation:"isolate" 
  },
  boxContainerBg:{ 
    position:"absolute",
    width:"100%",
    height:"100%",
    backgroundColor:"blue",
    opacity:0.3,
    zIndex: -1
  },
  boxContainerText:{
    textAlign:"center",
    fontSize: windowWidth > 500 ? 50: 24,
    fontWeight: 600
  }
})