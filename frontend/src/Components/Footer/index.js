import React from "react";
import styled from "styled-components";
import { MdNavigateNext, MdMailOutline } from "react-icons/md";
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
          <Message>https://github.com/dev4us</Message>
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
`;

const WrapperFrame = styled.div`
  display: flex;
  width: 1000px;
  padding-top: 50px;
`;

const Frame = styled.div`
  flex: 1;
  color: white;
`;

const Header = styled.div`
  width: 90%;
  border-bottom: 1px solid white;
  color: white;
  padding-bottom: 15px;
  margin-bottom: 15px;
  font-size: 20px;
`;

const PickerIcon = styled(MdNavigateNext)`
  margin-right: 5px;
  font-size: 14px;
  padding-top: 1.5px;
`;

const EmailIcon = styled(MdMailOutline)`
  margin-right: 5px;
  font-size: 14px;
  padding-top: 1.5px;
`;

const Message = styled.p`
  color: white;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
`;

export default Footer;
