import { View, Text, SafeAreaView, TextInput, StatusBar} from "react-native"; 
import { useState } from "react";


export default function App(){

  const [name, setName] = useState("");
  const [story, setStory] = useState("");

  const [focusState, setFocusState] = useState({ name: false });

  /*
    To avoid creating separate useState hooks for each input, 
    you can use a single state object to manage the focus state of multiple inputs. 
    Here's a more scalable approach
  */

  const handleFocus = (inputName) => {
    setFocusState((prev) => ({ ...prev, [inputName]: true }));
  };

  const handleBlur = (inputName) => {
    setFocusState((prev) => ({ ...prev, [inputName]: false }));
  };

  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:"#f5f5f5", paddingTop: StatusBar.currentHeight, paddingLeft: 5}}>

      <TextInput 
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"

        keyboardAppearance="default"
        keyboardType="default"
        onFocus={() => handleFocus('name')}
        onBlur={() => handleBlur('name')}

        autoCapitalize="none"   // Use this for fields where there might be non-regular english like passwords emails usernames etc
        autoCorrect={false}
        
        style={{
          backgroundColor : "white",
          fontSize: 15,
          borderWidth: focusState.name ? 1 : 0,
          marginBottom: 10
        }}
    />


    <TextInput 
          value={story}
          onChangeText={setStory}
        
          multiline={true}
        
          placeholder="Enter your story"
          keyboardAppearance="default"
          keyboardType="default"
          onFocus={() => handleFocus('multiLineInput')}
          onBlur={() => handleBlur('multiLineInput')}

          autoCapitalize="none"   // Use this for fields where there might be non-regular english like passwords emails usernames etc
          autoCorrect={false}
          
          style={{
            backgroundColor : "white",
            fontSize: 15,
            borderWidth: focusState.multiLineInput ? 1 : 0,
            marginBottom: 10,
            minHeight: 100,
            textAlignVertical: "top"
          }}
      />

    <View>
      <Text style={{fontSize: 30}}>
        I am {String(name).trim()===""?"...":name}
      </Text>
    </View>

    <View style={{marginTop:20}}>
      <Text style={{fontSize:15}}>and this is my story..</Text>
      <Text style={{fontSize: 30}}>
        {String(story).trim()===""?"...":story}
      </Text>
    </View>

    </SafeAreaView>
  )
}