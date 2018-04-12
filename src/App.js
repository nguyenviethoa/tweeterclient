/*
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// Error Toys should decalre a screen Line 15 fix later 
import ToysNavigator from './navigation/ToysNavigator';

//Create Apollo client default uri is localhost:3000/graphql
const serverURL = 'https://staging.holdsport.dk/graphql';

//test on local when server is not avaialble
const localURL = 'http://192.168.1.130:4000/graphql';
const dataIdFromObject = object => `${object.__typename}__${object.id || object.tweet_id}`;

const client = new ApolloClient({
  link: new HttpLink({ uri: serverURL }),
  cache: new InMemoryCache(dataIdFromObject)
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <ToysNavigator />
      </ApolloProvider>

      // <View>
      //   <Text> test typescript </Text>
      // </View>
    );
  }
}
