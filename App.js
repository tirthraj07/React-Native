import { View } from "react-native";
import Greet from "./components/Greet";

export default function App(){

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'plum',
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
      }}>
        
        <Greet name={"Tirthraj"} />
        <Greet name={"Aditya"} />
        <Greet name={"Bruce Wayne"} />

     </View>
  )
}
