/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class AppStack extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/images/Oval.png')}
            style={[styles.image]}
          />
          <View style={{marginLeft: 20}}>
            <Text
              style={[styles.blackColor, {fontSize: 20, fontWeight: '600'}]}>
              The Octocat
            </Text>
            <Text style={{color: 'blue'}}>@octocat</Text>
            <Text
              style={[styles.grayColor, styles.commonFontSize, {marginTop: 5}]}>
              Joined 25 Jan 2011
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  blackColor: {
    color: '#000',
  },
  grayColor: {
    color: 'gray',
  },
  image: {
    width: 80,
    height: 80,
  },
  commonFontSize: {
    fontSize: 15,
  },
  cardContainer: {
    backgroundColor: '#f6f8ff',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCenter: {
    textAlign: 'center',
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 20,
    height: 20,
  },
});
