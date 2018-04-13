/*
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
// Error Toys should decalre a screen Line 15 fix later 
import ToysNavigator from './navigation/ToysNavigator';

//Create Apollo client default uri is localhost:3000/graphql
const serverURL = 'https://staging.holdsport.dk/graphql';

//test on local when server is not avaialble
const localURL = 'http://192.168.1.130:4000/graphql';
const dataIdFromObject = object => `${object.__typename}__${object.id || object.tweet_id}`;

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: localStorage.getItem('token') || null,
    } 
  });

  return forward(operation);
});

const httpLink = new HttpLink({ uri: localURL });

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(dataIdFromObject),
  onError: (e) => { console.log(e.graphQLErrors) },
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
