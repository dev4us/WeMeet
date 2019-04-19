import gql from "graphql-tag";

// Query
export const GET_MEETINGS = gql`
  query getMeetings($reqType: String!) {
    GetMeetings(reqType: $reqType) {
      ok
      error
      Meetings {
        id
        title
        description
        thumbnail
        hashKey
        confirmDay {
          pickDate
        }
        participants {
          id
        }
      }
    }
  }
`;
