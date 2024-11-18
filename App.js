import { View, Button, Alert } from "react-native";


export default function App(){

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
      }}>

      {/*  You can specify the title in the alert  */}
      <Button 
        title="Alert #1"  
        onPress={()=>Alert.alert("ERROR!")}
      />

      {/*  You can also specify the message in the alert  */}
      <Button 
        title="Alert #2"  
        onPress={()=>Alert.alert("ERROR!", "This is the alert message")}
      />

      {/*  You can also specify the buttons in the alert box. On Android -> MAX 3 Buttons. No restrictions on IOS  */}
      <Button   
        title="Alert #2"  
        onPress={()=>Alert.alert("ERROR!", "This is the alert message", 
          [
            {
              text:"Cancel",
              onPress: ()=>{console.log("cancel pressed")}
            },
            {
              text:"Okay",
              onPress: ()=>{console.log("Okay pressed")}
            },
            {
              text:"Not Okay",
              onPress: ()=>{console.log("Not Okay pressed")}
            }
          ]
        )}
      />

      {/*

          There are many more APIs. Check docs: https://reactnative.dev/docs/alert

      */}


    </View>
  )
}
