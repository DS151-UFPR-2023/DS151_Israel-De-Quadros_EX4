import { View, StyleSheet, TextInput, Text } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";


const ColorListConst = () => {
    const [colors, setColors] = useState([]);

    function addColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        setColors(prevColors => [...prevColors, `rgb(${r}, ${g}, ${b})`]);
    }
}

function ColorList() {
    return (
        <View>
            <Button title="Adiciona Cor" onPress={() => addColor()} />
            <FlatList
                data={colors}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                    <View style={{
                        backgroundColor: item,
                        width: 100,
                        height: 100
                    }}></View>} />
        </View>
    )
}

export default ColorList;