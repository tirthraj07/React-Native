import { View, Text, SafeAreaView, TextInput, StatusBar} from "react-native"; 
import { useState } from "react";


export default function App(){

  const [name, setName] = useState("");

  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:"#f5f5f5", paddingTop: StatusBar.currentHeight, paddingLeft: 5}}>

      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
        style={{
          backgroundColor : "white",
          fontSize: 15,
          borderWidth: 1,
          marginBottom: 10
        }}
    />

    <View>
      <Text style={{fontSize: 30}}>
        Hello {name}
      </Text>
    </View>

    </SafeAreaView>
  )
}