import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import ToysList from './ToysList';
import { styles } from './styles';
import ToysItem from './ToysItem';

class Toys extends Component {
  render() {
    const toys = [
      {
        id: 1,
        title: 'Đồ chơi 1',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      },
      {
        id: 2,
        title: 'Đồ chơi 1',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }
    ]
    return (
      <View>
        <View style={styles.rowSmall}>
          <ToysItem toyDetail={toys[0]} />
          <ToysItem toyDetail={toys[1]} />
        </View>
        <ToysList />
      </View>
    );
  }
}

export default Toys;