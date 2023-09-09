import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={style.mainView}>
            <Text>Home Screen</Text>
            <Button title="Ir para Form!"
                onPress={() => navigation.navigate('Form')}
            />
            <Button title="Ir para Galeria!"
                onPress={() => navigation.navigate('ExercicioAula05')}
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