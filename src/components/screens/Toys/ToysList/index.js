import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { graphql } from 'react-apollo';
import { ToysRow } from './ToysRow';
import { arrangeToysArray } from '../utility';
import { styles } from './styles';
import { GetAllToysQuery } from './queries';

@graphql(GetAllToysQuery, { name: 'GetAllToysQuery' })
class ToysList extends Component {
  render() {
    let toysList = [];
    const { loading, allToy } = this.props.GetAllToysQuery;
    if (loading) {
      return (<View><Text>Loading...</Text></View>);
    } 
    console.log(this.props);
    toysList = arrangeToysArray(allToy); 
    return (
      <View style={styles.list}>
        <FlatList 
          data={toysList}
          keyExtractor={item => item[0].id}
          renderItem={({ item }) => (<ToysRow toys={item} />)} 
        />
      </View>
    );
  }
}

export default ToysList;

