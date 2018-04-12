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
    Stats{
      views
    }
    Author{
      username
    }
  }
}
`;

const LinksQuery = gql`
  query links {
    links {
      id
      name
      team{
        name
      }
      url
      thumbnail_url
      description
    }
  }
`;

export { userQuery, tweetsQuery, LinksQuery };
