import gql from "graphql-tag";

// Query
export const GET_PROFILE = gql`
  query {
    GetProfile {
      ok
      error
      User {
        userName
        profileImage
      }
    }
  }
`;

// Mutation
export const SIGN_IN_GOOGLE = gql`
  mutation signInGoogle(
    $userName: String!
    $userEmail: String!
    $profileImage: String
  ) {
    SignIn(
      userName: $userName
      userEmail: $userEmail
      profileImage: $profileImage
    ) {
      ok
      error
      token
    }
  }
`;
