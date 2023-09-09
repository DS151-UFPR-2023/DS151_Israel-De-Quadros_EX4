import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, {useState} from "react";
import tmdb from "../api/tmdb.js";

export default function SearchBar(){

    const [filme, setFilme] = useState('')
    const [resposta, setResposta] = useState('')
    

    
    async function searchTmdb(){
        let url = `https://api.themoviedb.org/3/search/movie?query=${filme}&include_adult=false&language=en-US&page=1`;

        const response = await tmdb.get(url);

        setResposta(JSON.stringify(resposta));
        
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log(filme);
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log("******************************************************************************************");
        console.log(response);
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    }

    return (
        //conteudo do formulario
        <View>
            <TextInput onChangeText={(filme) => { setFilme(filme) }} placeholder="Digite aqui!" value={filme}></TextInput>
            <Button onPress={() => searchTmdb()} title="Pesquisar Filme"></Button>
            <View>
                <Text>{{resposta.toString()}}</Text>
            </View>
        </View>
    );""
}