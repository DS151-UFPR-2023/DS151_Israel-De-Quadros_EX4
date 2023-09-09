import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, {useState} from "react";
import tmdb from "../api/tmdb.js";

export default function SearchBar(){
    const [filme, setFilme] = useState(null)
    const [reposta, setResposta] = useState(null)

    async function searchTmdb(query){
        const response = await tmdb.get('/search/movie',{
            params:{
                query,
                include_adult : false,
            }
        })
        
        setResposta(response);
        console.log(response);
    }

    return (
        //conteudo do formulario
        <View>
            <TextInput placeholder="Digite aqui!" value={filme}></TextInput>
            <Button onPress={() => searchTmdb(filme)} title="Pesquisar Filme"></Button>
        </View>
    );
}