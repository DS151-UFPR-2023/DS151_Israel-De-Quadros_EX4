import { StyleSheet, View, Text, TextInput } from "react-native";
import React, {useState} from "react";

export default function SearchBar(){
    const [filme, setFilme] = useState(null)

    return (
        //conteudo do formulario
        <View>
            <Text>Nota 1</Text>
            <TextInput placeholder="Digite aqui!" value={filme}></TextInput>
        </View>
    );
}