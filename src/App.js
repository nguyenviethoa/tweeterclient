/*
 * @flow
 */
import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';

// Error Toys should decalre a screen Line 15 fix later
import TwitterNavigator from './navigation/TwitterNavigator';

//Create Apollo client default uri is localhost:3000/graphql
const serverURL = 'https://staging.holdsport.dk/graphql';

//test on local when server is not avaialble
const localURL = 'http://27.78.16.8:8099/graphql';
const dataIdFromObject = object => `${object.__typename}__${object.id || object.tweet_id}`;

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      // authorization: localStorage.getItem('token') || null,
      authorization: AsyncStorage.getItem('token') || null,
    }
  });

  return forward(operation);
});

const httpLink = new HttpLink({ uri: localURL });

// const client = new ApolloClient({
//   link: concat(authMiddleware, httpLink),
//   cache: new InMemoryCache(dataIdFromObject),
//   onError: (e) => { console.log('apollo client get errors: ', e.graphQLErrors) },
// });

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: localURL,
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <TwitterNavigator />
      </ApolloProvider>

      // <View>
      //   <Text> test typescript </Text>
      // </View>
    );
  }
}
