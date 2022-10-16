import React from "react";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    button: {
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2c5ea8",
        padding: 10,
        borderRadius: 50,
        height: 50,
        width: 250,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    textTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#2c5ea8",
    },
    input: {
        fontSize: 18,
        padding: 6,
        height: 40,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: '#777',
    } 
})