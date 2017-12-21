import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import ToysList from './ToysList';
import { styles } from './styles';

export class Toys extends Component {
  static navigationOptions = { title: 'Toys', header: null };
  render() {
    return (
      <ScrollView>
        <Text>Search Bar</Text>
        <ToysList />
      </ScrollView>
    );
  }
}

export default Toys;
