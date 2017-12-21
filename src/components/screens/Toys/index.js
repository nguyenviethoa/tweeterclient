import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { ToysList } from './ToysList';

export class Toys extends Component {
  render() {
    return (
      <ScrollView>
        <Text>Search Bar</Text>
        <ToysList />
      </ScrollView>
    );
  }
}



