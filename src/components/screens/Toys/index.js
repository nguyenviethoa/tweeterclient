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
        <BottomBar>
          <BottomBarButton
            onPress={() => {}}
            iconName='account'
            label='Profile'
          />
        </BottomBar>
      </View>  
    );
  }
}

export default Toys;
