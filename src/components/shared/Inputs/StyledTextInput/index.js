import React, { Component } from 'react';
import { styles } from './styles';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Text input with style
export default class StyledTextInput extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.text}
          placeholder={this.props.label}
          onChangeText={this.props.onChange}
          value={this.props.text}
          underlineColorAndroid='transparent'
          secureTextEntry={this.props.secure}
        />
      </View>
    );
  }
}
