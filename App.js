import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OlaMundo from './componentes/OlaMundo';
import DimensoesFixas from './componentes/DimensoesFixas';


export default function App() {
  return (
    <View style={styles.container}>
      <DimensoesFixas />
      <OlaMundo nome='Paulo' />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
