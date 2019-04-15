import gql from "graphql-tag";

// Mutation
export const CREATE_MEETING = gql`
  mutation createMeeting(
    $title: String!
    $description: String!
    $thumbnail: String!
  ) {
    CreateMeeting(
      title: $title
      description: $description
      thumbnail: $thumbnail
    ) {
      ok
      error
      Meeting {
        hashKey
      }
    }
  }
`;
