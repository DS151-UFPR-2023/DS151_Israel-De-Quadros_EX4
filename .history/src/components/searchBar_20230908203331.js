import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import React, {useState} from "react";

export default function SearchBar(){
    const [filme, setFilme] = useState(null)

     function searchTmdb(query){
        const response = await tmdb.get('/search/movie',{
            params:{
                query,
                include_adult : false,
            }
        })
    
        console.log(response);
    }

    return (
        //conteudo do formulario
        <View>
            <Text>Nota 1</Text>
            <TextInput placeholder="Digite aqui!" value={filme} onPress={this.searchTmdb(filme)}></TextInput>
            <Button>Pesquisar Filme</Button>
        </View>
    );
}