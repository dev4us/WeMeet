import React from "react";
import styled, { css } from "styled-components";

import { useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";

import { toast } from "react-toastify";

import TopBar from "../../../Components/TopBar";
import { GET_MEETING } from "./queries";
import Loading from "../../../Components/Loading";

const DetailMeet = ({ match, history }) => {
  if (!match.params.concept) {
    toast.error("올바르지 않은 접근 방식입니다");
    history.push({ pathname: "/" });
  }

  const { data, loading } = useQuery(GET_MEETING, {
    variables: { hashKey: match.params.hashKey }
  });

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (!loading && !data.GetMeeting.Meeting && data.error) {
    toast.error(`${data.error}`);
    history.push({ pathname: "/" });
  }

  return (
    <Container>
      <TopBar />
      <MainFrame>
        <MainContents>
          <MeetBar>
            <LeftFrame>
              {data.GetMeeting && data.GetMeeting.Meeting.thumbnail && (
                <Thumbnail backgroundURL={data.GetMeeting.Meeting.thumbnail} />
              )}
              <IntroMeeting>
                <Header>{data.GetMeeting.Meeting.title}</Header>
                <Description>{data.GetMeeting.Meeting.description}</Description>
              </IntroMeeting>
            </LeftFrame>
            <RightFrame>
              <CreateMeetBtn
                onClick={() => history.push({ pathname: "/create/title" })}
              >
                공유하기
              </CreateMeetBtn>
            </RightFrame>
          </MeetBar>
          <BottomFrame>
            <BottomLeftFrame>
              <MeetSubMenu
                isActive={match.params.concept === "setDate"}
                onClick={() => {
                  history.push({
                    pathname: `/myMeet/${match.params.hashKey}/setDate`
                  });
                }}
              >
                일정 조율
              </MeetSubMenu>
              <MeetSubMenu
                isActive={match.params.concept === "participants"}
                onClick={() => {
                  history.push({
                    pathname: `/myMeet/${match.params.hashKey}/participants`
                  });
                }}
              >
                참여자 목록
              </MeetSubMenu>
              <MeetSubMenu
                isActive={match.params.concept === "setting"}
                onClick={() => {
                  history.push({
                    pathname: `/myMeet/${match.params.hashKey}/setting`
                  });
                }}
              >
                설정 변경
              </MeetSubMenu>
              <MeetSubMenu
                delete="on"
                isActive={match.params.concept === "delete"}
                onClick={() => {
                  history.push({
                    pathname: `/myMeet/${match.params.hashKey}/delete`
                  });
                }}
              >
                일정 삭제
              </MeetSubMenu>
            </BottomLeftFrame>
            <BottomRightFrame>
              <BottomRightContents />
            </BottomRightFrame>
          </BottomFrame>
        </MainContents>
      </MainFrame>
    </Container>
  );
};

export default withRouter(DetailMeet);

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
  padding-top: 50px;
`;

const MainContents = styled.div`
  display: block;
  width: 100%;
  /* padding-top: 15px; */
`;

const MeetBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 30px;
  border-bottom: 1px solid #ececec;
  padding-bottom: 15px;
`;

const LeftFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IntroMeeting = styled.div`
  display: flex;
  width: 90%;
  max-width: 90%;
  flex-direction: column;
  padding-top: 5px;
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  max-width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
  padding-left: 2px;
`;

const RightFrame = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const CreateMeetBtn = styled.button`
  width: 150px;
  height: 45px;
  background: #3177eb;
  font-size: 11px;
  color: white;
  border: unset;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background: #71a0ef;
  }
`;

const Thumbnail = styled.div`
  width: 80px;
  height: 65px;
  background: url(${props => props.backgroundURL});
  background-size: 100% 100%;
  margin-right: 15px;
`;

const BottomFrame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BottomLeftFrame = styled.div`
  flex: 2;

  padding-top: 15px;
  border-right: 1px solid #ececec;
`;

const MeetSubMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  font-size: 14px;
  color: #5c5c5c;
  padding-left: 15px;
  cursor: pointer;

  &:hover {
    border-right: 3px solid #dcdcdc;
    font-weight: bold;
  }

  ${props =>
    props.isActive === true &&
    css`
      font-weight: bold;
      border-right: 3px solid #3077eb !important;
      color: #3077eb;
    `}

  ${props =>
    props.delete === "on" &&
    css`
      color: #fb6060 !important;

      &:hover {
        border-right: 3px solid #fb6060 !important;
      }
    `}

    ${props =>
      props.delete === "on" &&
      props.isActive === true &&
      css`
        border-right: 3px solid #fb6060 !important;
      `}
`;

const BottomRightFrame = styled.div`
  display: flex;
  flex: 8;
  justify-content: center;
  padding-top: 20px;
`;

const BottomRightContents = styled.div`
  width: 95%;
`;
