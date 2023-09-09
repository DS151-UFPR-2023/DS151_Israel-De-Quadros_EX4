import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const LayoutScreen = () => {
    return (
        <View style={styles.root}>
         


            <View style={styles.container}>
                <Image style={styles.image}
                    source={require("../images/download.jpg")} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    elm1: {
        backgroundColor: '#DC143C',
        width: 90,
        height: 90,
        borderWidth: 1,
    },
    elm2: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: '#00FF00',
    },
    elm3: {
        flex: 3,
        borderWidth: 1,
        backgroundColor: '#48D1CC',
    },
});
export default LayoutScreen;