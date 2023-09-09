import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from "./components/searchBar";
import tmdb from "./api/tmdb.js";

function HomeScreen({ navigation }) {
    return (
        <View style={style.mainView}>
            <SearchBar/>
            <Text>Home Screen</Text>
            <Button title="Ir para Form!"
                onPress={() => navigation.navigate('Form')}
            />
            <Button title="Ir para Galeria ExercicioAula05!"
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

async function searchTmdb(query){
    const response = await tmdb.get('/search/movie',{
        params:{
            query,
            include_adult : false,
        }
    })

    console.log(response);
}

searchTmdb('how');