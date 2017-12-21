/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Toys } from './src/components/screens/Toys';
import ToysNavigator from './src/navigation/ToysNavigator';

export default class App extends Component {
  render() {
    return (
      <ToysNavigator />
    );
  }
}
