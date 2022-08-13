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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};
export default class StoryCard extends Component {
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

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView
            style={{
              marginTop:
                Platform.OS === 'android'
                  ? StatusBar.currentHeight
                  : RFValue(25),
            }}
          />
          <View style={{ margin: 20, height: undefined }}>
            <Image
              source={require('../assets/story_image_1.png')}
              style={{
                resizeMode: 'contain',
                height: RFValue(200),
                alignSelf: 'center',
              }}></Image>
            <View style={{ flexDirection: 'column' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontFamily: 'Bubblegum-Sans',
                }}>
                {this.props.story.title}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'Bubblegum-Sans',
                }}>
                {this.props.story.author}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                  fontFamily: 'Bubblegum-Sans',
                }}>
                {this.props.story.created_on}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: RFValue(5),
                flexDirection: 'row',
              }}>
              <View
                style={{
                  backgroundColor: 'green',
                  width: RFValue(180),
                  height: RFValue(38),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: RFValue(25),
                  borderColor: 'white',
                }}>
                <Text
                  style={{
                    backgroundColor: 'white',
                    margin: RFValue(5),
                    fontFamily: 'Bubblegum-Sans',
                    fontSize: RFValue(25),
                    borderRadius: RFValue(25),
                    paddingLeft: 45,
                    paddingRight: 45,
                  }}>
                  10k
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'green',
                  width: RFValue(80),
                  height: RFValue(38),
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: RFValue(25),
                  borderColor: 'white',
                  flexDirection: 'row',
                }}>
                <Ionicons name={'heart'} size={RFValue(25)} color={'white'} />
              </View>
            </View>
          </View>
        </View>
      );
    }
  }
}
