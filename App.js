import { View, Text, SafeAreaView, TextInput, StatusBar} from "react-native"; 
import { useState } from "react";


export default function App(){

  const [pin, setPin] = useState();
  const [isPinFocused, setIsPinFocused] = useState(false);

  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:"#f5f5f5", paddingTop: StatusBar.currentHeight, paddingLeft: 5}}>

      <TextInput 
        value={pin}
        onChangeText={setPin}
        placeholder="Enter Pin"
        secureTextEntry         // Makes the text input hidden -> Password
        keyboardAppearance="default"
        keyboardType="numeric"
        onFocus={() => setIsPinFocused(true)} // Use onFocus for when the input is focused
        onBlur={() => setIsPinFocused(false)} // Use onBlur for when the input loses focus

        autoCapitalize="none"   // Use this for fields where there might be non-regular english like passwords emails usernames etc
        autoCorrect={false}

        style={{
          backgroundColor : "white",
          fontSize: 15,
          borderWidth: isPinFocused? 1: 0,
          marginBottom: 10
        }}
    />

    <View>
      <Text style={{fontSize: 30}}>
        Hello {pin}
      </Text>
    </View>

    </SafeAreaView>
  )
}