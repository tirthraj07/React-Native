import { View, Text, SafeAreaView, FlatList, StyleSheet, Platform} from "react-native";
import pokemonList from "./data.json";

export default function App(){

  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:"#f5f5f5"}}>
      <FlatList
        data={pokemonList}
        renderItem={({item})=>{
          return(
          <View key={item.id} style={style.boxContainer}>
            <Text style={style.pokemonName}>{item.name}</Text> 
            <Text style={[style.pokemonType, {
              backgroundColor: item.type.toLowerCase() == "fire"?"red":item.type.toLowerCase() == "water" ? "blue" : item.type.toLowerCase() == "grass"?"green":"yellow"
            }]}>{item.type}</Text>
          </View>
          )
        }}  
        
        ItemSeparatorComponent={
          <View style={{height: 20}}>
          </View>
        }

        ListEmptyComponent={
          <Text style={{textAlign:"center"}}>
            No items found
          </Text>
        }

        ListHeaderComponent={
          <Text style={{textAlign: "center", fontSize: 30, marginBottom: 10}}>
            List of Pokemon
          </Text>
        }

        ListFooterComponent={
          <Text style={{textAlign: "center", fontSize: 30, marginTop: 10}}>
            End of List
          </Text>
        }

      />
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  boxContainer:{
    borderWidth:1,
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