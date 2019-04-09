import React from "react";
import styled, { css } from "styled-components";
import TopBar from "../../Components/TopBar";
import Footer from "../../Components/Footer";

import { MdDone } from "react-icons/md";
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
                  <br />
                  <TryBtn>지금 이용해보기</TryBtn>
                </IntroMainMessage>
              </IntroLeft>
              <IntroRight>
                <IPhoneImg src={IPhone} alt="Iphone" />
              </IntroRight>
            </IntroWrapper>
          </IntroContents>
        </IntroContainer>
        <AboutContainer>
          <AboutContents>
            <AboutImage>
              <IPhoneImg src={IPhone} alt="Iphone" />
            </AboutImage>
            <AboutExplain>
              <AboutHeader>
                <CheckIcon />
                간편한 일정 조율
              </AboutHeader>
              <AboutMessage>
                친구, 연인, 가족과의 일정을 쉽게 조율할 수 있습니다.
                <br />
                WeMeet은 구성원 가능한 모두가
                <br />
                참석 가능한 일정을 확인하여 알려줍니다.
              </AboutMessage>
            </AboutExplain>
          </AboutContents>
        </AboutContainer>
        <AboutContainer>
          <AboutContents>
            <AboutExplain status="left">
              <AboutHeader>
                <CheckIcon />
                손쉬운 일정 공유
              </AboutHeader>
              <AboutMessage>
                일정을 만든 뒤,
                <br />
                간단한 주소만 공유한다면
                <br />
                누구나 손쉽게 참여할 수 있습니다.
              </AboutMessage>
            </AboutExplain>
            <AboutImage>
              <IPhoneImg src={IPhone} alt="Iphone" />
            </AboutImage>
          </AboutContents>
        </AboutContainer>
        <AboutContainer>
          <AboutContents>
            <AboutImage>
              <IPhoneImg src={IPhone} alt="Iphone" />
            </AboutImage>
            <AboutExplain>
              <AboutHeader>
                <CheckIcon />
                실시간으로 변경되는 일정
              </AboutHeader>
              <AboutMessage>
                일정이나 장소가 변경되어도 걱정하지 마세요.
                <br />
                WeMeet은 일정에 대해 변경되는 내역을
                <br />
                구성원들이 쉽게 확인할 수 있습니다.
              </AboutMessage>
            </AboutExplain>
          </AboutContents>
        </AboutContainer>
        <Footer />
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

const TryBtn = styled.button`
  width: 150px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 15px;
  font-size: 14px;
  color: #2775f4;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.2s ease;
  -webkit-box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12),
    0 6px 6px rgba(0, 0, 0, 0.1725);
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.1725);

  &:hover {
    box-shadow: none;
    -webkit-box-shadow: none;
  }
`;

const IntroRight = styled.div`
  padding-top: 180px;
`;

const IPhoneImg = styled.img`
  width: 500px;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const AboutContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 500px;

  margin-top: 100px;
`;

const AboutImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AboutExplain = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  ${props =>
    props.status === "left" &&
    css`
      padding-left: 150px;
    `}
`;

const AboutHeader = styled.p`
  font-size: 35px;
  margin-bottom: 15px;
  color: #4488f7;
  font-weight: bold;
`;

const AboutMessage = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #5c5c5c;
`;

const CheckIcon = styled(MdDone)`
  font-weight: bold;
  margin-right: 5px;
`;
export default About;
