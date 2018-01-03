import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import ToysList from './ToysList';
import { styles } from './styles';
import { BottomBar, BottomBarButton } from '../../shared';

class Toys extends Component {
  static navigationOptions = { title: 'Toys', header: null };
  render() {
    return (
      <View style={styles.container}>
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
