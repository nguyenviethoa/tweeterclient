import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconTextButton, HeaderBar } from '../../../../shared';

export class CreateComment extends Component {
  static navigationOptions = { title: 'CreateComment', header: null };

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar name={'close'} title={'Creat Comment'} onPress={() => this.props.navigation.goBack()} />
        <ScrollView>
          <View style={styles.comment}>
            <View style={styles.user}>
              <Image source={{uri: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/86.png'}} style={styles.avataIMG} />
              <View style={styles.username}>
                <Text style={styles.textUser}>
                  John
                </Text>
                <Text style={styles.new}>
                  @johnonlinebiz
                </Text>
              </View>
            </View>
            <TextInput style={styles.nameInput}
                       placeholder={'What are you thinking?'}
                       onChangeText={this.props.onChange}
                       underlineColorAndroid='transparent'
            />
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.boxIcon}>
            <Icon name="image" style={styles.icon}/>
            <Icon name="attachment" style={styles.icon}/>
            <Icon name="finance" style={styles.icon}/>
            <Icon name="map-marker" style={styles.icon}/>
          </View>
          <View style={styles.send}>
          <TouchableOpacity onPress={() => { Alert.alert('Something');}}>
            <Icon name='send' style={styles.iconSend} />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default CreateComment;
