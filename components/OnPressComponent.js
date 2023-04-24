import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const OnPressComponent = () => {
    const [timesPressed, setTimesPressed] = React.useState(0);

    let textLog = "";
    if (timesPressed > 1) {
        textLog = timesPressed + " times pressed";
    } else if (timesPressed > 0) {
        textLog = "once pressed";
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => {
                setTimesPressed((current) => current + 1)
            }}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'
                },
                styles.wrapperCustom,
            ]}>
                {({ pressed }) => (
                    <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
                )}
            </Pressable>
            <View style={styles.logBox}>
                <Text testID="pressable_press_console" style={styles.text}>{textLog}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
    },
});

export default OnPressComponent;
