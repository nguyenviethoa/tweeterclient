import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ToysRow } from './ToysRow';
import { arrangeToysArray } from '../utility';
import { styles } from './styles';

class ToysList extends Component {
  render() {
    let toysList = [];
    if (this.props.data.loading) {
      return (<View><Text>Loading...</Text></View>);
    } 
    console.log(this.props);
    toysList = arrangeToysArray(this.props.data.allToy); 
    return (
      <View style={styles.list}>
        <FlatList data={toysList}
          keyExtractor={item => item[0].id}
          renderItem={({ item }) => (<ToysRow toys={item} />)} />
      </View>
    );
  }
}
// Create Query and make a call to graphQL server
const ALL_TOYS_QUERY = gql`query { allToy { id title urlImage toyType {toyTypeName}}}`;
const ToysListWithData = graphql(ALL_TOYS_QUERY)(ToysList);


export default ToysListWithData;
