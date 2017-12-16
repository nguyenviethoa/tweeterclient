import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { ToysList } from 'ToysList';

class Toys extends Component {
  render() {
    return (
      <View>
        <Text>Search Bar</Text>
        <ToysList />
      </View>
    );
  }
}

export default Toys;

