import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ToysItem from './ToysItem';
import { styles } from './styles';

export class ToysRow extends Component {
  render() {
    if (this.props.toys.length == 2) {
      return (
        <View style={styles.rowSmall}>
          <ToysItem toyDetail={this.props.toys[0]} />
          <ToysItem toyDetail={this.props.toys[1]} />
        </View>
      )
    } else return (
      <View style={styles.rowBig}>
        <ToysItem toyDetail={this.props.toys[0]} />
      </View>
    )
  }
}

// export default ToysRow;