import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, {useState} from "react";
import tmdb from "../api/tmdb.js";

export default function SearchBar(){
    const [filme, setFilme] = useState(null)
    const [reposta, setResposta] = useState(null)

    let url = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false&language=en-US&page=1`;
    
    async function searchTmdb(){
        const response = await tmdb.get(url);
        
        console.log(response);
    }

    return (
        //conteudo do formulario
        <View>
            <TextInput placeholder="Digite aqui!" value={filme}></TextInput>
            <Button onPress={() => searchTmdb()} title="Pesquisar Filmeee"></Button>
        </View>
    );
}