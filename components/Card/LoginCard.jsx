import { View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import * as React from "react";
import { Button } from "@rneui/base";
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";



export default function LoginCard(){

    const [focusState, setFocusState] = useState({});

    const handleFocus = (inputName) => {
        setFocusState((prev) => ({ ...prev, [inputName]: true }));
    };

    const handleBlur = (inputName) => {
        setFocusState((prev) => ({ ...prev, [inputName]: false }));
    };

    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS == "ios" ? 100: 0} style={styles.container}>
            <Text style={styles.titleText}>Login Credentials</Text>
            
            <Text style={styles.labelText}>Email</Text>
            <TextInput 
                placeholder="example@domain.com" 
                placeholderTextColor="grey"  

                style={[styles.inputText, {borderWidth: focusState.email ? 2 : 1, opacity: focusState.email ? 1:0.8}]} 
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}

                keyboardType="email-address"

                autoCapitalize="none"
                autoCorrect={false}
            />


            <Text style={styles.labelText}>Password</Text>
            <TextInput 
                placeholder="Enter password here" 
                placeholderTextColor="grey"  

                style={[styles.inputText, {borderWidth: focusState.password ? 2 : 1, opacity: focusState.password ? 1:0.8}]} 
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}

                keyboardType="default"

                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Button
                type="outline"
                buttonStyle={{
                    width: 150,
                    borderColor: "grey",
                    borderRadius: 20,
                    color: "white"
                }}
                containerStyle={{ margin: 5 }}
                disabledStyle={{
                    borderWidth: 2,
                    borderColor: "#00F"
                }}
                disabledTitleStyle={{ color: "#00F" }}
                linearGradientProps={null}
                iconContainerStyle={{ background: "#000" }}
                loadingProps={{ animating: true }}
                loadingStyle={{}}
                onPress={() => console.log("button clicked")}
                title="Login"
                titleProps={{}}
                titleStyle={{ marginHorizontal: 5, color: "white" }}
            />
        </KeyboardAvoidingView>
    )
}



const styles = StyleSheet.create({
    container : {
        minWidth: "90%",
        borderWidth:2,
        borderColor: "white",
        borderRadius: 20 ,padding: 20,
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection: "column",
        gap:15
    },
    titleText: {
        color:"white",
        fontWeight: "bold",
        fontSize: 20
    },
    labelText: {
        color:"white", 
        fontWeight: "medium", 
        fontSize: 15, 
        alignSelf:"flex-start"
    },
    inputText: {
        borderWidth:1, 
        borderColor: "white", 
        width:"100%", 
        borderRadius: 10, 
        color: "white", 
        padding: 10
    }
})