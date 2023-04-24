import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import OnPressComponent from "./OnPressComponent";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function FullBGImageComponent() {
    return (
        <>
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
            <Text style={styles.text}>ivandjoh</Text>
        </ImageBackground>
        </View>
            <OnPressComponent />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",
        lineHeight: 84
    },
});
