import { View, Text, SafeAreaView } from "react-native";

// SafeAreaView can be used to display contents according to device space such as rounded corner 
// or camera notches, sensor housing area. It adds padding from tool bar, navigation bar and tab bar.

export default function App(){

  return (    
    <SafeAreaView style={{flex:1, backgroundColor: "plum"}}>
      <View style={{flex:1}}>
        <Text style={{textAlign:"center", fontSize:30}}>
          Hello
        </Text>
      </View>
    </SafeAreaView>
  )
}
