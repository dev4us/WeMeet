import React from "react";
import styled from "styled-components";
import { MdNavigateNext, MdMailOutline } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";
const Footer = () => {
  return (
    <Container>
      <WrapperFrame>
        <Frame>
          <Header>Contact Us</Header>
          <Message>
            <EmailIcon />
            public.dev4us@gmail.com
          </Message>
          <Message>
            <GithubIcon />
            https://github.com/dev4us
          </Message>
        </Frame>
        <Frame>
          <Header>서비스 정책</Header>
          <Message>
            <PickerIcon />
            개인정보 취급 방침
          </Message>
          <Message>
            <PickerIcon />
            이용약관
          </Message>
        </Frame>
      </WrapperFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
  background: #5b5b5b;
  margin-top: 150px;

  @media (max-width: 650px) {
    padding-bottom: 20px;
    height: unset;
  }
`;

const WrapperFrame = styled.div`
  display: flex;
  width: 80%;
  padding-top: 50px;

  @media (max-width: 650px) {
    flex-direction: column;
    padding-top: 20px;
  }
`;

const Frame = styled.div`
  width: 48%;
  color: white;

  @media (max-width: 650px) {
    width: 100%;
  }

  &:last-child {
    margin-left: 4%;
    @media (max-width: 650px) {
      margin-left: unset;
      margin-top: 30px;
    }
  }
`;

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid white;
  color: white;
  padding-left: 10px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  font-size: 20px;

  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

const PickerIcon = styled(MdNavigateNext)`
  margin-right: 5px;
  font-size: 14px;
  padding-top: 1.5px;

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

const EmailIcon = styled(MdMailOutline)`
  margin-right: 5px;
  font-size: 14px;
  padding-top: 1.5px;

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

const GithubIcon = styled(GoMarkGithub)`
  margin-right: 5px;
  font-size: 14px;
  padding-top: 1.5px;

  @media (max-width: 650px) {
    font-size: 12px;
  }
`;

const Message = styled.p`
  color: white;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;

  @media (max-width: 650px) {
    font-size: 10px;
  }
`;

export default Footer;
