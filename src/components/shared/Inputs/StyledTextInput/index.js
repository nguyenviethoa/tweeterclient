import React, { Component } from 'react';
import { styles } from './styles';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//Text input with style
export default class StyledTextInput extends Component {
  state = {
    text: ''
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Icon style={styles.icon} name={this.props.iconName} size={this.props.iconSize} color={this.props.iconColor} />
        <TextInput
          style={styles.text}
          placeholder={this.props.label}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          underlineColorAndroid='transparent'
        />
      </View>
    );
  }
}