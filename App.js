/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Toys } from './src/components/screens/Toys';
import ToysNavigator from './src/navigation/ToysNavigator';

export default class App extends Component {
  render() {
    return (
      <View>
        <ToysNavigator />
        <Toys />
      </View>
    );
  }
}
