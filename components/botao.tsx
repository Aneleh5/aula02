import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const botao = ({string: label, string: corFundo, string: onPress }) => {

    const botaoStyle = {
        backgroudColor: corFundo,
        padding: 10,
        borderRadius: 5,
    }

    return (
        <TouchableOpacity onPress={onPress} style={botaoStyle}>
            <Text>{label}</Text>
        </TouchableOpacity>
            );
};

export default botao;