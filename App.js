import { useState } from "react";
import { View, Button, StatusBar } from "react-native";


export default function App(){
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false)

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
      }}>

      <StatusBar 
        hidden={isStatusBarHidden} 
        barStyle={"dark-content"}        // "default" -> light content on Android and dark content on IOS
        backgroundColor="lightblue"     // only for Android. Background remains transparent for IOS
      />

      <Button title={isStatusBarHidden?"Turn On Status Bar":"Turn Off Status Bar"} color={"midnightblue"} onPress={()=>setIsStatusBarHidden(!isStatusBarHidden)} />

    </View>
  )
}
