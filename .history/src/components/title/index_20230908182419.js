import React from "react"
import { View, Text } from "react-native"
import styles from "../style";

export default function Title() {
    return (
        <View>
            <Text style={styles.boxTitle}>Calcula Média</Text>
        </View>
    );
}