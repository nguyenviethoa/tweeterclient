import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import ToysList from './ToysList';
import { styles } from './styles';
import { BottomBar, BottomBarButton, TopBar } from '../../shared';

class Toys extends Component {
  static navigationOptions = { title: 'Toys', header: null };

  constructor(props) {
    super(props);
    this.onSideBarPress = this.onSideBarPress.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  onSideBarPress() {
    console.log('on sidebar pressed');
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>
        <TopBar onSideBarPress={this.onSideBarPress} />
        <ScrollView>
          <ToysList />
        </ScrollView>
        {/* <View style={styles.footer} /> */}

        <BottomBar>
          <BottomBarButton
            onPress={() => {}}
            iconName='account'
            label='Profile'
          />
          <BottomBarButton
            onPress={() => {}}
            iconName='bell-ring'
            label='Notifications'
          />
          <BottomBarButton
            onPress={() => {}}
            iconName='note-outline'
            label='History'
          />
          <BottomBarButton
            onPress={() => {}}
            iconName='currency-usd'
            label='Balance'
          />
        </BottomBar>
      </View>  
    );
  }
}

export default Toys;
