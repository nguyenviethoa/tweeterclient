import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ToysRow } from './RowToys';
import { arrangeToysArray } from './utility';

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
        id: 3,
        title: 'Đồ chơi 4',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }, {
        id: 3,
        title: 'Đồ chơi 5',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'big'
      }, {
        id: 3,
        title: 'Đồ chơi 6',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'big'
      }, {
        id: 3,
        title: 'Đồ chơi 7',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }, {
        id: 3,
        title: 'Đồ chơi 8',
        imgUrl: 'https://www.toysperiod.com/images/lego-parts.jpg',
        toysType: 'small'
      }
    ];
    this.setState({ toys: arrangeToysArray(dataFetchFromServer) });
  }
  render() {
    return (
      <View style={styles.list}>
        <FlatList data={this.state.toys}
          renderItem={({ item }) => { return <ToysRow toys={item} /> }} />
      </View>
    );
  }
}

export default ToysList;