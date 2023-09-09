import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, {useState} from "react";

export default function SearchBar(){
    const [filme, setFilme] = useState(null)

    async function searchTmdb(query){
        const response = await tmdb.get('/search/movie',{
            params:{
                query,
                include_adult : false,
            }
        })
    
        console.log(response);
    }
    
    //searchTmdb('how');

    return (
        //conteudo do formulario
        <View>
            <Text>Nota 1</Text>
            <TextInput placeholder="Digite aqui!" value={filme}></TextInput>
            <Button onPress={searchTmdb(filme)}>Pesquisar Filme</Button>
        </View>
    );
}