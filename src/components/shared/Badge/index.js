import React, { Component } from 'react';
import { styles } from './styles';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Text input with style
export default class Badge extends Component {
  render() {
    return (
      <View style={[styles.wrapper, { backgroundColor: this.props.color }]}>
        <Text style={styles.text}> {this.props.number} </Text>
      </View>
    );
  }
}