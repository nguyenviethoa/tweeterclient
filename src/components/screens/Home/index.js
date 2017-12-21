import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { styles } from './styles';

export class Home extends Component {

  static navigationOptions = { title: 'Home', header: null };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Home screen</Text>
      </ScrollView>
    );
  } 
}