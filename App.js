import { View, Image, Text, Pressable } from "react-native";

const logoImage = require('./assets/adaptive-icon.png');

export default function App(){

  const handlePress = ()=>{
    console.log("Senpai pressed me harderrr");
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
    }}>

    <Pressable onPress={()=>{console.log("Bro pressed me")}}>
      <Text>Press Me Senpaiiii</Text>
    </Pressable>

    <Pressable onPress={()=>{console.log("Image Pressed")}}>
      <Image source={logoImage} style={{width:300, height:300}} />
    </Pressable>

    {/* 
    
      Pressable:

      Pressable is a wrapper component that detects various stages of press
      interactions on its defined children

      You can create a custom button using Pressable

      - onPressIn : is called when a press is activated
      - onLongPress : is trigger when a press is held for longer than 500 ms
      - onPressOut: is called when the press gesture is deactivated
      
      Refer: https://youtu.be/a-O0mtim9LY?si=3g1MUeCITCH8nUor&t=200

    */}

    </View>
  )
}
