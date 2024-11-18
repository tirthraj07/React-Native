import { useState } from "react";
import { View, Button, ActivityIndicator } from "react-native";


export default function App(){
  const [isActivityIndicatorVisible, setIsActivityIndicatorVisible] = useState(true)

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
      }}>

      <ActivityIndicator />     

      <ActivityIndicator size={"large"} />    
      {/* Default Size = small */}
      
      <ActivityIndicator size={"large"} color={"midnightblue"}/>

      <ActivityIndicator size={"large"} color={"midnightblue"} animating={isActivityIndicatorVisible}/>


      <Button title={isActivityIndicatorVisible?"Turn Off Activity Indicator":"Turn On Activity Indicator"} color={"midnightblue"} onPress={()=>setIsActivityIndicatorVisible(!isActivityIndicatorVisible)} />

    </View>
  )
}
