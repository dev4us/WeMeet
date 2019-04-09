import React from "react";
import styled from "styled-components";
import TopBar from "../../Components/TopBar";

import IPhone from "../../Assets/iphone.png";

const About = () => {
  return (
    <>
      <TopBar theme="home" />
      <Container>
        <IntroContainer>
          <IntroBackground />
          <IntroContents>
            <IntroWrapper>
              <IntroLeft>
                <IntroMainMessage>
                  말 뿐인 약속은 이제 그만,
                  <br />
                  우리 언제 만날까요?
                </IntroMainMessage>
              </IntroLeft>
              <IntroRight>
                <IPhoneImg src={IPhone} alt="Iphone" />
              </IntroRight>
            </IntroWrapper>
          </IntroContents>
        </IntroContainer>
      </Container>
    </>
  );
};
const Container = styled.div``;

const IntroContainer = styled.div`
  width: 100%;
  height: 600px;
`;

const IntroBackground = styled.div`
  position: relative;
  top: 0px;
  width: 100%;
  height: 600px;
  z-index: 10;
  clip-path: polygon(0px 0px, 100% 0px, 100% 85%, 0px 100%);
  background-image: linear-gradient(rgb(10, 88, 214), rgb(81, 147, 255)),
    url(undefined);
`;

const IntroContents = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const IntroWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: 11;
  top: 0px;
  justify-content: space-between;
  width: 50%;
  height: 800px;
`;

const IntroLeft = styled.div`
  padding-top: 250px;
`;

const IntroMainMessage = styled.p`
  font-size: 2.5rem;
  color: white;
  line-height: 1.5;
  white-space: nowrap;
`;

const IntroRight = styled.div`
  padding-top: 180px;
`;

const IPhoneImg = styled.img`
  width: 500px;
`;
export default About;
