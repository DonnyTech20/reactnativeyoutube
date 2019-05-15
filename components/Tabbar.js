import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';




export default class Tabbar extends Component {
  render() {
    return (
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.container}>
            <Icon name='home' size={25} />
            <Text style={styles.mytext}>Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
        backgroundColor: '#fff',
        height: 60,
        borderColor: '#e5e5e5',
        borderTopWidth: 2,
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    constainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    mytext: {
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 2,
        color: 'rgb(50,50,50)',
    },
});
