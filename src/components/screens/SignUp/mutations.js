import gql from 'graphql-tag';

const SignupMutation = gql`
  mutation signup($email: String, $password: String, $username: String) {
    signup(email: $email, password: $password, username: $username) {
      email
      password
      username
      jwt
    }
  }
`;

export default SignupMutation;
