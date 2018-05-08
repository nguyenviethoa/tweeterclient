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

class BoxStatus extends Component {

  render(){
    return(
      <View style={styles.toolbar}>
        <View style={styles.box}>
          <TouchableOpacity onPress={this.props.onComment} >
            <View style={styles.icon}>
              <Icon name='comment-processing-outline' size={20} color='#C2C2C2' />
            </View>
          </TouchableOpacity>
          <Text style={styles.number}>0</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => { Alert.alert('Share');}} >
            <View style={styles.icon}>
              <Icon name='tumblr-reblog' size={20} color='#C2C2C2' />
            </View>
          </TouchableOpacity>
          <Text style={styles.number}>0</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => { Alert.alert('Like');}} >
            <View style={styles.icon}>
              <Icon name='heart-outline' size={20} color='#C2C2C2' />
            </View>
          </TouchableOpacity>
          <Text style={styles.number}>0</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => { Alert.alert('Email');}} >
            <View style={styles.icon}>
              <Icon name='email-outline' size={20} color='#C2C2C2' />
            </View>
          </TouchableOpacity>
          <Text style={styles.number}>0</Text>
        </View>
      </View>
    );
  }
}

export default BoxStatus;
