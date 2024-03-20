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

        <View style={{marginTop: 30}}>
          <Text
            style={[
              styles.grayColor,
              styles.commonFontSize,
              {marginTop: 5, lineHeight: 25, letterSpacing: 1},
            ]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </Text>
        </View>

        <View style={{marginTop: 30}}>
          <View style={[styles.cardContainer]}>
            <View>
              <Text style={[styles.grayColor, styles.textCenter]}>Repos</Text>
              <Text
                style={[
                  styles.blackColor,
                  styles.textCenter,
                  {fontSize: 20, fontWeight: '600'},
                ]}>
                8
              </Text>
            </View>
            <View>
              <Text style={[styles.grayColor, styles.textCenter]}>
                Followers
              </Text>
              <Text
                style={[
                  styles.blackColor,
                  styles.textCenter,
                  {fontSize: 20, fontWeight: '600'},
                ]}>
                3938
              </Text>
            </View>
            <View>
              <Text style={[styles.grayColor, styles.textCenter]}>
                Following
              </Text>
              <Text
                style={[
                  styles.blackColor,
                  styles.textCenter,
                  {fontSize: 20, fontWeight: '600'},
                ]}>
                9
              </Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <View style={[styles.linkItem]}>
            <View style={[styles.iconWrapper]}>
              <Image source={require('../assets/images/003-pin.png')} />
            </View>
            <Text style={[styles.grayColor, {marginLeft: 20, fontSize: 16}]}>
              San Francisco
            </Text>
          </View>
          <View style={[styles.linkItem, {marginTop: 15}]}>
            <View style={[styles.iconWrapper]}>
              <Image source={require('../assets/images/002-url.png')} />
            </View>
            <Text style={[styles.grayColor, {marginLeft: 20, fontSize: 16}]}>
              https://github.blog
            </Text>
          </View>
          <View style={[styles.linkItem, {marginTop: 15}]}>
            <View style={[styles.iconWrapper]}>
              <Image
                source={require('../assets/images/004-twitter.png')}
                style={{opacity: 0.5}}
              />
            </View>
            <Text style={[{color: 'lightgray', marginLeft: 20, fontSize: 16}]}>
              Not Available
            </Text>
          </View>
          <View style={[styles.linkItem, {marginTop: 15}]}>
            <View style={[styles.iconWrapper]}>
              <Image source={require('../assets/images/001-building.png')} />
            </View>
            <Text style={[styles.grayColor, {marginLeft: 20, fontSize: 16}]}>
              @github
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
