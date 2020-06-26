import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OlaMundo from './componentes/OlaMundo';
import DimensoesFixas from './componentes/DimensoesFixas';
import ChecaNumero from './componentes/ChecaNumero';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ChecaNumero numero={3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
