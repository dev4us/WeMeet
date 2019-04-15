import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";

import TopBar from "../../../Components/TopBar";

const CreateTitle = ({ history }) => {
  const [title, setTitle] = useState("");
  const submitTitle = () => {
    if (title === "") {
      toast.warning("일정명을 적어주세요");
      return false;
    }

    if (title.length > 15) {
      toast.warning("일정명을 15자 이내로 작성해주세요");
      return false;
    }

    history.push({
      pathname: "/create/desc",
      state: {
        title
      }
    });
  };
  return (
    <Container>
      <TopBar />
      <MainFrame>
        <MainContents>
          <Header>당신의 소중한 일정을 뭐라고 부르면 좋을까요?</Header>
          <InputText
            placeholder="이곳에 작성해주세요"
            onChange={e => setTitle(e.target.value)}
          />
          <BtnFrame>
            <CancelBtn to="/">생각이 좀 필요할 것 같아요.</CancelBtn>
            <SubmitBtn
              onClick={() => {
                submitTitle();
              }}
            >
              다음 단계로
            </SubmitBtn>
          </BtnFrame>
        </MainContents>
      </MainFrame>
    </Container>
  );
};

export default withRouter(CreateTitle);

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
  padding-left: 15px;
  font-size: 25px;
  color: #5c5c5c;
  margin-bottom: 15px;
`;

const BtnFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const SubmitBtn = styled.button`
  width: 150px;
  height: 45px;
  margin-bottom: 10px;
  cursor: pointer;

  background: #3177eb;
  border: unset;
  color: white;
  font-weight: bold;

  &:hover {
    background: #71a0ef;
  }
  transition: all 0.3s ease;
`;

const CancelBtn = styled(Link)`
  font-size: 10px;
  color: #5c5c5c;
  cursor: pointer;
  text-decoration: underline;
`;
