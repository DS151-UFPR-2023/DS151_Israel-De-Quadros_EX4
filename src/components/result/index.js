import { View, Text} from "react-native";
import React, { useState } from "react";

export default function ResultMedia(props) {
    return (
        <View>
            <Text>{props.resultmedia}</Text>
            <Text>{props.messageResultmedia}</Text>
        </View>
    );
}