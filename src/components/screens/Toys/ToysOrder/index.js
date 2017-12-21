import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { styles } from './styles';

export class ToysOrder extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Toys Order screen</Text>
      </ScrollView>
    );
  } 
}