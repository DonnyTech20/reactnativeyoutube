import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './components/Navbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

     <Navbar />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
   
  },
});
