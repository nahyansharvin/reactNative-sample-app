import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.tileWrapper}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.loginFormWrapper}>
                <View style={styles.inputWrapper}>
                    <Text>Username:</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Enter your username"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Password:</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Enter your password"
                    />
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={globalStyles.button}>
                    <Text style={globalStyles.buttonText} >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    tileWrapper: {
        marginTop: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#0b1f3d",
    },
    loginFormWrapper: {
        // backgroundColor: 'coral',
        flex: 1,
        alignItems: "flex-start",
    },
    inputWrapper: {
        margin: 10,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "center",
        margin: 50,
    }
})