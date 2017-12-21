import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { ToysRow } from './ToysRow';
import { arrangeToysArray } from './utility';
import { styles } from './styles';

class ToysList extends Component {
  state = {
    toys: [],
  }
  componentDidMount() {
    const dataFetchFromServer = [
      {
        id: 1,
        title: 'Đồ chơi 1',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }, {
        id: 2,
        title: 'Đồ chơi 2',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'big'
      }, {
        id: 3,
        title: 'Đồ chơi 3',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'big'
      }, {
        id: 4,
        title: 'Đồ chơi 4',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }, {
        id: 5,
        title: 'Đồ chơi 5',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'big'
      }, {
        id: 6,
        title: 'Đồ chơi 6',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'big'
      }, {
        id: 7,
        title: 'Đồ chơi 7',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }, {
        id: 8,
        title: 'Đồ chơi 8',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }
    ];
    this.setState({ toys: arrangeToysArray(dataFetchFromServer) });
  }
  render() {
    //line 64 issue voi flatlist
    return (
      <View style={styles.list}>
        <FlatList data={this.state.toys}
          keyExtractor={item => item[0].id}
          renderItem={({ item }) => ( <ToysRow toys={item} /> )} />
      </View>
    );
  }
}

export default ToysList;