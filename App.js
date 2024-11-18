import { View, Text } from "react-native";

export default function App(){
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
    }}>

      <Text style={{fontSize: 30}}>
        <Text style={{color: "white"}}>Hello</Text> World!
      </Text>
    
    </View>
  )
}
