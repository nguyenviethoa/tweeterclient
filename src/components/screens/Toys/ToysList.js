import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
    console.log(this.props.data.allToy);
    return (
      <View style={styles.list}>
        <FlatList data={this.state.toys}
          keyExtractor={item => item[0].id}
          renderItem={({ item }) => (<ToysRow toys={item} />)} />
      </View>
    );
  }
}
// Create Query and make a call to graphQL server
const ALL_TOYS_QUERY = gql`query { allToy { title urlImage } }`;
const ToysListWithData = graphql(ALL_TOYS_QUERY)(ToysList);
export default ToysListWithData;