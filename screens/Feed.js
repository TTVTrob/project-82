import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import StoryCard from './StoryCard';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};
var stories = require('../temp.json');
export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  renderItem = ({ item: story }) => {
    return <StoryCard story={story} />;
  };
  keyExtractor = (item, index) => index.toString();

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: '#040720' }}>
          <SafeAreaView
            style={{
              marginTop:
                Platform.OS === 'android'
                  ? StatusBar.currentHeight
                  : RFValue(25),
            }}
          />
          <View style={{ flex: 0.07, flexDirection: 'row' }}>
            <View
              style={{
                flex: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo.png')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}></Image>
            </View>
            <View style={{ flex: 0.7, justifyContent: 'center' }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: RFValue(28),
                  fontFamily: 'Bubblegum-Sans',
                }}>
                Storytelling App
              </Text>
            </View>
          </View>
          <View style={{ flex: 0.75 }}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={stories}
              renderItem={this.renderItem}
            />
          </View>
        </View>
      );
    }
  }
}
