import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class IconTextButton extends Component{
  render(){
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onPress} >
        <View style={styles.savebutton}>
          <Text style={styles.buttontext}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default IconTextButton;
