import { View, Pressable, Text } from "react-native";

export default function CustomButton({title, handlePress}){
    return (
        <Pressable onPress={handlePress} style={{borderWidth:2, width:"50%", margin:"auto", borderRadius:10, elevation:30, backgroundColor:"white"}}>
            <Text style={{textAlign:"center", fontSize:30}}>
                {title}
            </Text>
        </Pressable>
    )
}
