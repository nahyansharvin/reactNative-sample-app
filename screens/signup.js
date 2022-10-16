import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

export default function Signup() {
    return (
        <View style={styles.container}>
            <View style={styles.tileWrapper}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>Create an account to get started</Text>
            </View>
            <View style={styles.loginFormWrapper}>
                <View style={styles.inputWrapper}>
                    <Text>Username</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Enter your username"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Password</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Enter your password"
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Retype Password</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Retype your password"
                    />
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={globalStyles.button}>
                    <Text style={globalStyles.buttonText} >Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    tileWrapper: {
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#0b1f3d",
    },
    loginFormWrapper: {
        alignItems: "flex-start",
    },
    inputWrapper: {
        margin: 10,
    },
    buttonWrapper: {
        justifyContent: "center",
        margin: 50,
    }
})