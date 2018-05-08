import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { graphql } from 'react-apollo';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Row from './TwitterRow';
import { styles } from './styles';
import { tweetsQuery } from './queries';
import { ListViewWrapper } from '../../../shared';

@graphql(tweetsQuery, { name: 'tweetsQuery' })
class TwitterList extends Component {

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

  //   <Query
  //   query={gql`
  //     {
  //       Tweets{
  //         body
  //         Stats{
  //           views
  //         }
  //         Author{
  //           username
  //         }
  //       }
  //     }
  //   `}
  // >
  //   {({ loading, error, data }) => {
  //     if (loading) return <ActivityIndicator />;
  //     if (error) return console.log('error', error);
  //     console.log('data', data);
  //     return data;
  //   }}
  // </Query>

    console.log('start list', this.props.tweetsQuery);
    const { Tweets} = this.props.tweetsQuery;
    const { error, loading} = this.props.tweetsQuery;
    if (error) {
      console.log('error', error);
    }
    if (loading) {
      return <View />;
    }

    console.log('prop', this.props);
    return (
      <View>
        <ListViewWrapper
          navigation = {this.props.navigation}
          data = {Tweets}
          row = {(data) => <Row
                {...data}
                onPress={this.props.onPress}
              />}
        />
      </View>
    );
  }
}

export default TwitterList;
