import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Estilos from '../estilos/Estilos';

class OlaMundo extends React.Component {
    render() {
        return (
            <View>
                <Text>Olá</Text>
                <Text style={Estilos.text}>{this.props.nome}</Text>
            </View>
        )
    }
}
export default OlaMundo;

const estilos = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'blue',
        padding: 10,
       
    }
});
   