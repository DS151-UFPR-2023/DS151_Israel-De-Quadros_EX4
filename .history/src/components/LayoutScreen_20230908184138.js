import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LayoutScreen = () => {
    return (
        <View style={styles.root}>
            <View style={styles.elm1}></View>
            <View style={styles.elm2}></View>
            <View style={styles.elm3}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        width: 100,
        height: 100,
        backgroundColor: '#00FA9A',
    }, 
    elm1 : {
        flex:2,
        borderWidth: 1,
        backgroundColor: '#DC143C',
    },
    elm2 : {
        flex:1,
        borderWidth: 1,
        backgroundColor: '#00FF00',
    },
    elm3 : {
        flex:3,
        borderWidth: 1,
        backgroundColor: '#48D1CC',
    },
});
export default LayoutScreen;