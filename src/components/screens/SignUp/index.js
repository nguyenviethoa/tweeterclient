import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import { styles } from './styles';
import { IconTextButton } from '../../shared';
import StyledTextInput from '../../shared/Input/TextInput';

class SignUp extends Component {
  static navigationOptions = { title: 'SignUp', header: null };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Image
          style={{ width: 250, height: 250 }}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-iUxuYHv8vHDwKDp4oKdCTn5aF6cpTWgvU7Lpu6LmqjYg5VeaA' }}
        />
        <View style={styles.input}>
          <StyledTextInput label={'Username'} iconName={'user'} />
          <StyledTextInput label={'Email'} iconName={'envelope'} />
          <StyledTextInput label={'Password'} iconName={'key'} />
        </View>
        <View style={styles.wrapper}>
          <IconTextButton style={styles.loginButton} title='Sign Up' />
          <Text style={styles.text}>Already Have An Account? Sign In</Text>
          <Text>or Login With Facebook</Text>
        </View>
      </View>
    );
  }
}

export default SignUp;

