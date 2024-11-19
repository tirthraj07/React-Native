import { View, Text, SafeAreaView, StyleSheet, Platform, Alert } from "react-native";
import CustomButton from './components/CustomButton/CustomButton';


// For small changes, you can use Platform.OS to change the components

// For medium sized changes, you can opt for Platform.select 

// For large sized changes, you can opt for Platform specific extensions like .ios.js and .android.js


export default function App(){

  const handlePress = () => {
    Alert.alert("Alert", "You Pressed a button");
  }

  return (    
    <SafeAreaView style={style.rootContainer}>
      <View style={style.boxContainer}>
        <Text style={{textAlign:"center", fontSize:30}}>
          Hello
        </Text>
        <CustomButton title="Click Me" handlePress={handlePress} />
      </View>



    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  rootContainer:{
    flex: 1,
    backgroundColor: Platform.OS == "android" ? 'lightgrey' : 'plum'
  },
  
  boxContainer : {
    ...Platform.select({
      ios: {  
        padding: 10,
        margin: 30
      },
      android: {
        margin:"auto"
      }
    }),
    width: "70%",
    height: 300,
    borderWidth: 3,
    borderColor: 'black'
  }


})