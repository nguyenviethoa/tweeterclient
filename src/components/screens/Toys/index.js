import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { styles } from './styles';

class Toys extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Main Toys Containers - include flatlist of toy rows
        </Text>
      </View>
    );
  }
}

export default Toys;

