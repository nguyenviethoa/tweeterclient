import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import ToysList from './ToysList';
import { styles } from './styles';

class Toys extends Component {
  static navigationOptions = { title: 'Toys', header: null };
  render() {
    return (
      <ScrollView>
        <ToysList />
      </ScrollView>
    );
  }
}

export default Toys;
