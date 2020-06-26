import React from 'react';
import { View } from 'react-native';
    class DimensoesFixas extends React.Component {
    render() {
        return (
                <View style={{width: '100%', height: '100%', flexDirection: 'column', flexWrap: 'wrap'}}>
                    <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'steelblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'steelblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 100, backgroundColor: 'steelblue'}} />
                </View>
        );
    }
};
export default DimensoesFixas;
