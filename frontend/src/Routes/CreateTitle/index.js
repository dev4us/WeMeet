import React from "react";
import styled from "styled-components";

import TopBar from "../../Components/TopBar";

const CreateTitle = () => {
  return (
    <Container>
      <TopBar />
      <MainFrame>
        <MainContents>
          <Header>당신의 소중한 일정을 뭐라고 부르면 좋을까요?</Header>
          <InputText />
          <BtnFrame>
            <SubmitBtn>다음 단계로</SubmitBtn>
            <CancelBtn>생각을 해본 뒤에 돌아올게요.</CancelBtn>
          </BtnFrame>
        </MainContents>
      </MainFrame>
    </Container>
  );
};

export default CreateTitle;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  padding-top: 60px;
`;

const MainContents = styled.div`
  display: block;
  width: 100%;
`;

const Header = styled.p`
  font-size: 2rem;
  margin-bottom: 50px;
`;

const InputText = styled.input`
  width: 100%;
  height: 60px;
  border: unset;
  border-bottom: 2px solid black;
  padding-bottom: 0px;
  font-size: 25px;
  color: #5c5c5c;
  margin-bottom: 30px;
`;

const BtnFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SubmitBtn = styled.button`
  width: 150px;
  height: 45px;
  margin-bottom: 10px;
  cursor: pointer;

  border: 2px solid black;
  background: black;
  color: white;
  font-weight: bold;

  &:hover {
    background: white;
    color: black;
  }
  transition: all 0.3s ease;
`;

const CancelBtn = styled.p`
  font-size: 10px;
  color: #5c5c5c;
  cursor: pointer;
  text-decoration: underline;
`;
