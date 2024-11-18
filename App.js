import { View, Button } from "react-native";

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

      {/* You can use button component like follows */}
      <Button title="Press Me Senpai"/>

      {/* Similar to onClick in React, you can use onPress */}
      <Button title="Press Me Harder" onPress={()=>{console.log("Senpai pressed me harder")}}/>

      <Button title="Press Me Harderrr" onPress={handlePress}/>

      {/* You can also style it */}
      <Button title="Press Me in the moonlight Senpai" color="midnightblue"/>


    </View>
  )
}
