import React from "react";
import styled from "styled-components";
import Card from "../Card";

import { useQuery } from "react-apollo-hooks";
import { GET_MEETINGS } from "./queries";
import Loading from "../Loading";

const CardContainer = ({ reqType }) => {
  const { loading, data } = useQuery(GET_MEETINGS, {
    variables: { reqType: reqType },
    fetchPolicy: "network-only"
  });

  console.log(data);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <Container>
      {data &&
        data.GetMeetings &&
        data.GetMeetings.Meetings &&
        data.GetMeetings.Meetings.map((item, index) => {
          let participantsCount = item.participants.length;
          return (
            <Card
              key={index}
              title={item.title}
              thumbnail={item.thumbnail}
              desc={item.description}
              confirmDay={
                (item.confirmDay && item.confirmDay.pickDate) || undefined
              }
              participantsCount={participantsCount}
            />
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding-top: 25px;
`;

export default CardContainer;
