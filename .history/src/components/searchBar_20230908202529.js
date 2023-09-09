import { StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";

export default function SearchBar(){
    return (
        //conteudo do formulario
        <View>
            <Text>Nota 1</Text>
            <TextInput placeholder="Digite aqui!" value={filme} onPress={() => searchTmdb(filme)}></TextInput>
        </View>
    );
}