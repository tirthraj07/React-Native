import { useEffect } from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function App(){
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  useEffect(()=>{
    console.log(`Window Width = ${windowWidth} AND Window Height = ${windowHeight}`)
  }, [windowWidth, windowHeight])


  return (
    <View style={style.container}>
        
        <View style={[style.boxContainer,
          {
            width: windowWidth > 500 ? "30%":"60%",
            height: windowHeight > 800 ? "30%":"50%",
          }
        ]}>
          <View style={style.boxContainerBg}></View>
          <Text style={[style.boxContainerText,
            {
              fontSize: windowWidth > 500 ? 50: 24,
            }
          ]}>
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
    fontWeight: 600
  }
})