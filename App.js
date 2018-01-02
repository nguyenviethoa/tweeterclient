/*
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Toys from './src/components/screens/Toys';
// Error Toys should decalre a screen Line 15 fix later 
import ToysNavigator from './src/navigation/ToysNavigator';

//Create Apollo client default uri is localhost:3000/graphql
const serverURL = 'http://27.78.16.8:3005/graphql';

//test on local when server is not avaialble
const localURL = 'http://localhost:3000/graphql';
const client = new ApolloClient({
  link: new HttpLink({ uri: localURL }),
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <ToysNavigator />
      </ApolloProvider>
    );
  }
}
