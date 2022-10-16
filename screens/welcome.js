import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.tileWrapper}>
                <Text style={styles.title}>Welcome to the app!</Text>
                <Text style={styles.subTitle}>Login or Signup to continue.</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={globalStyles.button}>
                    <Text style={globalStyles.buttonText} >Login</Text>
                </TouchableOpacity>
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
    },
    tileWrapper: {
        marginTop: 100,
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#0b1f3d",
    },
    subTitle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#5d6775",
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: "center",
        margin: 50,
    }
})