import React from "react";
import styled from "styled-components";
import TopBar from "../../Components/TopBar";

const About = () => {
  return (
    <>
      <TopBar theme="home" />
      <Container />
    </>
  );
};

const Container = styled.div`
  background: #86a9ae;
  width: 100%;
  height: 100%;
`;

export default About;
