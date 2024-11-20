import { View, Text, Image, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import * as React from "react";
import { Button } from "@rneui/base";



export default function LoginCard(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})

    const [focusState, setFocusState] = useState({});

    const handleFocus = (inputName) => {
        setFocusState((prev) => ({ ...prev, [inputName]: true }));
    };

    const handleBlur = (inputName) => {
        setFocusState((prev) => ({ ...prev, [inputName]: false }));
    };

    const validateForm = () => {
        const err = {}

        if(String(email).trim() === "") err.email = "Please Enter Email"

        if(String(password).trim() === "") err.password = "Please Enter Password"

        // You can also do regex checks for client-side validation

        setErrors(err)
        
        return Object.keys(err).length === 0     // Return true is there are no errors. We will use this during handleSubmit
    }   


    const handleSubmit = () => {
        if(validateForm()){
            console.log("Submitted", email, " : ", password)
            setEmail("")
            setPassword("")
            setErrors({})
        }
    }

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
                
                onChangeText={setEmail}
                value={email}

                keyboardType="email-address"

                autoCapitalize="none"
                autoCorrect={false}
            />

            {
                errors.email && <Text style={styles.errorText}>{errors.email}</Text>
            }


            <Text style={styles.labelText}>Password</Text>
            <TextInput 
                placeholder="Enter password here" 
                placeholderTextColor="grey"  

                style={[styles.inputText, {borderWidth: focusState.password ? 2 : 1, opacity: focusState.password ? 1:0.8}]} 
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}

                onChangeText={setPassword}
                value={password}

                keyboardType="default"

                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />

            {
                errors.password && <Text style={styles.errorText}>{errors.password}</Text>
            }

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
                onPress={handleSubmit}
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
    },
    errorText: {
        color: "red",
        fontWeight: "semibold"
    }
})