import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import { ToysRow } from './ToysRow';
import { arrangeToysArray } from '../utility';
import { styles } from './styles';
import { GetAllToysQuery } from './queries';

@graphql(GetAllToysQuery, { name: 'GetAllToysQuery' })
class ToysList extends Component {
  
  constructor(props) {
    super(props);
    this.renderFooter = this.renderFooter.bind(this);
  }

  renderFooter() {
    return (
      <View style={styles.listFooter}>
        <ActivityIndicator animating size="large" />
      </View>  
    );
  }
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
          ListFooterComponent={this.renderFooter} 
        />
      </View>
    );
  }
}

export default ToysList;

