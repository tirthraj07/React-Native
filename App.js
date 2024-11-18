import { View, Image, Text, ImageBackground } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");
const splashIcon = require("./assets/splash-icon.png");

export default function App(){
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <ImageBackground source={splashIcon} style={{width:100, height:100}}>
        <Text>Image Background</Text>
      </ImageBackground>

      <Text>Below is an example of static images</Text>
      <Image 
        source={logoImg} 
        style={{width: 300, height: 300}}
      />
      
      <Text>Below is an example of network images</Text>
      <Image 
        source={{uri: "https://picsum.photos/200"}} 
        style={{width: 300, height: 300}}
      />



    </View>
  )
}
