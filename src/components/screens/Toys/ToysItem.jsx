import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { styles } from './styles';

class ToysItem extends Component {
  render() {
    const url = 'https://www.toysperiod.com/images/lego-parts.jpg'
    return (
      <View style={styles.toyContainer}>
        <View style={styles.toyHeader} >
          <View style={styles.toyStatus} />
          <Text style={styles.toyTitle}>Toys title</Text>
        </View>
        <View style={styles.toyContent} >
          <Image source={{ uri: url }}
            style={{ width: '100%', height: 150 }} />
          <Button title="Add This Toy" color="#841584" />
        </View>
      </View>
  }
}

export default ToysItem;