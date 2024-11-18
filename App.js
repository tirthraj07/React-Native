import { View, Text, StyleSheet } from "react-native";

export default function App(){

  return (
    <View style={style.container}>
        
        <View 
        style={
        {
          width: 100,
          height: 100,
          borderWidth: 5,
          borderStyle:'solid',
          borderColor: 'black',
          position: 'relative',
          left: 50,
          top: 20
        }
        }>
          <Text>
            Box 1
          </Text>
        </View>
        <View 
        style={
        {
          width: 100,
          height: 100,
          borderWidth: 5,
          borderStyle:'solid',
          borderColor: 'black',
          position: 'relative',
        }
        }>
          <Text>
            Box 2
          </Text>
        </View>
        <View 
        style={
        {
          width: 100,
          height: 100,
          borderWidth: 5,
          borderStyle:'solid',
          borderColor: 'black',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: [{translateX: '-50%'}, {translateY:'-50%'}]
        }
        
        }>
          <Text>
            Box 3
          </Text>
        </View>

        <View 
        style={
        {
          width: 100,
          height: 100,
          borderWidth: 5,
          borderStyle:'solid',
          borderColor: 'black',
          position: 'relative',
        }
        }>
          <Text>
            Box 4
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
    borderWidth: 10,
    borderColor: 'yellow',
    position:"relative"
  }
})