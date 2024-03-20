/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class AppStack extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
