import React from 'react';
import { View } from 'react-native';
    class DimensoesFixas extends React.Component {
    render() {
        return (
            <View style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
                <View style={{flexGrow: 1, backgroundColor: 'powderblue'}} />
                <View style={{flexGrow: 2, backgroundColor: 'skyblue'}} />
                <View style={{flexGrow: 1,backgroundColor: 'steelblue'}} />
            </View>
           
        );
    }
};
export default DimensoesFixas;
