import { View, Pressable, Text } from "react-native";

export default function CustomButton({title, handlePress}){
    return (
        <Pressable onPress={handlePress}>
            <Text>
                {title}
            </Text>
        </Pressable>
    )
}
