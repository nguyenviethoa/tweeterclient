import gql from 'graphql-tag';

const loginMutation = gql`
  mutation login($email: String, $password: String) {
    loginWithEmail(email: $email, password: $password) {
      email
      password
      jwt
    }
  }
`;

export default loginMutation;
