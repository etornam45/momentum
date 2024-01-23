import React from "react";
import { StyleSheet, View } from "react-native";

export default function OnboardingImageWrapper({ children }) {
    return (
        <View style={styles.container} >
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})