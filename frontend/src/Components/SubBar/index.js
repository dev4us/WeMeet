import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const SubBar = ({ history, location }) => {
  const themeOption = [
    { value: "all", label: "나의 전체 일정" },
    { value: "before", label: "진행 중인 일정" },
    { value: "end", label: "종료된 일정" }
  ];

  const themeSelectorStyle = {
    control: styles => ({
      ...styles,
      backgroundColor: "white",
      width: "150px",
      height: "45px",
      fontSize: "11px"
    }),
    option: styles => ({
      ...styles,
      fontSize: "11px"
    })
  };

  const { pathname } = location;

  const themeSplit = pathname.split("/");
  const theme = themeSplit[2];

  let themeName;
  let description;
  let defaultOption;

  if (theme === "all") {
    themeName = "나의 전체 일정";
    description = "소중한 인연들과의 모든 일정입니다.";
    defaultOption = themeOption[0];
  } else if (theme === "before") {
    themeName = "나의 전체 일정";
    description = "소중한 인연들과의 모든 일정입니다.";
    defaultOption = themeOption[1];
  } else if (theme === "end") {
    themeName = "나의 전체 일정";
    description = "소중한 인연들과의 모든 일정입니다.";
    defaultOption = themeOption[2];
  } else {
    history.push({
      pathname: "/"
    });
  }

  return (
    <Container>
      <LeftFrame>
        <Header>{themeName}</Header>
        <Description>{description}</Description>
      </LeftFrame>
      <RightFrame>
        <CreateMeetBtn>새로운 일정 만들기</CreateMeetBtn>
        <Select
          defaultValue={defaultOption}
          label="Single select"
          options={themeOption}
          styles={themeSelectorStyle}
          onChange={e => {
            history.push({
              pathname: `/myMeet/${e.value}`
            });
          }}
        />
      </RightFrame>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-top: 30px;
  border-bottom: 1px solid #ececec;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 13px;
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

export default withRouter(SubBar);
