import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={style.mainView}>
            <Text>Home Screen</Text>
            <Button title="Ir para Galeria!"
                onPress={() => navigation.navigate('Home2')}
            />
            <Button title="Ir para Counter!"
                onPress={() => navigation.navigate('CounterScreen')}
            />
            <Button title="Ir para Form!"
                onPress={() => navigation.navigate('Form')}
            />
            <Button title="Ir para ColorList!"
                onPress={() => navigation.navigate('ColorList')}
            />
            <Button title="Ir para LayoutScreen!"
                onPress={() => navigation.navigate('LayoutScreen')}
            />
            <Button title="Ir para exercicioAula05!"
                onPress={() => navigation.navigate('exercicioAula05')}
            />
        </View>
    )
}

export default HomeScreen;

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})