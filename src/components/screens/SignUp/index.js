import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { resetNavigation } from '../../../navigation/actions';
import { styles } from './styles';
import { IconTextButton, StyledTextInput, ButtonLogin, ErrorText } from '../../shared';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { graphql } from 'react-apollo';
import SignupMutation from './mutations';
import SuccessFeedback from '../../inheritables/SuccessFeedback';
import I18n from '../../../../I18n';

@graphql(SignupMutation)
class SignUp extends SuccessFeedback {
  static navigationOptions = { title: 'SignUp', header: null };
  state = {
      modalVisible: true,
      errorNetwork: false,
      email: '',
      password: '',
      username: '',
      loading: false,
  }

  constructor(props) {
    super(props);
    this.onSignupPress = this.onSignupPress.bind(this);
  }

  async signup() {
    const { email, password, username } = this.state;
    if (__DEV__) {
      console.log('start login...');
    }

    if(email == ""){
      alert('Please fill the email');
    }else if(password == ""){
      alert('Please fill the password');
    }else if(username == ""){
      alert('Please fill the username');
    }else{
      this.setState({ loading: true })
      // setTimeout(() => { this.setState({ loading: false }); }, 500));

      await this.props.mutate({ variables: { email, password, username } })
      .then(({ data }) => {
        if (__DEV__) {
          console.log('start login mutation', data);
        }

        this.props.navigation.navigate('Twitter');
        AsyncStorage.setItem('token', data.signup.jwt);
        this.setState({ errorNetwork: false });
        this.setState({ loading: false })
      }).catch((error) => {
        this.setState({ errorNetwork: true });
        if (__DEV__) {
          console.log('Errors:', this.state.errorNetwork);
        }
        this.setState({ loading: false })
      });
    }
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

  renderSignup = () => {
    if (this.state.modalVisible) {
      return (
        <View style={styles.input}>
          <StyledTextInput label={'Username'} iconName={'envelope'} onChange={(username) => { this.setState({ username }); }} text={this.state.username}/>
          <StyledTextInput label={'Email Address'} iconName={'envelope'} onChange={(email) => { this.setState({ email }); }} text={this.state.email}/>
          <StyledTextInput label={'Password'} iconName={'key'} onChange={(password) => { this.setState({ password }); }} text={this.state.password} secure={true} />
          <IconTextButton style={styles.loginButton} title={'Sign Me Up'} onPress={this.signup.bind(this)}/>
        </View>
      );
    }
    console.log(this.state.modalVisible);
    return null;
  }

  renderLoading = () =>{
    if(this.state.loading){
      return(
        <ActivityIndicator style={{position: 'absolute',top: 300, zIndex: 2,}} />
      );
    }
  }

  onSignupPress() {
    console.log('Login navigator');
    this.props.navigation.navigate('Login');
  }

  render() {
    let networkErrorElement = null;
    if (this.state.errorNetwork) {
      networkErrorElement = <ErrorText title='* This account already exists' />;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{I18n.t('signup.title')}</Text>
        {this.renderLoading()}
        {networkErrorElement}
        {this.renderSignup()}
        <View style={styles.wrapper}>
          <View style={styles.login}>
            <Text style={styles.loginClick}>{I18n.t('signup.account')}</Text>
            <TouchableOpacity style={styles.loginPress} onPress={this.onSignupPress}>
              <Text style={styles.colorText}>{I18n.t('signup.login')}</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>{I18n.t('signup.login_with')}</Text>
          <View style={styles.buttonLogin}>
            <ButtonLogin style={styles.buttonLoginFacebook} iconName={'facebook'} iconSize={20} iconColor={'#fff'} title={'Facebook'} />
            <ButtonLogin style={styles.buttonLoginGmail} iconName={'gmail'} iconSize={20} iconColor={'#fff'} title={'Gmail'} />
          </View>
        </View>
      </View>
    );
  }
}

export default SignUp;
