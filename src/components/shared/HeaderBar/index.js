import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity underlayColor='rgba(0, 0, 0, 1)' onPress={this.props.onPress}>
          <Icon fontSize={22}  name={this.props.name} style={styles.headerClose}/>
        </TouchableOpacity>
        <View style={styles.text}>
          <Text style={styles.textTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

export default HeaderBar;
