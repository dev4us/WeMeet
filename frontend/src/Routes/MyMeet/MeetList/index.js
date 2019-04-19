import React from "react";
import styled from "styled-components";

import TopBar from "../../../Components/TopBar";
import SubBar from "../../../Components/SubBar";
import CardContainer from "../../../Components/CardContainer";

const MeetList = ({ match }) => {
  const concept = match.params.concept;

  return (
    <Container>
      <TopBar />
      <MainFrame>
        <MainContents>
          <SubBar>1</SubBar>
          <CardContainer reqType={concept} />
        </MainContents>
      </MainFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;
  padding-top: 60px;
`;

const MainContents = styled.div`
  display: block;
  width: 100%;
`;
export default MeetList;
