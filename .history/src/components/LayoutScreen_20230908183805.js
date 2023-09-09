import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutScreen = () => {
    return (
        <View style={styles.root}>
            <View ></View>
            <View style={styles.elm3}></View>
            <View style={styles.elm3}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
       flex:1,
        borderWidth: 1,
    }
});
export default LayoutScreen;