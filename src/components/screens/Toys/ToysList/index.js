import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import { styles } from './styles';
import { tweetsQuery } from './queries';

// @graphql(tweetsQuery, { name: 'tweetsQuery' })
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
    console.log('start list', this.props.data);
    const { error, loading } = this.props.data;
    if (error) {
      console.log('error', error);
    }
    if (loading) {
      return <ActivityIndicator />;
    }

    console.log('prop', this.props);
    return (
      <View>
        <Text> Toy List A</Text>
      </View>
    );
  }
}

export default graphql(tweetsQuery)(ToysList);

