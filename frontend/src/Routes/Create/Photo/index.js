import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import styled, { css } from "styled-components";
import { toast } from "react-toastify";
import { SphereSpinner } from "react-spinners-kit";

import axios from "axios";
import { withRouter } from "react-router-dom";

import TopBar from "../../../Components/TopBar";
import { CREATE_MEETING } from "../queries";

const CreatePhoto = ({ location, history }) => {
  if (!location.state) {
    history.push("/");
  }
  const [thumbnailURL, setThumbnailURL] = useState("");
  const [loading, setLoading] = useState(false);
  const { title, desc } = location.state;

  const createMeetingMutation = useMutation(CREATE_MEETING);

  return (
    <Container>
      <TopBar />
      <MainFrame>
        <MainContents>
          <Header>{`'${title}' 일정에 어울리는 이미지가 있을까요?`}</Header>
          {loading && thumbnailURL === "" && (
            <LoaderFrame>
              <Loader size={80} color="#686769" loading={loading} />
            </LoaderFrame>
          )}
          <InputFile
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={async e => {
              const {
                target: { files }
              } = e;

              if (files) {
                setLoading(true);
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
                  setThumbnailURL(secure_url);
                  setLoading(false);
                }
              }
            }}
          />
          {!loading && thumbnailURL !== "" && (
            <Thumnail src={thumbnailURL} url={thumbnailURL} />
          )}

          <BtnFrame>
            <RightFrame>
              <InputLabel htmlFor="thumbnail">이미지 업로드</InputLabel>
              <SubmitBtn
                type="button"
                onClick={() => {
                  createMeetingMutation({
                    variables: {
                      title,
                      description: desc,
                      thumbnail: thumbnailURL
                    }
                  }).then(
                    result => {
                      const {
                        data: {
                          CreateMeeting: {
                            ok: isMutated,
                            error: mutationError,
                            Meeting: { hashKey: newMeetingKey }
                          }
                        }
                      } = result;

                      if (isMutated !== true) {
                        toast.error(mutationError);
                        return false;
                      }

                      toast.success("새로운 일정이 생성되었습니다 : )");
                      history.push({
                        pathname: `/myMeet/${newMeetingKey}`
                      });
                      return true;
                    },
                    error => {
                      toast.error(
                        "일정 생성 중 문제가 발생했습니다. 다시 시도해주세요 : ("
                      );
                      console.log(error);
                      return false;
                    }
                  );
                }}
              >
                {thumbnailURL === "" && "괜찮아요."}
                {thumbnailURL !== "" && "일정 만들기"}
              </SubmitBtn>
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
  max-width: 300px;
  max-height: 300px;
  min-width: 200px;
  min-height: 200px;

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
  justify-content: flex-end;
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

const LoaderFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Loader = styled(SphereSpinner)`
  margin-bottom: 25px;
`;
