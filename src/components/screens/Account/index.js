import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { styles } from './styles';

export class Account extends Component {
  static navigationOptions = { title: 'Account', header: null };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Account information screen</Text>
      </ScrollView>
    );
  } 
}