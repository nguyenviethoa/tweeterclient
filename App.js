/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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
// import ToysNavigator from './src/navigation/ToysNavigator';

//Create Apollo client default uri is localhost:3000/graphql
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql'}),
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View>
          {/* <ToysNavigator /> */}
          <Toys />
        </View>
      </ApolloProvider>
    );
  }
}
