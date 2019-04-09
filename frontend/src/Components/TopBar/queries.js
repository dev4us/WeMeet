import gql from "graphql-tag";

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
