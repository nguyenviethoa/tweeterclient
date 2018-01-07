import React, { Component } from 'react';
import { View, TextInput, Text, TouchableHighlight, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import StyledTextInput from '../Inputs/StyledTextInput';

//Text input with style
export default class TopBar extends Component {

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.wrapper}>
        <View style={styles.buttonLeft}>
          <TouchableHighlight activeOpacity={0.6} onPress={this.props.onSideBarPress}>
            <View style={styles.buttonMain}>
              <Icon name='bars' size={30} color='#23394a' />
            </View>
          </TouchableHighlight>
        </View>

        <View style={styles.searchBar} >
          <StyledTextInput iconName='search' label='enter toy name' iconSize={5} iconColor='#D3D3D3' />
        </View>
        
        <View style={styles.buttonRight}>
          <TouchableHighlight activeOpacity={0.6} onPress={this.props.onPress}>
            <View style={styles.buttonMain}>
              <Icon name='shopping-cart' size={30} color='#23394a' />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}