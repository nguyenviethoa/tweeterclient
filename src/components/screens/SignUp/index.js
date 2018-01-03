import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { styles } from './styles';
import { IconTextButton } from '../../shared';

class SignUp extends Component {
  static navigationOptions = { title: 'SignUp', header: null };
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.wrapper1}>
            <Image
              style={{ width: 250, height: 250 }}
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-iUxuYHv8vHDwKDp4oKdCTn5aF6cpTWgvU7Lpu6LmqjYg5VeaA' }} 
            />
          </View>
          <Text>Username</Text>
          <Text>Email</Text>
          <Text>Password</Text>
          <View style={styles.wrapper1}>
            <IconTextButton style={styles.loginButton} title='Sign Up' />
            <Text style={styles.text}>Already Have An Account? Sign In</Text>
          </View>
        </View>
    );
  }
}

export default SignUp;

