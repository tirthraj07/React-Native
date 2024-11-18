import { View, Text, ScrollView, Image } from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App(){
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Scroll View is bounded by the height of the parent element, which in this case is the View Component which takes the entire screen */}
      <ScrollView>
        <Image source={logoImg} style={{width:300, height:300}}/>

          {Array.from({ length: 100 }, (_, index) => (
            <Text key={index} style={{ fontSize: 16, marginVertical: 4 }}>
              Hello {index + 1}
            </Text>
          ))}

        <Image source={logoImg} style={{width:300, height:300}}/> 
      </ScrollView>
    </View>
  )
}
