import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BoxStatus } from '../../../../shared';

class Row extends Component{
  render(){
    return (
      <View style={styles.list}>
        <View>
          <Image source={{uri: this.props.body}} style={styles.avata} />
        </View>
        <View style={styles.comment}>
          <Text style={styles.name}>{this.props.Author.username}</Text>
          <Text style={styles.content}>{this.props.body}</Text>
          <BoxStatus onComment={this.props.onPress} />
        </View>
      </View>
    );
  }
}
export default Row;
