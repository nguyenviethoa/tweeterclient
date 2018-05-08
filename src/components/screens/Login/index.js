import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  ActivityIndicator
} from 'react-native';
import { resetNavigation } from '../../../navigation/actions';
import { styles } from './styles';
import { IconTextButton, StyledTextInput, ButtonLogin, ErrorText } from '../../shared';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { graphql } from 'react-apollo';
import loginMutation from './mutations';
import SuccessFeedback from '../../inheritables/SuccessFeedback';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


@graphql(loginMutation)
class Login extends SuccessFeedback {
  static navigationOptions = { title: 'Login', header: null };
  state = {
      modalVisible: true,
      errorNetwork: false,
      email: '',
      password: '',
      loading: false,
  }

  constructor(props) {
    super(props);
    this.onLoginPress = this.onLoginPress.bind(this);
  }

  async login() {

    const { email, password } = this.state;
    if (__DEV__) {
      console.log('start login...');

    }
    this.setState({ loading: true })

    await this.props.mutate({ variables: { email, password } })
    .then(({ data }) => {
        if (__DEV__) {
          console.log('start login mutation', data);
        }
        this.props.navigation.navigate('Twitter');
        AsyncStorage.setItem('token', data.loginWithEmail.jwt);
        this.setState({ errorNetwork: false });
        this.setState({ loading: false });
      }).catch((error) => {
        this.setState({ errorNetwork: true });
        if (__DEV__) {
          console.log('Errors:', this.state.errorNetwork);
        }
        this.setState({ loading: false })
    });
    // if (__DEV__) {
    //   console.log('network error: ', this.state.errorNetwork);
    // }
    // if (!this.state.errorNetwork) {
    //   if (__DEV__) {
    //     console.log('start get token: ', this.state.errorNetwork);
    //   }
    //   AsyncStorage.getItem('accessToken').then((value) => {
    //       if (__DEV__) {
    //         console.log('token', value);
    //       }
    //       this.move({ value });
    //     });
    //   }
    }

    renderLogin = () => {
    console.log('visable', this.state.modalVisible);
    if (this.state.modalVisible) {
      return (
        <View style={styles.input}>
          <StyledTextInput label={'Email Address'} iconName={'envelope'} onChange={(email) => { this.setState({ email }); }} text={this.state.email}/>
          <StyledTextInput label={'Password'} iconName={'key'} onChange={(password) => { this.setState({ password }); }} text={this.state.password} secure={true} />
          <IconTextButton style={styles.loginButton} title={'Login'} onPress={this.login.bind(this)}/>
        </View>
      );
    }
    console.log(this.state.modalVisible);
    return null;
    }

    renderLoading(){
        return(
          <Spinner
            visible={this.state.loading}
            overlayColor='rgba(0, 0, 0, 0.30)'
          >
            <View style={styles.successContainer}>
              <View style={styles.successBox}>
                <Icon name='check' style={styles.successIcon} />
              </View>
            </View>
          </Spinner>
        );
    }

    onLoginPress() {
      console.log('SignUp navigator');
      this.props.navigation.navigate('SignUp');
    }

  render() {
    let networkErrorElement = null;
    if (this.state.errorNetwork) {
      networkErrorElement = <ErrorText title='* The email or password is incorrect' />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Twitter</Text>
        <Icon name='twitter' size={160} color='#ffffff' />
        {this.renderLoading()}
        {networkErrorElement}
        {this.renderLogin()}
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => { Alert.alert('Password');}}>
            <Text style={styles.text}>----  or  ----</Text>
          </TouchableOpacity>
          <View style={styles.buttonLogin}>
            <ButtonLogin style={styles.buttonLoginFacebook} iconName={'facebook'} iconSize={20} iconColor={'#fff'} title={'Facebook'} />
            <ButtonLogin style={styles.buttonLoginGmail} iconName={'gmail'} iconSize={20} iconColor={'#fff'} title={'Gmail'} />
          </View>
          <View style={styles.box}>
            <TouchableOpacity style={styles.boxIconF} onPress={() => { Alert.alert('Facebook');}}>
              <Text style={styles.textIcon}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxIconG} onPress={this.onLoginPress}>
              <Text style={styles.textIcon}>New Here? Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
