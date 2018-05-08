import gql from 'graphql-tag';

const userQuery = gql`
  query User {
    id
    username
    full_name
    avatar_url
  }
`;

const tweetsQuery = gql`
query getTweets{
  Tweets{
    body
    Author{
      username
    }
  }
}
`;

export { userQuery, tweetsQuery };
