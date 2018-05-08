import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import TwitterList from './TwitterList';
import { styles } from './styles';
import { BottomBar, BottomBarButton, TopBar, Menu } from '../../shared';

class Twitter extends Component {
  static navigationOptions = { title: 'Twitter', header: null };

  constructor(props) {
    super(props);
    this.onSideBarPress = this.onSideBarPress.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  onSideBarPress() {
    console.log('on sidebar pressed');
    this.props.navigation.navigate('DrawerOpen');
  }

  onPress(){
    console.log('comment');
    this.props.navigation.navigate('Comment');
  }

  render() {
    console.log('main');
    return (
      <View style={styles.container}>
        <Menu onSideBarPress={this.onSideBarPress} badge_color='red' cart_number={5} src={{uri: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/10.png'}} />
        <ScrollView>
          <TwitterList onPress={this.onPress}/>
        </ScrollView>
        {/* <View style={styles.footer} /> */}

        <BottomBar>
          <BottomBarButton
              onPress={() => {}}
              iconName='home-outline'
            />
            <BottomBarButton
              onPress={() => {}}
              iconName='magnify'
            />
            <BottomBarButton
              onPress={() => {}}
              iconName='bell-outline'
            />
            <BottomBarButton
              onPress={() => {}}
              iconName='email-outline'
            />
        </BottomBar>
      </View>
    );
  }
}

export default Twitter;
