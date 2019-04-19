import gql from "graphql-tag";

// Query
export const GET_MEETING = gql`
  query getMeeting($hashKey: String!) {
    GetMeeting(hashKey: $hashKey) {
      ok
      error
      Meeting {
        title
        description
        thumbnail
        confirmDay {
          pickDate
        }
      }
    }
  }
`;
