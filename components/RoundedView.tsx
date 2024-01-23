import React from "react";
import { View } from "react-native";


export default function RoundedView({ children }) {
    return (
        <View style={{ backgroundColor: "#000", flex: 1 }}>
            <View style={{ borderRadius: 20, overflow: "hidden", flex: 1, backgroundColor: "#fff" }}>
                {children}
            </View>
        </View>
    )
}