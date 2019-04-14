import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import TopBar from "../../../Components/TopBar";

const CreatePhoto = ({ location, history }) => {
  if (!location.state) {
    history.push("/");
  }
  const [thumbnailURL, setThumbnailURL] = useState("");
  const title = location.state.title;

  return (
    <Container>
      <TopBar />
      <MainFrame>
        <MainContents>
          <Header>{`'${title}' 일정에 어울리는 이미지가 있을까요?`}</Header>
          <InputFile
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={async e => {
              const {
                target: { files }
              } = e;

              if (files) {
                setThumbnailURL("s");
                const formData = new FormData();
                formData.append("file", files[0]);
                formData.append("api_key", "221794274994255");
                formData.append("upload_preset", "monitoro");
                formData.append("timestamp", String(Date.now() / 1000));

                const {
                  data: { secure_url }
                } = await axios.post(
                  "https://api.cloudinary.com/v1_1/monitoro/image/upload",
                  formData
                );

                if (secure_url) {
                  console.log(secure_url);
                  setThumbnailURL(secure_url);
                }
              }
            }}
          />
          <Thumnail src={thumbnailURL} url={thumbnailURL} />
          <BtnFrame>
            <CancelBtn to="/">이미지는 별도로 없습니다.</CancelBtn>
            <RightFrame>
              <InputLabel htmlFor="thumbnail">이미지 업로드</InputLabel>
              <SubmitBtn type="button">다음 단계로</SubmitBtn>
            </RightFrame>
          </BtnFrame>
        </MainContents>
      </MainFrame>
    </Container>
  );
};

export default withRouter(CreatePhoto);

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

const RightFrame = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputFile = styled.input`
  display: none;
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
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
  font-size: 11px;
`;

const Thumnail = styled.img`
  display: none;
  width: 300px;
  height: 300px;

  margin-bottom: 15px;
  ${props =>
    props.url !== "" &&
    css`
      display: block;
    `}
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

  border: 2px solid black;
  background: black;
  color: white;
  font-weight: bold;

  &:hover {
    background: white;
    color: black;
  }
  transition: all 0.3s ease;
  font-size: 11px;
`;

const CancelBtn = styled(Link)`
  font-size: 10px;
  color: #5c5c5c;
  cursor: pointer;
  text-decoration: underline;
`;