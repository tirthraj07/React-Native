import { useState } from "react";
import { View,  Text, Modal, Button } from "react-native";


export default function App(){
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
      }}>

      <Button title="Open Modal" color={"midnightblue"} onPress={()=>setIsModalVisible(true)} />

      <Modal 
        transparent
        visible={isModalVisible} 
        style={{alignSelf:"center"}}
        onRequestClose={()=>setIsModalVisible(false)}       // for Android -> back button and IOS/Android -> Gestures
        animationType="fade"    // slide
        // presentationStyle="fullScreen"  // Note: fullScreen and transparent are not supported together
        // presentationStyle="pageSheet"  // Affects only IOS
        >
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: 300, height:300, backgroundColor:'white', borderRadius:30}}>
            <Text style={{textAlign:"center", margin:"auto", fontSize:30}}>
              Modal Content!
            </Text>
            <Button title="Close" color={"darkblue"}  onPress={()=>setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    


    </View>
  )
}
