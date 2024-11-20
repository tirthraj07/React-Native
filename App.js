import { View, Text, SafeAreaView, StyleSheet, Platform, SectionList} from "react-native"; 
import pokemonList from "./grouped_data.json";

/*
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
*/


export default function App(){


  // The SectionList component has two mandatory props
  // 1. is the sections -> source of information
  // 2. renderItem -> function that returns the JSX to render each item 

  // Note that the source information must have a 'data' array that is used for rendering
   
  return (    
    <SafeAreaView style={{flex: 1, backgroundColor:"#f5f5f5"}}>

      <SectionList 
        sections={pokemonList}
        renderItem={({item})=>{
          // Item is each element in the data array

          return (
            <View style={style.boxContainer}>
              <Text style={style.pokemonName}>{item}</Text> 
            </View>
          )
        }}      

        renderSectionHeader={({section})=>(
          <View style={{justifyContent: 'center', flexDirection:"row"}}>
            <Text style={style.pokemonType}>{section.type}</Text>
          </View>
        )}
      
        ItemSeparatorComponent={()=>(
          <View style={{height: 10}} ></View>
        )}

        SectionSeparatorComponent={()=>(
          <View style={{height: 20}}></View>
        )}

      />

    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  boxContainer:{
    borderWidth:1,
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