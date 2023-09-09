import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, {useState} from "react";
import tmdb from "../api/tmdb.js";

export default function SearchBar(){
    const [filme, setFilme] = useState(null)
    const [reposta, setResposta] = useState(null)
    
    async function searchTmdb(filme){
        let url = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false&language=en-US&page=1`;

        const response = await tmdb.get(url);
        
        console.log(filme);
        console.log("******************************************************************************************");
        console.log(response);
        console.log("******************************************************************************************");
    }

    return (
        //conteudo do formulario
        <View>
            <TextInput placeholder="Digite aqui!" value={filme}></TextInput>
            <Button onPress={() => searchTmdb(filme)} title="Pesquisar Filme"></Button>
        </View>
    );
}