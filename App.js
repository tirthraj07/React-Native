import { View, Text, SafeAreaView, FlatList, StyleSheet, Platform} from "react-native";
import pokemonList from "./data.json";

export default function App(){

  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:"#f5f5f5"}}>
      <FlatList
        data={pokemonList}
        renderItem={({item})=>{
          console.log(item.id)
          return(
          <View key={item.id} style={style.boxContainer}>
            <Text style={style.pokemonName}>{item.name}</Text> 
            <Text style={[style.pokemonType, {
              backgroundColor: item.type.toLowerCase() == "fire"?"red":item.type.toLowerCase() == "water" ? "blue" : item.type.toLowerCase() == "grass"?"green":"yellow"
            }]}>{item.type}</Text>
          </View>
          )
        }}  

      />
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  boxContainer:{
    borderWidth:1,
    marginBottom: 20,
    gap:3,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"white",
    width:"60%",
    margin:"auto",
    padding: 20,
    borderRadius: 20,

    ...Platform.select({
      "android":{
        elevation: 10
      },
      "ios":{
        shadowColor:"black",
        shadowRadius:10,
        shadowOpacity:0.5 
      } 
    })
  },
  pokemonName:{
    textAlign:"center",
    fontWeight: 700,
    fontSize: 20
  },
  pokemonType: {
    borderWidth: 2,
    width: 100,
    textAlign:"center",
    fontSize: 20,
    borderRadius:20,
    margin:10
  }



})