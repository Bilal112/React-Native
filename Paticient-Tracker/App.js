import React, { Component } from 'react';
import { View } from 'react-native';
import { Font } from 'expo'

import Rout from './src/rout';

export default class App extends Component {

  constructor(){
    super();
    this.state ={
      fonts:false
    }
  }
  componentDidMount = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    })
    this.setState({ fonts: true })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.fonts ?
          <Rout />
          : null
        }
      </View>
    );
  }
}