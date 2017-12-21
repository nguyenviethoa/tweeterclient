import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import ToysList from './ToysList';
import { styles } from './styles';

class Toys extends Component {
  render() {
    return (
      <View>
        <ToysList />
      </View>
    );
  }
}

export default Toys;