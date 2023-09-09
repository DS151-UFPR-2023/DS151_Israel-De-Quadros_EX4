import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import ResultMedia from "../result";

export default function Form() {

    const [media1, setmedia1] = useState(null)
    const [media2, setmedia2] = useState(null)
    const [messagemedia, setMessagemedia] = useState("preencha os dados")
    const [media, setmedia] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function validationmedia() {
        if (media2 != null && media1 != null) {
            mediaCalculator()
            setMessagemedia("seu media eh igual: " +  media + "\nTem que clicar duas vezes\npra atualizar a mensagem hehe")
            setTextButton("Calcular Novamente")
            return
        }
        setmedia(null)
        setTextButton("Calcular")
        setMessagemedia("preencha os dados")
    }

    function mediaCalculator() {
        setMessagemedia("seu media eh igual: " + media)
        return setmedia(((parseFloat(media1) + parseFloat(media2))/2))
    }


    return (
        //conteudo do formulario
        <View>
            <View>
                <Text>Nota 1</Text>
                <TextInput onChangeText={setmedia1} value={media1} placeholder="Ex: 70" keyboardType="numeric"></TextInput>
                <Text>Nota 2</Text>
                <TextInput onChangeText={setmedia2} value={media2}  placeholder="Ex: 10" keyboardType="numeric"></TextInput>
                <Button onPress={() => validationmedia()} title="Calcular Média" />
                <ResultMedia messageResultmedia={messagemedia} resultmedia={media}></ResultMedia>
            </View>
        </View>
    );
}